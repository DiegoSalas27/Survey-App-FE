import faker from '@faker-js/faker'
import { InvalidFieldError } from '@validation/errors/invalid-field-error'
import { MinLengthValidation } from './min-length-validation'

const makeSut = (minLength: number) => new MinLengthValidation(faker.random.word(), minLength)

describe('MinLengthValidation', () => {
  test('Should return error if value is invalid ', () => {
    const sut = makeSut(5)
    const error = sut.validate(faker.random.alphaNumeric(3))
    expect(error).toEqual(new InvalidFieldError(sut.field))
  })

  test('Should return falsy if value is valid ', () => {
    const sut = makeSut(5)
    const error = sut.validate(faker.random.alphaNumeric(6))
    expect(error).toBeFalsy()
  })
})
