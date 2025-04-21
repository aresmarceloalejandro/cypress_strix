import { loginPage } from '../pages/login/login_page'
import { homePage } from '../pages/home/home_page'

describe('Strix Demo', () => {
    let username = Cypress.env('user_name')
    let password = Cypress.env('password')

    beforeEach(() =>{
        cy.visit('/');
    })

    it('Generate Success Login in Strix', () => {
        loginPage.submitLogin(username,password)
        homePage.userLogout()
    });

    it('Generate Failed Login in Strix', () => {
        loginPage.submitLogin(username,"Error#Password")
        loginPage.validateLoginError()
    });
});
