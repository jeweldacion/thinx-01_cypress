/// <reference types = "cypress" />

describe('Shop', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Shop', () => {
    cy.contains('shop').click();
  //   cy.get('[class="Flex-sc-1vyhscq-0 cTWGkP"]').eq(0).click();
  //   cy.get('.StyleContainer-sc-1dgtedb-0').eq(0).click();
  //   cy.contains('sleep').click();
  //   cy.get('[name="collection"]').contains('Classic').click();
  //   cy.get('.TextInput__Text-sc-1g1jqlv-0').contains('black').click();
  });
});
