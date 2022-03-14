import faker from '@faker-js/faker'
import { InvalidFieldError } from '@validation/errors/invalid-field-error'
import { CompareFieldsValidation } from './compare-fields-validation'

const makeSut = (field: string, fieldToCompare: string) =>
  new CompareFieldsValidation(field, fieldToCompare)

describe('CompareFieldsValidation', () => {
  test('Should return error if compare is invalid', () => {
    const fieldValue = faker.random.word()
    const field = faker.database.column()
    const fieldToCompare = faker.database.column()
    const sut = makeSut(field, fieldToCompare)
    const error = sut.validate({
      [field]: fieldValue,
      [fieldToCompare]: faker.random.alphaNumeric()
    })
    expect(error).toEqual(new InvalidFieldError(fieldValue))
  })

  test('Should return falsy if compare is valid', () => {
    const field = faker.database.column()
    const fieldToCompare = faker.database.column()
    const value = faker.random.word()
    const sut = makeSut(field, fieldToCompare)
    const error = sut.validate({
      [field]: value,
      [fieldToCompare]: value
    })
    expect(error).toBeFalsy()
  })
})
