/// <reference types = "cypress" />

import Credentials from "../../../fixtures/data/credentials.json";

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Login existing account", () => {
    cy.contains("Sign In").click({ force: true });
    cy.get('[name="email"]').eq(1).type(Credentials.email);
    cy.get('[name="password"]').eq(0).type(Credentials.password);
    cy.get('[type="submit"]').eq(1).click();
    cy.get('[class="Type__P-sc-k881ag-3 bGvSKN"]').eq(0).should('have.text', 'Hi, Jewel')
  });

  it.only("Should not be able to login without valid credentials", () => {
    cy.contains("Sign In").click({ force: true });
    cy.get('[type="submit"]').eq(1).click();
    cy.get('[data-testid="input-error"]').eq(2).should('have.text', 'Please enter your email')
    cy.get('[data-testid="input-error"]').eq(3).should('have.text', 'Please enter your password')
  });
});