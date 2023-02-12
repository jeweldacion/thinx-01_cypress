/// <reference types = "cypress" />


describe("Homepage", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("Should Login new account", () => {
      cy.get(".Type__P-sc-k881ag-3.bGvSKN").contains("Sign In").click({force:true})
      cy.get('button p').contains("Sign up").click()
      cy.get('[name="firstName"]').type("firstName")
      cy.get('[name="lastName"]').type("lastName")
      cy.get('[name="email"]').eq(2).type("email")
      cy.get('[name="password"]').eq(1).type(" password")
      //cy.get('[id="birthday-input"]').click()

      let date = new Date()
      date.setDate(date.getDate() + 2) 
      let futureDay = date.getDay()
      //let futureMonth = date.getMonth()
      let futureMonth = date.toLcaleString('default' , {month: 'short'})

      cy.get('[name="birthday"]').click().should('have.value', '[value="1991-01-18"]')
    });
});