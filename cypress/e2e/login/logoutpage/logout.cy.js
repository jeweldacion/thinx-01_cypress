import logoutPage from '../../../fixtures/pom/logout/logout.page';
import Credentials from '../../../fixtures/data/credentials.json';

let name = 'Jewel';

describe('Logout', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('To validate the successfull Logout from users account', () => {
    logoutPage.buttonSignIn.click({ force: true });
    logoutPage.inputEmail.eq(1).type(Credentials.email).should('be.visible');
    logoutPage.inputPassword
      .eq(0)
      .type(Credentials.password)
      .should('be.visible');
    logoutPage.buttonSubmit.eq(1).click();
    cy.contains(`Hi, ${name}`).should('be.visible').click();
    logoutPage.profileHeader.contains(`Welcome ${name}`).should('be.visible');
    logoutPage.buttonLogout.click({ force: true });
  });
});
