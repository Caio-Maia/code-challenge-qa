export class LoginPage {
    constructor() {
        this.emailInput = cy.get('input[id="email_address_textbox"]');
        this.passwordInput = cy.get('input[id="password_textbox"]');
        this.submitButton = cy.get('button[id="login_button"]');
        this.registerButton = cy.get('button[id="sign_up_button"]')
    }

    fillEmail(email) {
        this.emailInput.type(email);
    }

    fillPassword(password) {
        this.passwordInput.type(password);
    }

    submitLogin() {
        this.submitButton.click();
    }

    goToRegister() {
        this.registerButton.click();
    }

    performLogin() {
        this.fillEmail(Cypress.env('email'));
        this.fillPassword(Cypress.env('password'));
        this.submitLogin();
    }
}