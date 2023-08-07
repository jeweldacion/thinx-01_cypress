import page from "../page"

class signInPage extends page{
    get firstName() {return cy.get('[name="firstName"]')}
    get lastName() {return cy.get('[name="lastName"]')}
    get buttonSignUp() {return cy.get('button p').contains('Sign up')}
}

export default new signInPage()