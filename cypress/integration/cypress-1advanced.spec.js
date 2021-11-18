// cypress-1advanced.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('react-redux Advanced level', () => {

  let user;

  before(function () {
    cy.task("freshUser").then((object) => {
        user = object;
    });
});

  it('', () => {
    cy.visit('https://react-redux.realworld.io/#/');
    cy.get(':nth-child(3) > .nav-link').click();
    cy.get(':nth-child(1) > .form-control').type(user.username);
    cy.get(':nth-child(2) > .form-control').type(user.email);
    cy.get(':nth-child(3) > .form-control').type(user.password);
    cy.get('.btn').click();
    cy.get('.navbar').contains(user.username).should('exist');
  })
})