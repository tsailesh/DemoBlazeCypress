const { PASSWORD, USERNAME } = require("../../Constraints/LoginConstaints");
import loginData from '../../fixtures/loginData.json'
const { LoginPage } = require("../../PageObjects/Login");
const loginPage = new LoginPage();

beforeEach(() => {
  loginPage.loadLoginPage();
});

describe("Login Test", () => {
  it("Login with valid username and passwprd", () => {
    cy.
    handleUncaughtException();
    loginPage.login(USERNAME, PASSWORD);
    cy.
    get("#nameofuser").should("contain", USERNAME);
  });
  it("Login with invalid credentials", () => {
    cy.
    handleUncaughtException();
    loginPage.login(loginData.invalidUser, loginData.invalidPassword);
    cy.
    get("#nameofuser").should("contain", USERNAME);
  });
});
