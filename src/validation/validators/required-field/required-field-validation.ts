import { RequiredFieldError } from '@validation/errors'
import { FieldValidation } from '@validation/protocols/field-validation'

export class RequiredFieldValidation implements FieldValidation {
  constructor(readonly field: string) {}

  validate(input: any): Error {
    return input[this.field] ? null : new RequiredFieldError()
  }
}
