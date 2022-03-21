import { setLocalStorageItem } from '../utils/helpers'
import * as Helper from '../utils/http-mocks'

const path = /surveys/
const mockUnexpectedError = (): void => Helper.mockServerError(path, 'GET')
const mockOk = (): void => {
  cy.fixture('survey-result').then(surveyResult => {
    Helper.mockOk(path, 'GET', surveyResult)
  })
}

describe('SurveyResult', () => {
  beforeEach(() => {
    cy.fixture('account').then(account => {
      setLocalStorageItem('account', account)
    })
    cy.visit('/surveys/any_id')
  })

  it('Should present error on UnexpectedError', () => {
    mockUnexpectedError()
    cy.getByTestId('error').should('contain.text', 'An error has occurred. Please try again.')
  })

  it('Should reload on button click', () => {
    mockUnexpectedError()
    cy.wait('@requestError').then(res => {
      cy.getByTestId('error').should('contain.text', 'An error has occurred. Please try again.')
      mockOk()
      cy.getByTestId('reload').click()
      cy.getByTestId('question').should('exist')
    })
  })
})
