import faker from '@faker-js/faker'
import { setLocalStorageItem } from '../support/helpers'
import { mockUnexpectedError } from '../support/survey-list-mocks'

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
})
