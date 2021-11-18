// cypress-1.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('react-redux', () => {
  it('', () => {
    cy.visit('https://react-redux.realworld.io/#/');
    cy.get(':nth-child(2) > .nav-link').click();
    cy.get(':nth-child(1) > .form-control').type('lina@mail.com');
    cy.get(':nth-child(2) > .form-control').type('12345678');
    cy.get('.btn').click();
    cy.get('.navbar').contains('Lina').should('exist');
  })
})