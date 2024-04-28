import { faker } from '@faker-js/faker';

export class RegisterPage {
    constructor() {
        this.emailInput = cy.get('input[id="email_address_textbox"]');
        this.passwordInput = cy.get('input[id="password_textbox"]');
        this.submitButton = cy.get('button[id="signup_button"]');
        this.loginButton = cy.get('button[id="sign_in_button"]')
    }

    fillEmail(email) {
        this.emailInput.type(email);
    }

    fillPassword(password) {
        this.passwordInput.type(password);
    }

    submitRegister() {
        this.submitButton.click();
    }

    performRegister() {
        this.fillEmail(faker.internet.email());
        this.fillPassword(faker.internet.password());
        this.submitRegister();
    }
}