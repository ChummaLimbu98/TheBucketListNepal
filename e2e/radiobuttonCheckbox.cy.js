/// <reference  types="cypress" />

describe('check UI elements', ()=>{
    it.skip('Checking radio buttons', ()=>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        cy.get('input#male').should('be.visible')// visibility of radio buttons
        cy.get('input#female').should('be.visible')

        //selecting radio buttons
        cy.get('input#male').check().should('be.checked')
        cy.get('input#female').should('not.be.checked')
        
        cy.get('input#female').check().should('be.checked')
        cy.get('input#female').should('not.be.checked')

    })

    it('Checking check boxes',()=>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        cy.get('input#monday').should('be.visible')

        //selecting single check box -monday

    // cy.get('input#monday').check().should('be.checked')

    // //unselecting the checked nox

    // cy.get('input#monday').uncheck().should('not.be.checked')

    //selecting all the check boxes
   // cy.get('input.form-check-input[type="checkbox"]').check().should('be.checked')

  //  cy.get('input.form-check-input[type="checkbox"]').uncheck().should('not.be.checked')
  //select first checkbox
  cy.get('input.form-check-input[type="checkbox"]').first().check().should('be.checked')
  cy.get('input.form-check-input[type="checkbox"]').last().check().should('be.checked')
    })
})