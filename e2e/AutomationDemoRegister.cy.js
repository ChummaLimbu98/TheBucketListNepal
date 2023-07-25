///<reference types="cypress"/>

describe("Automation demo site", function () {
    beforeEach("Register", function () {
        cy.visit("https://demo.automationtesting.in/Register.html")

    })
    it("Describs input field", function () {
        cy.get("input[placeholder='First Name']").type("Ram")
        cy.get("input[placeholder='Last Name']").type("Shah")
        cy.get('.col-md-8 > .form-control').type('KTM')
        cy.get("input[type='email']").type('ram123@gmail.com')
        cy.get("input[type='tel']").type('9876534232')
        cy.wait(5000)
    })
    it("Radio button check section", function () {
        
        cy.get("input[value='Male']").check().should('be.checked')
        cy.get("input[value='FeMale']").check().should('be.checked')
        cy.wait(5000)
    })
    it("Check box selection", function () {
        cy.get("#checkbox1").check().should('be.checked')
        cy.get("#checkbox3").check().should('be.checked')
        cy.wait(5000)
    })
    it("Language selection", function () {

        // cy.get('#msdd').click();
        // cy.get('div.ui-autocomplete-multiselect')
        // .contains('arabic') 
        // .click();
        cy.get("#Skills.form-control").select('Analytics').should('have.value', 'Analytics')
        cy.get('span.select2-selection__rendered').click({ force: true });
        cy.contains('.select2-results__option', 'Australia').click();
        cy.wait(5000)
    })
    it("Date filled section",function(){
        cy.get('#yearbox').select('2014').should('have.value','2014')
        cy.get("select[placeholder='Month']").select('January').should('have.value','January')
        cy.get('#daybox').select('1').should('have.value','1')
    })
    it('Password',function(){
        cy.get('#firstpassword').type('@Chumma')
        cy.get('#secondpassword').type('@Chumma')

        //Click the submit button
        cy.get('#submitbtn').click()
    })
})