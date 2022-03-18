export const testInputStatus = (field: string, error: string, face: string): void => {
  cy.getByTestId(field).should('have.attr', 'title', error).should('contain.text', face)
}

export const testMainError = (error: string): void => {
  cy.getByTestId('spinner').should('not.exist')
  cy.getByTestId('main-error').should('exist').should('contain.text', error)
}
