import { getLocalStorageItem, setLocalStorageItem, testUrl } from '../utils/helpers'
import * as Helper from '../utils/http-mocks'

const path = /surveys/
export const mockUnexpectedError = (): void => Helper.mockServerError(path, 'GET')
export const mockAccessDeniedError = (): void => Helper.mockForbiddenError(path, 'GET')

describe('SurveyList', () => {
  beforeEach(() => {
    cy.fixture('account').then(account => {
      setLocalStorageItem('account', account)
      cy.visit('')
    })
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

  it('Should logout on logout link click', () => {
    cy.getByTestId('logout').click()
    testUrl('/login')
  })
})
