///<reference types= "cypress" />

describe('Handle tabs',()=>{
    it.skip('Approach1',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')// parent tab

        cy.get('.example>a').invoke('removeAttr','target').click()
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

        cy.wait(5000)
        //operation
        cy.go('back') //Back to parent tab


    })

    it('Approach2',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')// parent tab

        cy.get('.example>a').then((e)=>{

            let url=e.prop('href')// java script variable//prop= property
            cy.visit(url)
        })
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        
        cy.wait(5000)
        //operation
        cy.go('back') //Back to parent tab
        //cy.go('back')

})
})