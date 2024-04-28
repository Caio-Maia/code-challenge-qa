import { LoginPage } from '../../page-objects/LoginPage.js'

describe('Login', () => {
    beforeEach(() => {
        cy.visit('/login');
    });

    it('deve permitir login com credenciais válidas', () => {
        let loginPage = new LoginPage();

        loginPage.fillEmail(Cypress.env('email'));
        loginPage.fillPassword(Cypress.env('password'));
        loginPage.submitLogin();

        cy.url().should('include', '/library');
    });

});