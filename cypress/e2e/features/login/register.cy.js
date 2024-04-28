import { LoginPage } from '../../page-objects/LoginPage.js'
import { RegisterPage } from '../../page-objects/RegisterPage.js'
import { GraphQLRequests } from '../../../support/utils/GraphqlRequests.js';
import { faker } from '@faker-js/faker';
import { checkLogout, logout } from '../../../support/utils/utils.js';

describe('Register', () => {

    beforeEach(() => {
        cy.visit('/');
        checkLogout();
        let loginPage = new LoginPage();
        loginPage.goToRegister();
    });

    it('Must allow registration with valid credentials', () => {
        let registerPage = new RegisterPage();

        registerPage.fillEmail(faker.internet.email({lastName:faker.string.uuid()})); // using uuid to make sure the email is unique
        registerPage.fillPassword(faker.internet.password());
        registerPage.submitRegister();

        cy.url().should('include', '/library');
    });

    afterEach(() => {
        logout();
    })

});