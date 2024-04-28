export class LibraryPage {
    constructor() {
        this.newSongButton = cy.get('button[id="add_new_song_button"]');
        this.newSongEmptyStateButton = cy.get('button[id="empty_state_add_button"]');
        this.hideCollectionButton = cy.get(`path[id="Stroke"]`);
    }

    uploadButton() {
        this.newSongButton.click();
    }

    uploadEmptyStateButton() {
        this.newSongEmptyStateButton.click();
    }

    hideCollection() {
        this.hideCollectionButton.click();
    }

    pressConfirm() {
        cy.get(`button[id="modal_button_confirm"]`).click();
    }

    pressEditSong() {
        cy.get(`div[class^="track_container"]`).find(`div[id="library_song_edit_button_1"]`).find(`div[class^="actions-task_container"]`)
        .find(`div[class^="actions-task_drop"]`).invoke('show')
        .find(`button[class^="actions-task_button"]`).click();
    }

    pressDeleteSong() {
        cy.get(`button[id="library_song_delete_from_library_option"]`).click();
    }
}