export default class LoginPage {

    TypeCredentials(){
        cy.get("input[data-test='username']").type("standard_user")
        cy.get("input[data-test='password']").type("secret_sauce")
    }

    ClickOnLoginButton(){
        cy.get("input[data-test='login-button']").click()
    }

    CheckNewUrl(){
        cy.url().should('be.eq', 'https://www.saucedemo.com/inventory.html')
    }
}