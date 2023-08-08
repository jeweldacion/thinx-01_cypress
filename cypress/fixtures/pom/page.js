export default class {
  get buttonSignIn() {return cy.contains('Sign In')}
  get inputEmail() {return cy.get('[name="email"]')}
  get inputPassword() {return cy.get('[name="password"]')}
  get buttonSubmit() {return cy.get('[type="submit"]')}
  get buttonLogout() {return cy.get('div span').contains('Log out')}
}
