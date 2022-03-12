import { AddAccountParams } from '@domain/usecases'
import faker from '@faker-js/faker'

export const mockAddAccountParams = (): AddAccountParams => {
  const password = faker.internet.password()
  return {
    email: faker.internet.email(),
    name: faker.name.findName(),
    password: password,
    passwordConfirm: password
  }
}
