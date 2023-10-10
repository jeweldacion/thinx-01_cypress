/// <reference types = "cypress" />

describe('Shop', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should be able to add item in the cart without signing in', () => {
    cy.get('nav span').contains('shop').trigger('mouseover', {force: true})
    cy.contains('Hiphugger').click({force: true})
    cy.get('.DropletLink__StyledDroplets-sc-18jej1t-0').eq(0).click()
    cy.get('[data-testid="color-swatch-Black"]').click()
    cy.get('div label').contains('XS').click()
    cy.get('#productQuantity').should('have.value', '1')
    cy.get('[type="button"]').contains('style + fit').click()
    cy.contains('add to bag').click()
    cy.get('#cart-preview-trigger').trigger('mouseover')
    cy.contains('view bag').click({force: true})
    cy.get('[aria-label="product in cart"]').contains('Super Hiphugger').should('be.visible')
    cy.get('[aria-label="product in cart"]').contains('XS / Black').should('be.visible')
 
  });
});
