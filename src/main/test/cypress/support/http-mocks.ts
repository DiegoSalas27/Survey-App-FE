import faker from '@faker-js/faker'
const baseUrl: string = Cypress.config().baseUrl

export const mockInvalidCredentialsError = (url: RegExp): void => {
  cy.intercept('POST', url, req => {
    req.reply(res => {
      res.send(401, res.body)
    })
  }).as('request')
}

export const mockUnexpectedError = (
  url: RegExp,
  method: 'POST' | 'GET' | 'PUT' | 'PATCH'
): void => {
  cy.intercept(method, url, req => {
    req.reply(res => {
      res.send(faker.helpers.randomize([400, 404, 500]), res.body)
    })
  }).as('request')
}

export const mockEmailInUseError = (url: RegExp): void => {
  cy.intercept('POST', url, req => {
    req.reply(res => {
      res.send(403, res.body)
    })
  }).as('request')
}

export const mockOk = (
  url: RegExp,
  method: 'POST' | 'GET' | 'PUT' | 'PATCH',
  response: any
): void => {
  cy.intercept(method, url, req => {
    req.reply(res => {
      res.send(200, response)
    })
  }).as('request')
}

export const testMainError = (error: string): void => {
  cy.getByTestId('spinner').should('not.exist')
  cy.getByTestId('main-error').should('exist').should('contain.text', error)
}

export const testUrl = (path: string): void => {
  cy.url().should('eq', `${baseUrl}${path}`)
}

export const testLocalStorageItem = (key: string): void => {
  cy.window().then(window => assert.isOk(window.localStorage.getItem(key)))
}