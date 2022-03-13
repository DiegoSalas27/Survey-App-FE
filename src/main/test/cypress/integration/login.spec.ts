import faker from '@faker-js/faker'
import { testInputStatus } from '../support/form-helper'
import { testLocalStorageItem, testMainError, testUrl } from '../support/http-mocks'
import { mockInvalidCredentialsError, mockInvalidData, mockOk, mockUnexpectedError } from './login-mocks'

const simulateValidSubmit = (): void => {
  cy.getByTestId('email').focus().type(faker.internet.email())
  cy.getByTestId('password').focus().type(faker.random.alphaNumeric(6))
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

    cy.wait('@request').then(res => {
      testMainError('An error has occurred. Please try again.')
      testUrl('/login')
    })
  })

  it('Should present error UnexpectedError if invalid data is returned', () => {
    mockInvalidData()
    cy.getByTestId('email').focus().type(faker.internet.email())
    cy.getByTestId('password').focus().type(faker.random.alphaNumeric(6)).type('{enter}')
    // cy.getByTestId('submit').click()
    cy.getByTestId('error-wrap')
      .getByTestId('spinner')
      .should('exist')
      .getByTestId('main-error')
      .should('not.exist')

    cy.wait('@request').then(res => {
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
      testLocalStorageItem('accessToken')
    })
  })

  it('Should prevent multiple submits', () => {
    mockOk()
    cy.getByTestId('email').focus().type(faker.internet.email())
    cy.getByTestId('password').focus().type(faker.random.alphaNumeric(6))
    cy.getByTestId('submit').dblclick()

    cy.get('@request.all').should('have.length', 1)
  })

  it('Should not call submit if form is invalid', () => {
    mockOk()
    cy.getByTestId('email').focus().type(faker.internet.email()).type('{enter}')
    cy.get('@request.all').should('have.length', 0)
  })
})
