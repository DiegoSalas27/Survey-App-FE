import { ValidationBuilder as Builder, ValidationComposite } from '@validation/validators'
import { makeSignupValidation } from './signup-validation-factory'

describe('SingUpValidation Factory', () => {
  test('Should make ValidationComposite with correct validations', () => {
    const composite = makeSignupValidation()
    expect(composite).toEqual(
      ValidationComposite.build([
        ...Builder.field('name').required().min(5).build(),
        ...Builder.field('email').required().email().build(),
        ...Builder.field('password').required().min(5).build(),
        ...Builder.field('passwordConfirm').required().sameAs('password').build()
      ])
    )
  })
})
