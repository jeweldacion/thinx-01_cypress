/// <reference types = "cypress" />

import loginPage from '../../../fixtures/pom/login/login.page';
import Credentials from '../../../fixtures/data/credentials.json';

describe('Login', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Login existing account', () => {
    loginPage.buttonSignIn.click({ force: true });
    loginPage.inputEmail.eq(1).type(Credentials.email);
    loginPage.inputPassword.eq(0).type(Credentials.password);
    loginPage.buttonSubmit.eq(1).click();
    cy.contains('Hi, Jewel').should('be.visible');
  });

  it('Should not be able to login without valid credentials', () => {
    loginPage.buttonSignIn.click({ force: true });
    loginPage.buttonSubmit.eq(1).click();
    loginPage.emailInputError
      .eq(2)
      .should('have.text', 'Please enter your email');
    loginPage.passwordInputError
      .eq(3)
      .should('have.text', 'Please enter your password');
  });
});
