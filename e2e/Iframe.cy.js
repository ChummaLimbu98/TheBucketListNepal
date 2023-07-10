/// <reference types="cypress"/>

describe('Handling frames', ()=>{
    it('approach1', ()=>{
        cy.visit("https://the-internet.herokuapp.com/tinymce")
        
        const iframe= cy.get("#mce_0_ifr")
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)
        // .then(function($iframe){

        //     let iframebody = $iframe.contents().find('body')
        //     cy.wrap(iframebody)
        //     .clear()
        //     .type('Welcome to cypress tutorial by testing the iframe hendling')
        //    .type('{selectall}')
        //    cy.get("[aria-label='Bold']").click()
           
        //})
        iframe.clear().type("Welcome to iframe tutorial.{ctrl+a}")
        cy.get("[aria-label='Bold']").click()
    })

})