///<reference types="cypress" />


describe('select check box and radio buttons',function(){
    it.skip('Radio button',function(){
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get(".radioButton").eq(2).click()
        cy.get('#checkBoxOption2').click()
        cy.get('#checkBoxOption3').click()
    })
    it('static dropdown',function(){
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get('#dropdown-class-example').select('API').should('have.value','option3')
        // Dynamic dropdown

        cy.get('#autocomplete').type('can')
        cy.get('.ui-menu-item div').each(($e1, index, $list)=>{
            if($e1.text() ==='Canada'){
            cy.wrap($e1).click()
            }
        })
    })
})