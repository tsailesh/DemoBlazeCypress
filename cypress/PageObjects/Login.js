export class LoginPage{
    locators={
        loginPage : '#login2',
        usernameLocator : '#loginusername',
        passwordLocator : '#loginpassword',
        loginBtnLocator : '#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary',
        loginButton : '#logInModal .modal-footer .btn-primary'
    }

    loadLoginPage(){
        cy
        .log('Navigate to login page')
        cy
        .visit('/')
        cy
        .get(this.locators.loginPage)
        .should('be.visible').trigger('click',{force:true});
    }

    clickLogin(){
        cy.log("Clicking login button");
        cy.get(this.locators.loginButton).should('be.be.visible').trigger('click',{force:true})

    }
    
    enterCredentials(username,password){
        cy.
        log('Inputting username and password in fields and clicking login button')
        cy.
        get(this.locators.usernameLocator).should('be.visible').type(username?username:'',{force:true})
        cy.
        get(this.locators.passwordLocator).should('be.visible').type(password?password:'',{force:true})
    }
}