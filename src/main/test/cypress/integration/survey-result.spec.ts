import { setLocalStorageItem, testUrl } from '../utils/helpers'
import * as Helper from '../utils/http-mocks'

const path = /surveys/
const mockUnexpectedError = (): void => Helper.mockServerError(path, 'GET')
const mockAccessDeniedError = (): void => Helper.mockForbiddenError(path, 'GET')
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

  it('Should logout on AccessDeniedError', () => {
    mockAccessDeniedError()
    testUrl('/login')
  })

  it('Should present survey result', () => {
    mockOk()
    cy.getByTestId('question').should('have.text', 'Question 2')
    cy.getByTestId('day').should('have.text', '20')
    cy.getByTestId('month').should('have.text', 'Oct')
    cy.getByTestId('year').should('have.text', '2020')
    cy.wait('@request').then(res => {
      cy.get('li:nth-child(1)').then(li => {
        assert.equal(li.find('[data-testid="answer"]').text(), 'any_answer')
        assert.equal(li.find('[data-testid="percent"]').text(), '70%')
        assert.equal(li.find('[data-testid="image"]').attr('src'), 'any_image')
      })
      cy.get('li:nth-child(2)').then(li => {
        assert.equal(li.find('[data-testid="answer"]').text(), 'any_answer_2')
        assert.equal(li.find('[data-testid="percent"]').text(), '30%')
        assert.notExists(li.find('[data-testid="image"]'))
      })
    })
  })

  it('Should go to SurveyList on back button click', () => {
    cy.visit('')
    cy.visit('/surveys/any_id')
    mockOk()
    cy.wait('@request').then(res => {
      cy.getByTestId('back-button').click()
      testUrl('/')
    })
  })
})
