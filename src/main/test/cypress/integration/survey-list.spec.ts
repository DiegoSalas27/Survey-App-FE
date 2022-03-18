import { getLocalStorageItem, setLocalStorageItem, testUrl } from '../utils/helpers'
import * as Helper from '../utils/http-mocks'

const path = /surveys/
export const mockUnexpectedError = (): void => Helper.mockServerError(path, 'GET')
export const mockAccessDeniedError = (): void => Helper.mockForbiddenError(path, 'GET')
const mockOk = (): void => {
  cy.fixture('survey-list').then(surveyList => {
    Helper.mockOk(path, 'GET', surveyList)
  })
}

describe('SurveyList', () => {
  beforeEach(() => {
    cy.fixture('account').then(account => {
      setLocalStorageItem('account', account)
    })
  })

  it('Should present error on UnexpectedError', () => {
    cy.visit('')
    mockUnexpectedError()
    cy.wait('@request')
    cy.getByTestId('error').should('contain.text', 'An error has occurred. Please try again.')
  })

  it('Should reload on button click', () => {
    cy.visit('')
    mockUnexpectedError()
    cy.wait('@request')
    cy.getByTestId('error').should('contain.text', 'An error has occurred. Please try again.')
    mockOk()
    cy.getByTestId('reload').click()
    cy.get('li:not(:empty)').should('have.length', 2)
  })

  it('Should logout on AccessDeniedError', () => {
    cy.visit('')
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
    cy.visit('')
    cy.getByTestId('logout').click()
    testUrl('/login')
  })

  it('Should present survey items', () => {
    mockOk()
    cy.visit('')
    cy.get('li:empty').should('have.length', 4)
    cy.wait('@request').then(res => {
      cy.get('li:not(:empty)').should('have.length', 2)
      cy.get('li:nth-child(1)').then(li => {
        assert.equal(li.find('[data-testid="day"]').text(), '03')
        assert.equal(li.find('[data-testid="month"]').text(), 'Feb')
        assert.equal(li.find('[data-testid="year"]').text(), '2018')
        assert.equal(li.find('[data-testid="question"]').text(), 'Question 1')
        cy.fixture('icons').then(icon => {
          assert.equal(li.find('[data-testid="icon"]').attr('src'), icon.thumbUp)
        })
      })
    })
  })
})
