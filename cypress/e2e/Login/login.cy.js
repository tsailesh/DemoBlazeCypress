const { PASSWORD, USERNAME } = require('../../Constrants/LoginConstaints');
const { LoginPage } = require('../../PageObjects/Login');
const loginPage = new LoginPage()

describe('Login Test', () => {
  it('should log in successfully', () => {
    cy.handleUncaughtException();
   loginPage.loadLoginPage();
   loginPage.login(USERNAME,PASSWORD);
   cy.get('#nameofuser').should('contain',USERNAME)
  });
});