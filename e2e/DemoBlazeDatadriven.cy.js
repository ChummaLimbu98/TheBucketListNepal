///<reference types ="Cypress"/>

it('abcd', function(){
    cy.visit('https://demoblaze.com/')
    cy.get('#signin2').click()
    cy.get(500)
    cy.get('#sign-username').type(userID_Alpha())
    function userID_Alpha() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
    }
    cy.get(500)
    cy.get('#sign-password').type('757t465')
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()  
})