/* 
  Just to check if you are logged in, if so, log out
*/
export function checkLogout() {
  cy.get('body').then(($button) => {
    if($button.find('button[id="user_info_sign_out"]').length > 0) {
      cy.get('button[id="user_info_sign_out"]').click({force:true});
    }
  })
  cy.url().then(url => {
    if (url.includes('/library')) {
        cy.get('button[id="user_info_sign_out"]').click({force:true});
        cy.url().should('include', '/login');
    }
});
}

/*
  To log you out
*/
export function logout() {
  cy.get('button[id="user_info_sign_out"]').click({force:true}); 
  cy.url().should('include', '/login');
}