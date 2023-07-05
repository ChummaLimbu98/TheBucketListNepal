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

    cy.get('input[placeholder="Username"]').should('have.value','Admin')// value


    })

    it('explicit assortions', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('input[placeholder="Username"]').type('Admin')
        cy.get('input[placeholder="Password"]').type('admin123')
        cy.get('button[type="submit"]').click()

        let expName="Paul Collings";
        cy.get('.oxd-userdropdown-name').then(  (x)=>{

            let actName=x.text()

            //BDD style
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)

            //TDD style
            assert.equal(actName,expName)
            assort.noteEqual(actName,expName)
        })
    })

})