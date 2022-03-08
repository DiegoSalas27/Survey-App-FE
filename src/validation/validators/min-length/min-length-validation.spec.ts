import faker from '@faker-js/faker'
import { InvalidFieldError } from '@validation/errors/invalid-field-error'
import { MinLengthValidation } from './min-length-validation'

describe('MinLengthValidation', () => {
  test('Should return error if value is invalid ', () => {
    const sut = new MinLengthValidation(faker.random.word(), 5)
    const error = sut.validate('123')
    expect(error).toEqual(new InvalidFieldError(sut.field))
  })
})
