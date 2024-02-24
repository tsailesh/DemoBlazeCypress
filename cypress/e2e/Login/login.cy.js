
const {
  VALID_PASSWORD,
  INVALID_PASSWORD,
  VALID_USERNAME,
  INVALID_USERNAME,
} = require("../../Constraints/LoginConstaints");
import loginData from "../../fixtures/loginData.json";

beforeEach(() => {
  loginPage.loadLoginPage();
});

describe("Login Test", () => {
 it("Login with empty credentials", () => {
    loginPage.clickLogin();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Please fill out Username and Password.");
    });
  });
  it("Login with invalid username", () => {
    loginPage.enterCredentials(INVALID_USERNAME, INVALID_PASSWORD);
    loginPage.clickLogin();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("User does not exist.");
    });
  });
  it("Login with invalid password", () => {
    loginPage.enterCredentials(VALID_USERNAME, INVALID_PASSWORD);
    loginPage.clickLogin();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Wrong password.");
    });
  });
  it("Login with valid username and passwprd", () => {
    loginPage.enterCredentials(VALID_USERNAME, VALID_PASSWORD);
    loginPage.clickLogin();
    cy.get("#nameofuser").should("contain", VALID_USERNAME);
  });
});
