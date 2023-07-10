/// <reference types="cypress"/>

//describe('demo1',()=>{
//     it('test demo ',()=>{
//        cy.visit("https://www.demoblaze.com/")
//         cy.get('#ligin2').click()

//         cy.get('#loginusername').type('Adminab')
//         cy.get('#loginpassword').type('Adminab')
//     })
// })

describe('login',()=> 
    {
        beforeEach(() => {

            cy.visit('https://demoblaze.com/')
            cy.get('#login2').click()
        
        })

    it('input data',()=>{
    cy.get('#loginusername').type('Adminab')
    cy.get('#loginpassword').type('Adminab')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.wait(5000)
    cy.get('#login2').should('contain','Log in')
    
    cy.wait(5000)
    cy.get('[disabled]').click({force: true})
    cy.get('#logout2').should('contain','Log out')// For logout
    
     })
         
    //  it('valid data ',()=>{
    //     cy.get('#loginusername').type('user')
    //     cy.get('#loginpassword').type('user')
    //     cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    //     cy.wait(5000)
    //     cy.get('#nameofuser').should('contain','welcome user')
            
    //     })

    // it('valid data ',()=>{
    // cy.get('#loginusername').type('user')
    // cy.get('#loginpassword').type('user')
    // cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    // cy.wait(5000)
    // cy.get('#nameofuser').should('contain','welcome user')
        
    //   })
  })      