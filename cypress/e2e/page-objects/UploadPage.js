export class UploadPage {
    constructor() {
        this.inputFile = cy.get('input[type="file"]');
        this.uploadNextButton = cy.get('button[id="upload_next_button"]');
    }

    uploadFile(filePath, actionType) {
        this.inputFile.selectFile(filePath, { action: actionType, force: true});
    }

    nextPage() {
        this.uploadNextButton.click();
    }

    submitUpload() {
        cy.get('button[id="upload_submit_button"]').click();
    }

    selectTwoTracks() {
        cy.get('button[id="vocals-accompaniment"]').click();
    }
}