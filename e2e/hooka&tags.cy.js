///<reference types="Cypress"/>

//before
//after
//beforeEach
//afterEach

describe('MyTestSuite', ()=>{
 
    before(()=>{
        cy.log("Lunch app")
    })

    after(()=>{
        
        cy.log("close app")
    })

    beforeEach(()=>{
        // comea from mocha framework
        cy.log(" Login ")
    })

    afterEach(()=>{

        cy.log(" Logout")
    })

    it('search',()=>{

        cy.log(" ")
    })

    it('advanced search',()=>{

        cy.log("   ")
    })

    it('listing products',()=>{

        cy.log("   ")
    })
})