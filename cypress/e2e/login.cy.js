import LoginPage from "../support/pageObjects/loginPage"
describe('test login state', () => {
  const loginPage = new LoginPage()

  it('login is successful with the right credentials', () => {
    cy.visit('https://www.saucedemo.com/')
    loginPage.TypeCredentials()
    loginPage.ClickOnLoginButton()
    loginPage.CheckNewUrl()
  })
})