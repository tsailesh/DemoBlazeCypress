export class LoginPage{
    locators={
        loginPage : '#login2',
        usernameLocator : '#loginusername',
        passwordLocator : '#loginpassword',
        loginBtnLocator : '#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
    }

    loadLoginPage(){
        cy.
        log('Navigate to login page')
        cy.
        visit('/')
        cy.
        get(this.locators.loginPage).click({force:true})

    }
    
    login(username,password){
        cy.
        log('Inputting username and password in fields and clicking login button')
        cy.
        get(this.locators.usernameLocator).type(username,{force:true})
        cy.
        get(this.locators.passwordLocator).type(password,{force:true})
        cy.
        get(this.locators.loginBtnLocator)
        .click()
    }
}