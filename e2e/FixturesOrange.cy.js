///<reference types="Cypress"/>

describe('MyTestSuite', () => {
    // it('Fixture Demo test', () => {
    //     cy.visit("https://opensource-demo.orangehrmlive.com/")

    //     cy.fixture('orange1').then((data) => {
    //         cy.get("input[placeholder='Username']").type(data.Username)
    //         cy.get("input[placeholder='Password']").type(data.password)
    //         cy.get("button[type='submit']").click()

    //         cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')
    //             .should('have.text', data.expected)
    //     })

    // })
    //Access through hook- for multiple blocks
    let userdata
    before(() => {
        cy.fixture('orange1').then((data) => {
            userdata = data

        })
    })
    it('Fixture Demo test', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")

        cy.get("input[placeholder='Username']").type(userdata.Username)
        cy.get("input[placeholder='Password']").type(userdata.password)
        cy.get("button[type='submit']").click()

        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')
            .should('have.text', userdata.expected)

    })

})