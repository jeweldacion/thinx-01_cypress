/// <reference types = "cypress" />

import Credentials from "../../../fixtures/data/credentials.json";

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Logout account", () => {
    cy.contains("Sign In").click({ force: true });
    cy.get('[name="email"]').eq(1).type(Credentials.email);
    cy.get('[name="password"]').eq(0).type(Credentials.password);
    cy.get('[type="submit"]').eq(1).click();
    cy.get('[class="Type__P-sc-k881ag-3 bGvSKN"]')
      .eq(0)
      .should("have.text", "Hi, Jewel")
      .click();
    cy.get(".Header__CustomerName-sc-ojawvy-1").should(
      "have.text",
      "Welcome Jewel!"
    );
    cy.contains("Log out").click({ force: true });
    cy.get(".HomePageHero__Title-sc-owfosf-2")
      .contains("underwear that absorbs your period")
      .should("be.visible");
  });
});