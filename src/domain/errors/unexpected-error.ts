export class UnexpectedError extends Error {
  constructor() {
    super('An error has occurred. Please try again.')
    this.name = 'UnexpectedError'
  }
}