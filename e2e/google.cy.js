/// <reference  types="cypress" />

// it('google test',function(){
//     cy.visit('https://google.com')
//         cy.wait(500)
//         cy.get('.gLFyf').type('NTH limitless').type('{enter}')
//         cy.scrollTo('bottom')
//         cy.wait(500)
//         cy.scrollTo('top')
// cy.go('back')
// cy.go('forward')

// })

//Screenshot
describe('mysuite', function () {
    it('capture screenshot ', function () {

        cy.visit('https://www.demoblaze.com/index.html')
       // cy.screenshot('Homepage')
        cy.wait(5000)
        //cy.get('#nava').screenshot('logo')
        //cy.get('#login2').should('contain', 'Log inn')
    
        //Automatatically capture screenshoot and video on failure- only when we execute through CLI
        cy.get('li:nth-child(7) a:nth-child(1)').click()
        cy.get("div[id='content'] h2").should('have.text',"Tablets")
    })

})