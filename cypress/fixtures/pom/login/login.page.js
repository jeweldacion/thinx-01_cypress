import page from "../page"

class LoginPage extends page{
    get emailInputError() {return cy.get('[data-testid="input-error"]')}
    get passwordInputError() {return cy.get('[data-testid="input-error"]')}
}

export default new LoginPage()