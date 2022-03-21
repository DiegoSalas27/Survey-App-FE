import faker from '@faker-js/faker'

export const mockUnauthorizedError = (url: RegExp): void => {
  cy.intercept('POST', url, {
    statusCode: 401,
    body: {
      error: faker.random.words()
    }
  }).as('request')
}

export const mockServerError = (url: RegExp, method: 'POST' | 'GET' | 'PUT' | 'PATCH'): void => {
  cy.intercept(method, url, {
    statusCode: faker.helpers.randomize([400, 404, 500]),
    body: {
      error: faker.random.words()
    },
    delay: 500
  }).as('requestError')
}

export const mockForbiddenError = (url: RegExp, method: 'POST' | 'GET' | 'PUT' | 'PATCH'): void => {
  cy.intercept(method, url, {
    statusCode: 403,
    body: {
      error: faker.random.words()
    },
    delay: 500
  }).as('request')
}

export const mockOk = (
  url: RegExp,
  method: 'POST' | 'GET' | 'PUT' | 'PATCH',
  fixture: string,
  alias: string = 'request'
): void => {
  cy.intercept(method, url, {
    statusCode: 200,
    fixture,
    delay: 500
  }).as(alias)
}
