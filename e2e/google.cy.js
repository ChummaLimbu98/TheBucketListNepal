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
        cy.screenshot('Homepage')
       // cy.get('#nava').screenshoot('logo')
        //cy.get('#login2').should('contain', 'Log inn')
    })

})