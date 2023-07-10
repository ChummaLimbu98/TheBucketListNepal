///<reference types="Cypress" />

describe('Signup' ,function(){
    it('Enter invalid credencials',function(){
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('#signin2').click()
        cy.get('#sign-username').type('Welcomeuser')
        cy.get('#sign-password').type('Welcomeuser12')
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click()
        cy.wait(5000)

        cy.get('#signin2').click()
        cy.get('#sign-username').type('Welcomeuser')
        cy.get('#sign-password').type('Welcomeuser')
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    })
})