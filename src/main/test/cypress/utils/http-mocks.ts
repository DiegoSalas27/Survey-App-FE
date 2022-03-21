import faker from '@faker-js/faker'

export const mockUnauthorizedError = (url: RegExp): void => {
  cy.intercept('POST', url, req => {
    req.reply(res => {
      res.send(401, res.body)
    })
  }).as('request')
}

export const mockServerError = (url: RegExp, method: 'POST' | 'GET' | 'PUT' | 'PATCH'): void => {
  cy.intercept(method, url, req => {
    req.reply(res => {
      res.send(faker.helpers.randomize([400, 404, 500]), res.body)
    })
  }).as('requestError')
}

export const mockForbiddenError = (url: RegExp, method: 'POST' | 'GET'): void => {
  cy.intercept(method, url, req => {
    req.reply(res => {
      res.send(403, res.body)
    })
  }).as('request')
}

export const mockOk = (
  url: RegExp,
  method: 'POST' | 'GET' | 'PUT' | 'PATCH',
  response: any,
): void => {
  cy.intercept(method, url, req => {
    req.reply(res => {
      res.send(200, response)
    })
  }).as('request')
}
