//const{describe} = require("mocha")

describe('Assortions demo', ()=>{
    it("Implisit assortions",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    // should, And
    // cy.url().should('include','orangehrmlive.com')
    // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // cy.url().should('contain','orangehrm')

    // cy.url().should('include','orangehrmlive.com')
    // .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // .should('contain','orangehrm')

    cy.url().should('include','orangehrmlive.com')
    .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    .and('contain','orangehrm')

    cy.title('include', 'Orange')
    .and('eq','OrangeHRM')
    .and('contain','HRM')

    // cy.get('.orangehrm-login-branding > img').should('be.visible')
    // cy.get('.orangehrm-login-branding > img').should('be.exist')

    cy.get('.orangehrm-login-branding > img').should('be.visible') //logo visible or not
    .and('exist') //logo exist or not

    cy.xpath("//a").should('have.length','5')// number of links

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')





    


    })

})