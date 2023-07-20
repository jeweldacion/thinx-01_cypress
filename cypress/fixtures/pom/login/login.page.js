import page from "../page"

class LoginPage extends page{
    get userName() {return cy.get('[class="Type__P-sc-k881ag-3 bGvSKN"]')}
    get emailInputError() {return cy.get('[data-testid="input-error"]')}
    get passwordInputError() {return cy.get('[data-testid="input-error"]')}
}

export default new LoginPage()