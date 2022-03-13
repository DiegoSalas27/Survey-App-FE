import faker from '@faker-js/faker'
import { testInputStatus } from '../support/form-helper'

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
})
