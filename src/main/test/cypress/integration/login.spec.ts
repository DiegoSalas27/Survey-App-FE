import faker from '@faker-js/faker'
import { testInputStatus, testMainError } from '../utils/form-helpers'
import { testUrl, testLocalStorageItem } from '../utils/helpers'
import * as Helper from '../utils/http-mocks'

const path = /login/
const mockInvalidCredentialsError = (): void => Helper.mockUnauthorizedError(path)
const mockUnexpectedError = (): void => Helper.mockServerError(path, 'POST')
const mockOk = (): void => {
  cy.fixture('account').then(acc => {
    Helper.mockOk(path, 'POST', acc)
  })
}

const populateFields = (): void => {
  cy.getByTestId('email').focus().type(faker.internet.email())
  cy.getByTestId('password').focus().type(faker.random.alphaNumeric(6))
}

const simulateValidSubmit = (): void => {
  populateFields()
  cy.getByTestId('submit').click()
}

describe('login', () => {
  beforeEach(() => {
    cy.visit('login')
  })

  it('Should load with correct initial state', () => {
    cy.getByTestId('email').should('have.attr', 'readOnly')
    testInputStatus('email-status', 'Required field', '😢')
    cy.getByTestId('password').should('have.attr', 'readOnly')
    testInputStatus('password-status', 'Required field', '😢')
    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present error state if form is invalid', () => {
    cy.getByTestId('email').focus().type(faker.random.word())
    testInputStatus('email-status', 'email is required', '😢')
    cy.getByTestId('password').focus().type(faker.random.alphaNumeric(3))
    testInputStatus('password-status', 'password is required', '😢')
    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present valid state if form is valid', () => {
    cy.getByTestId('email').focus().type(faker.internet.email())
    testInputStatus('email-status', "It's all good", '😃')
    cy.getByTestId('password').focus().type(faker.random.alphaNumeric(6))
    testInputStatus('password-status', "It's all good", '😃')
    cy.getByTestId('submit').should('not.have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present error InvalidCredentialsError on 401', () => {
    // url from api can be different from the local one. We want to use regex for it to find a word.
    mockInvalidCredentialsError()
    simulateValidSubmit()
    cy.getByTestId('error-wrap')
      .getByTestId('spinner')
      .should('exist')
      .getByTestId('main-error')
      .should('not.exist')

    cy.wait('@request').then(res => {
      testMainError('Invalid Credentials')
      testUrl('/login')
    })
  })

  it('Should present error UnexpectedError on 400', () => {
    mockUnexpectedError()
    simulateValidSubmit()
    cy.getByTestId('error-wrap')
      .getByTestId('spinner')
      .should('exist')
      .getByTestId('main-error')
      .should('not.exist')

    cy.wait('@requestError').then(res => {
      testMainError('An error has occurred. Please try again.')
      testUrl('/login')
    })
  })

  it('Should present save accessToken if valid credentials are provided', () => {
    mockOk()
    simulateValidSubmit()
    cy.getByTestId('error-wrap')
      .getByTestId('spinner')
      .should('exist')
      .getByTestId('main-error')
      .should('not.exist')

    cy.wait('@request').then(res => {
      cy.getByTestId('spinner').should('not.exist')
      cy.getByTestId('main-error').should('not.exist')
      testUrl('/')
      testLocalStorageItem('account')
    })
  })

  it('Should prevent multiple submits', () => {
    mockOk()
    populateFields()
    cy.getByTestId('submit').dblclick()
    cy.wait('@request').then(res => {
      cy.get('@request.all').should('have.length', 1)
    })
  })

  it('Should not call submit if form is invalid', () => {
    mockOk()
    cy.getByTestId('email').focus().type(faker.internet.email()).type('{enter}')
    cy.get('@request.all').should('have.length', 0)
  })
})
