import { LoginPage } from '../../page-objects/LoginPage.js';
import { RegisterPage } from '../../page-objects/RegisterPage.js'
import { UploadPage } from '../../page-objects/UploadPage.js';
import { LibraryPage } from '../../page-objects/LibraryPage.js';
import { GraphQLRequests } from '../../../support/utils/GraphqlRequests.js';
import { checkLogout, logout } from '../../../support/utils/utils.js';

describe('Library', () => {

    beforeEach(() => {
        cy.visit('/');
        checkLogout();
        let loginPage = new LoginPage();
        loginPage.goToRegister();
        let registerPage = new RegisterPage();
        registerPage.performRegister();
    });

    it('Must upload a song successfully', () => {
        let libraryPage = new LibraryPage();
        libraryPage.uploadButton();
        cy.intercept('POST', 'https://api.moises.ai/graphql', (req) => {
            if (req.body && req.body.query && req.body.query.includes('createTask')) {
                req.alias = 'createTask'
            }
        });
        let uploadPage = new UploadPage();
        uploadPage.uploadFile("./cypress/support/assets/TESTE FAQ.mp3", "select");
        uploadPage.nextPage();
        uploadPage.selectTwoTracks();
        uploadPage.submitUpload();
        cy.wait('@createTask', {timeout: 30000})
        .then(interception => {
            const requestBody = interception.request.body;
            expect(requestBody.query).to.include('input: \"TESTE FAQ.mp3\"\n');
        });
        cy.contains('Tarefa criada com sucesso').should('be.visible');
    });

    it('Must upload a song successfully in empty state', () => {
        let libraryPage = new LibraryPage();
        libraryPage.uploadEmptyStateButton();
        cy.intercept('POST', 'https://api.moises.ai/graphql', (req) => {
            if (req.body && req.body.query && req.body.query.includes('createTask')) {
                req.alias = 'createTask'
            }
        });
        let uploadPage = new UploadPage();
        uploadPage.uploadFile("./cypress/support/assets/TESTE FAQ.mp3", "select");
        uploadPage.nextPage();
        uploadPage.selectTwoTracks();
        uploadPage.submitUpload();
        cy.wait('@createTask', {timeout: 30000})
        .then(interception => {
            const requestBody = interception.request.body;
            expect(requestBody.query).to.include('input: \"TESTE FAQ.mp3\"\n');
        });
        cy.contains('Tarefa criada com sucesso').should('be.visible');
    });

    it('Must hide the Moises collection', () => {
        let libraryPage = new LibraryPage();
        libraryPage.hideCollection();
        libraryPage.pressConfirm();
        cy.get('div[class^="playlist-sample_container"]').should('not.exist');
    });

    it('Must delete a uploaded song', () => {
        let libraryPage = new LibraryPage();
        libraryPage.uploadEmptyStateButton();
        let uploadPage = new UploadPage();
        uploadPage.uploadFile("./cypress/support/assets/TESTE FAQ.mp3", "select");
        uploadPage.nextPage();
        uploadPage.selectTwoTracks();
        uploadPage.submitUpload();
        cy.contains('Tarefa criada com sucesso').should('be.visible');
        libraryPage.pressEditSong();
        libraryPage.pressDeleteSong();
        libraryPage.pressConfirm();
        cy.contains('TESTE FAQ').should('not.exist');
    });

    afterEach(() => {
        logout();
    })

});