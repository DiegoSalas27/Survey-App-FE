export const testInputStatus = (field: string, error: string, face: string): void => {
  cy.getByTestId(field)
    .should('have.attr', 'title', error)
    .should('contain.text', face)
}