/// <reference  types="cypress" />

describe('Login test of Orange HRM',()=>{
   it('It should login with valid credencials', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should("contain","HRM")
        cy.title().should("eq","OrangeHRM")
        cy.url().should("contains","demo")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click()

        
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
    })

    it('It should login with valid credencials', ()=>{
             cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

             cy.get('.orangehrm-login-forgot > .oxd-text').click()
             cy.get('.oxd-input').type('Admin1')
             cy.get('.oxd-input').click()
    })

})