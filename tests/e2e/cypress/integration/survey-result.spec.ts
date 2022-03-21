import { setLocalStorageItem, testUrl } from '../utils/helpers'
import * as Helper from '../utils/http-mocks'

const path = /api\/surveys/
const mockLoadkOk = (): void => Helper.mockOk(path, 'GET', 'survey-result')

describe('SurveyResult', () => {
  describe('load', () => {
    const mockUnexpectedError = (): void => Helper.mockServerError(path, 'GET')
    const mockAccessDeniedError = (): void => Helper.mockForbiddenError(path, 'GET')

    beforeEach(() => {
      cy.fixture('account').then(account => {
        setLocalStorageItem('account', account)
      })
    })

    it('Should present error on UnexpectedError', () => {
      mockUnexpectedError()
      cy.visit('/surveys/any_id')
      cy.wait('@requestError').then(res => {
        cy.getByTestId('error').should('contain.text', 'An error has occurred. Please try again.')
      })
    })

    it('Should reload on button click', () => {
      mockUnexpectedError()
      cy.visit('/surveys/any_id')
      cy.wait('@requestError').then(res => {
        cy.getByTestId('error').should('contain.text', 'An error has occurred. Please try again.')
        mockLoadkOk()
        cy.getByTestId('reload').click()
        cy.getByTestId('question').should('exist')
      })
    })

    it('Should logout on AccessDeniedError', () => {
      mockAccessDeniedError()
      cy.visit('/surveys/any_id')
      testUrl('/login')
    })

    it('Should present survey result', () => {
      mockLoadkOk()
      cy.visit('/surveys/any_id')
      cy.wait('@request').then(res => {
        cy.getByTestId('question').should('have.text', 'Question 2')
        cy.getByTestId('day').should('have.text', '20')
        cy.getByTestId('month').should('have.text', 'Oct')
        cy.getByTestId('year').should('have.text', '2020')

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
      mockLoadkOk()
      cy.visit('')
      cy.visit('/surveys/any_id')
      cy.getByTestId('back-button').click()
      testUrl('/')
    })
  })

  describe('save', () => {
    const mockUnexpectedError = (): void => Helper.mockServerError(path, 'PUT')
    const mockAccessDeniedError = (): void => Helper.mockForbiddenError(path, 'PUT')

    beforeEach(() => {
      cy.fixture('account').then(account => {
        setLocalStorageItem('account', account)
      })
      mockLoadkOk()
      cy.visit('/surveys/any_id')
    })

    it('Should present error on UnexpectedError', () => {
      mockUnexpectedError()
      cy.get('li:nth-child(2)').click()
      cy.wait('@requestError').then(res => {
        cy.getByTestId('error').should('contain.text', 'An error has occurred. Please try again.')
      })
    })

    it('Should logout on AccessDeniedError', () => {
      mockAccessDeniedError()
      cy.get('li:nth-child(2)').click()
      testUrl('/login')
    })
  })
})
