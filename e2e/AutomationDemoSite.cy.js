///<reference types="cypress" />

describe('Automation Demo site', function(){
    it('Filling out the form automatically', function(){{
        cy.visit("https://demo.automationtesting.in/Register.html")
        cy.get("input[placeholder='First Name']").type('Rajesh')
        cy.get("input[placeholder='Last Name']").type('Hamal')
        cy.get(".form-control.ng-pristine.ng-untouched.ng-valid[rows='3']").type('KTM')
    }})
})