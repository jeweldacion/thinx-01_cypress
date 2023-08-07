/// <reference types = "cypress" />

import signInPage from '../../fixtures/pom/signIn/signIn.page';

let email = 'myemail@gmail.com';

describe('Sign In', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Sign In new account with invalid email', () => {
    signInPage.buttonSignIn.click({ force: true });
    signInPage.buttonSignUp.click();
    signInPage.firstName.type('firstName');
    signInPage.lastName.type('lastName');
    signInPage.inputEmail.eq(2).type(email);
    signInPage.inputPassword.eq(1).type('password23!');
    signInPage.buttonSubmit.eq(2).click();
    cy.contains (`We have sent an email to ${email}, please click the link included to verify your email address.`
      )
  });
});
