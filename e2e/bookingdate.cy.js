/// <reference  types="cypress" />


describe('Booking page',()=>{
    it('should select a date',()=>{
        cy.visit('https://www.test.thebucketlistnepal.com/booking')
        cy.get('form > :nth-child(1) > .container > .row').click()
        cy.get('.booking-bottom-row > :nth-child(1)').click()

        const desiredDate = '2023-06-19'; // Replace with the desired date in 'YYYY-MM-DD' format

        // Wait for the input field to be visible and interactable
        cy.get('#input-67', { timeout: 10000 }).should('be.visible').click();

        // Find the input field by its ID and set its value
        cy.get('input[name="date"]').click() 
        cy.get('#input-67').clear().type(desiredDate);

        // Optional: Assert that the entered date is correct
        cy.get('#input-67').should('have.value', desiredDate);



      })
    })