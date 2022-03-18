import faker from '@faker-js/faker'
import { getLocalStorageItem, setLocalStorageItem, testUrl } from '../support/helpers'
import { mockAccessDeniedError, mockUnexpectedError } from '../support/survey-list-mocks'

describe('SurveyList', () => {
  beforeEach(() => {
    setLocalStorageItem('account', {
      accessToken: faker.datatype.uuid(),
      name: faker.name.findName()
    })
    cy.visit('')
  })

  it('Should present error on UnexpectedError', () => {
    mockUnexpectedError()
    cy.getByTestId('error').should('contain.text', 'An error has occurred. Please try again.')
  })

  it('Should logout on AccessDeniedError', () => {
    mockAccessDeniedError()
    testUrl('/login')
  })

  it('Should present correct username', () => {
    cy.visit('')
    mockUnexpectedError()
    const { name } = getLocalStorageItem('account')
    cy.getByTestId('username').should('contain.text', name)
  })
})
