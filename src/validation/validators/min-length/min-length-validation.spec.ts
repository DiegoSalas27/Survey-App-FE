import faker from '@faker-js/faker'
import { InvalidFieldError } from '@validation/errors/invalid-field-error'
import { MinLengthValidation } from './min-length-validation'

const makeSut = (field: string, minLength: number) => new MinLengthValidation(field, minLength)

describe('MinLengthValidation', () => {
  test('Should return error if value is invalid ', () => {
    const field = faker.random.word()
    const sut = makeSut(field, 5)
    const error = sut.validate({ [field]: faker.random.alphaNumeric(3) })
    expect(error).toEqual(new InvalidFieldError(sut.field))
  })

  test('Should return falsy if value is valid ', () => {
    const field = faker.random.word()
    const sut = makeSut(field, 5)
    const error = sut.validate({ [field]: faker.random.alphaNumeric(6) })
    expect(error).toBeFalsy()
  })

  test('Should return falsy if field does not exists in schema', () => {
    const sut = makeSut(faker.database.column(), 5)
    const error = sut.validate({ [faker.database.column()]: faker.random.alphaNumeric(6) })
    expect(error).toBeFalsy()
  })
})
