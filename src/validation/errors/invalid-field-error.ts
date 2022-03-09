export class InvalidFieldError extends Error {
  constructor(fieldName: string) {
    super(`${fieldName} is required`)
    this.name = 'InvalidFieldError'
  }
}
