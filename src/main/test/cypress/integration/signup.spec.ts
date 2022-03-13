import faker from '@faker-js/faker'
import { testInputStatus } from '../support/form-helper'
import { testMainError, testUrl } from '../support/http-mocks'
import { mockEmailInUseError } from '../support/signup-mocks'

const simulateValidSubmit = (): void => {
  cy.getByTestId('name').focus().type(faker.name.findName())
  cy.getByTestId('email').focus().type(faker.internet.email())
  const pwd = faker.random.alphaNumeric(6)
  cy.getByTestId('password').focus().type(pwd)
  cy.getByTestId('passwordConfirm').focus().type(pwd)
  cy.getByTestId('submit').click()
}

describe('SignUp', () => {
  beforeEach(() => {
    cy.visit('signup')
  })

  it('Should load with correct initial state', () => {
    cy.getByTestId('name').should('have.attr', 'readOnly')
    testInputStatus('name-status', 'Required field', '😢')
    cy.getByTestId('email').should('have.attr', 'readOnly')
    testInputStatus('email-status', 'Required field', '😢')
    cy.getByTestId('password').should('have.attr', 'readOnly')
    testInputStatus('password-status', 'Required field', '😢')
    cy.getByTestId('passwordConfirm').should('have.attr', 'readOnly')
    testInputStatus('passwordConfirm-status', 'Required field', '😢')
    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present error state if form is invalid', () => {
    cy.getByTestId('name').focus().type(faker.random.alphaNumeric(3))
    testInputStatus('name-status', 'name is required', '😢')
    cy.getByTestId('email').focus().type(faker.random.word())
    testInputStatus('email-status', 'email is required', '😢')
    cy.getByTestId('password').focus().type(faker.random.alphaNumeric(3))
    testInputStatus('password-status', 'password is required', '😢')
    cy.getByTestId('passwordConfirm').focus().type(faker.random.alphaNumeric(3))
    testInputStatus('passwordConfirm-status', 'passwordConfirm is required', '😢')
    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present valid state if form is valid', () => {
    cy.getByTestId('name').focus().type(faker.name.findName())
    testInputStatus('name-status', "It's all good", '😃')
    cy.getByTestId('email').focus().type(faker.internet.email())
    testInputStatus('email-status', "It's all good", '😃')
    const pwd = faker.random.alphaNumeric(6)
    cy.getByTestId('password').focus().type(pwd)
    testInputStatus('password-status', "It's all good", '😃')
    cy.getByTestId('passwordConfirm').focus().type(pwd)
    testInputStatus('passwordConfirm-status', "It's all good", '😃')
    cy.getByTestId('submit').should('not.have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present error EmailInUseError on 403', () => {
    mockEmailInUseError()
    simulateValidSubmit()
    cy.getByTestId('error-wrap')
      .getByTestId('spinner')
      .should('exist')
      .getByTestId('main-error')
      .should('not.exist')

    cy.wait('@request').then(res => {
      testMainError('Email already in use')
      testUrl('/signup')
    })
  })
})
