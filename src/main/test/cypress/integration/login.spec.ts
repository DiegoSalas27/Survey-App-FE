import faker from '@faker-js/faker'

const baseUrl: string = Cypress.config().baseUrl

describe('login', () => {
  beforeEach(() => {
    cy.visit('login')
  })

  it('Should load with correct initial state', () => {
    cy.getByTestId('email').should('have.attr', 'readOnly')
    cy.getByTestId('email-status')
      .should('have.attr', 'title', 'Required field')
      .should('contain.text', '😢')
    cy.getByTestId('password').should('have.attr', 'readOnly')
    cy.getByTestId('password-status')
      .should('have.attr', 'title', 'Required field')
      .should('contain.text', '😢')
    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present error state if form is invalid', () => {
    cy.getByTestId('email').focus().type(faker.random.word())
    cy.getByTestId('email-status')
      .should('have.attr', 'title', 'email is required')
      .should('contain.text', '😢')
    cy.getByTestId('password').focus().type(faker.random.alphaNumeric(3))
    cy.getByTestId('password-status')
      .should('have.attr', 'title', 'password is required')
      .should('contain.text', '😢')
    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present valid state if form is valid', () => {
    cy.getByTestId('email').focus().type(faker.internet.email())
    cy.getByTestId('email-status')
      .should('have.attr', 'title', "It's all good")
      .should('contain.text', '😃')
    cy.getByTestId('password').focus().type(faker.random.alphaNumeric(6))
    cy.getByTestId('password-status')
      .should('have.attr', 'title', "It's all good")
      .should('contain.text', '😃')
    cy.getByTestId('submit').should('not.have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present error InvalidCredentialsError on 401', () => {
    // url from api can be different from the local one. We want to use regex for it to find a word.
    cy.intercept('POST', /login/, req => {
      req.reply(res => {
        res.send(401, res.body)
      })
    }).as('loginRequest')

    cy.getByTestId('email').focus().type(faker.internet.email())
    cy.getByTestId('password').focus().type(faker.random.alphaNumeric(6))
    cy.getByTestId('submit').click()
    cy.getByTestId('error-wrap')
      .getByTestId('spinner')
      .should('exist')
      .getByTestId('main-error')
      .should('not.exist')

    cy.wait('@loginRequest').then(res => {
      cy.getByTestId('spinner').should('not.exist')
      cy.getByTestId('main-error').should('exist').should('contain.text', 'Invalid Credentials')
      cy.url().should('eq', `${baseUrl}/login`)
    })
  })

  it('Should present error UnexpectedError on 400', () => {
    // url from api can be different from the local one. We want to use regex for it to find a word.
    cy.intercept('POST', /login/, req => {
      req.reply(res => {
        res.send(400, res.body)
      })
    }).as('loginRequest')

    cy.getByTestId('email').focus().type(faker.internet.email())
    cy.getByTestId('password').focus().type(faker.random.alphaNumeric(6))
    cy.getByTestId('submit').click()
    cy.getByTestId('error-wrap')
      .getByTestId('spinner')
      .should('exist')
      .getByTestId('main-error')
      .should('not.exist')

    cy.wait('@loginRequest').then(res => {
      cy.getByTestId('spinner').should('not.exist')
      cy.getByTestId('main-error').should('exist').should('contain.text', 'An error has occurred. Please try again.')
      cy.url().should('eq', `${baseUrl}/login`)
    })
  })

  it('Should present error UnexpectedErrorif invalid data is returned', () => {
    cy.intercept('POST', /login/, req => {
      req.reply(res => {
        res.send(200, {
          ivalidProperty: faker.datatype.uuid()
        })
      })
    }).as('loginRequest')
    cy.getByTestId('email').focus().type(faker.internet.email())
    cy.getByTestId('password').focus().type(faker.random.alphaNumeric(6))
    cy.getByTestId('submit').click()
    cy.getByTestId('error-wrap')
      .getByTestId('spinner')
      .should('exist')
      .getByTestId('main-error')
      .should('not.exist')

    cy.wait('@loginRequest').then(res => {
      cy.getByTestId('spinner').should('not.exist')
      cy.getByTestId('main-error').should('exist').should('contain.text', 'An error has occurred. Please try again.')
      cy.url().should('eq', `${baseUrl}/login`)
    })
  })

  it('Should present save accessToken if valid credentials are provided', () => {
    cy.intercept('POST', /login/, req => {
      req.reply(res => {
        res.send(200, {
          accessToken: faker.datatype.uuid()
        })
      })
    }).as('loginRequest')
    cy.getByTestId('email').focus().type(faker.internet.email())
    cy.getByTestId('password').focus().type(faker.random.alphaNumeric(6))
    cy.getByTestId('submit').click()
    cy.getByTestId('error-wrap')
      .getByTestId('spinner')
      .should('exist')
      .getByTestId('main-error')
      .should('not.exist')

    cy.wait('@loginRequest').then(res => {
      cy.getByTestId('spinner').should('not.exist')
      cy.getByTestId('main-error').should('not.exist')
      cy.url().should('eq', `${baseUrl}/`)
      cy.window().then(window => assert.isOk(window.localStorage.getItem('accessToken')))
    })
  })
})
