/// <reference types = "cypress" />

describe('Sign In', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Sign In new account', () => {
    cy.contains('Sign In').click({ force: true });
    cy.get('button p').contains('Sign up').click();
    cy.get('[name="firstName"]').type('firstName');
    cy.get('[name="lastName"]').type('lastName');
    cy.get('[name="email"]').eq(2).type('email');
    cy.get('[placeholder="mm/dd/yyyy"]').click();
  });
});
