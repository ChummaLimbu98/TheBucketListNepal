///<reference types="cypress" />

import 'cypress-file-upload'

describe('Recruitment of OrangeHRM', function () {
    beforeEach('Login', function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[placeholder="Username"]').type('Admin')
        cy.get('input[placeholder="Password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.wait(5000)
        cy.get("a[class='oxd-main-menu-item active'] span[class='oxd-text oxd-text--span oxd-main-menu-item--name']").click()
    })
    it('Recruitment of employee', function () {
        cy.get(':nth-child(5) > .oxd-main-menu-item > .oxd-text').click()
        cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']").click()
        cy.get("input[placeholder='First Name']", { timeout: 10000 }).type('Ram')
        cy.get("input[placeholder='Middle Name']").type('Kumar')
        cy.get("input[placeholder='Last Name']").type('Shah')
        cy.get('.oxd-topbar-header-title').click({ force: true });

        cy.get('.oxd-select-text-input').click({ force: true });
        cy.contains('.oxd-select-option', 'Junior Account Assistant').click();

        cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('ramshah@gmail.com')
        cy.get('.oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(9867543265)

        // const filePath = "resume.pdf"
        // cy.get('.oxd-icon.bi-upload.oxd-file-input-icon').click()
        // cy.get('.oxd-file-input-div').attachFile(filePath)
        // cy.wait(5000)

        cy.get("input[placeholder='Enter comma seperated words...']").type('Ram is very energetic and humble person')
        cy.wait(5000)

        const dateValue = '2023-07-25'
        cy.get('.oxd-date-input input').clear()
        cy.get('.oxd-date-input input').type(dateValue)

        cy.get('.oxd-date-input input').should('have.value', dateValue)

        cy.get("textarea[placeholder='Type here']").type('Im ready to work  ')
        cy.get(".oxd-icon.bi-check.oxd-checkbox-input-icon").click()
        cy.get('.oxd-icon.bi-check.oxd-checkbox-input-icon').click()
        cy.get('.oxd-button--secondary').click
    })

    //    it("Log out", function(){
    //     cy.get('.oxd-userdropdown-tab').click()
    //     cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
    //    })
})

