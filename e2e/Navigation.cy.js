///<reference types="Cypress"/>

describe('Navigation of browser',function(){
    it('Navigation test', function(){
        cy.visit('https://demo.opencart.com/')
        cy.title().should('eq',"Your Store")// hOme page
        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(7) > a:nth-child(1)").click()
        cy.get("div[id='content'] h2").should('have.text',"Cameras")//cameras page

        //Go back to home page

        cy.go('back')
        cy.title().should('eq',"Your Store")

        //Again go to cameras page
        cy.go('forward')
        
        cy.get("div[id='content'] h2").should('have.text',"Cameras")//cameras page

        cy.go(-1)//home page
        cy.title().should('eq',"Your Store")
        cy.go(1)//cameras
        cy.get("div[id='content'] h2").should('have.text',"Cameras")
    })
})