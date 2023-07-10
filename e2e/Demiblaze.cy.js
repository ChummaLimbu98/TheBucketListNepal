/// <reference types="cypress"/>

describe('login', () => {
    beforeEach(() => {

        cy.visit('https://demoblaze.com/')
        cy.get('#login2').click()

    })

    it('input data', () => {
        cy.get('#loginusername').type('Adminab')
        cy.get('#loginpassword').type('Adminab')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(5000)
        cy.get('#login2').should('contain', 'Log in')
        cy.get("li[class='nav-item active'] a[class='nav-link']").should('contain', 'Home')

    })

    it('valid username & invalid password ', () => {
        cy.get('#loginusername').type('Adminab')
        cy.get('#loginpassword').type('user12')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(5000)
        cy.get('#login2').should('contain', 'Log in')
        //cy.get('#nameofuser').should('contain', 'welcome user')

    })

    it('invalid username & valid password', () => {
        cy.get('#loginusername').type('   ')
        cy.get('#loginpassword').type('Adminab')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(5000)
        cy.get('#login2').should('contain', 'Log in')

    })

    it('invalid data ', () => {
        cy.get('#loginusername').type('Adminab')
        cy.get('#loginpassword').type('  ')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(5000)
        cy.get('#login2').should('contain', 'Log in')
    })
    it('invalid data ', () => {
        cy.get('#loginusername').type('   ')
        cy.get('#loginpassword').type('   ')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(5000)
        cy.get('#login2').should('contain', 'Log in')
    })
    it('invalid data ', () => {
        cy.get('#loginusername').type('&Chumma')
        cy.get('#loginpassword').type('&Chumma')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(5000)
        cy.get('#login2').should('contain', 'Log in')
    })

    it('invalid data ', () => {
        cy.get('#loginusername').type('****')
        cy.get('#loginpassword').type('****')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(5000)
        cy.get('#login2').should('contain', 'Log in')
    })
    it.only('Login with positive numbers ', () => {
        cy.get('#loginusername').type('14145')
        cy.get('#loginpassword').type('14145')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(5000)
        cy.get('#login2').should('contain', 'Log in')
    })

})      