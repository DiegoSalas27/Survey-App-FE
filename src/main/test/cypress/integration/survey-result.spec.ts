import { setLocalStorageItem } from '../utils/helpers'
import * as Helper from '../utils/http-mocks'

const path = /surveys/
const mockUnexpectedError = (): void => Helper.mockServerError(path, 'GET')

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
})
