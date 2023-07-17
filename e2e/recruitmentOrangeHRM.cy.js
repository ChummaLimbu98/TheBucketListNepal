///<reference types="cypress" />


describe('Recruitment of OrangeHRM', function () {
    beforeEach('Login', function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.get('input[placeholder="Username"]').type('Admin')
        // cy.get('input[placeholder="Password"]').type('admin123')
        // cy.get('button[type="submit"]').click()
        //cy.wait(5000)

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        cy.get(':nth-child(5) > .oxd-main-menu-item > .oxd-text').click()
        cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']").click()
    })
    it.skip('Recruitment of employee', function () {
        //cy.get('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').should('contain','Full Name')
        // cy.get("input[placeholder='First Name']").type('Ram')
        // cy.get("input[placeholder='Middle Name']").type('Kumar')
        // cy.get("input[placeholder='Last Name']").type('Shah')
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Ram')
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('Kumar')
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Shah')
        cy.get('.oxd-topbar-header-title').click({ force: true });

        cy.get('.oxd-select-text-input').click({ force: true });
        cy.contains('.oxd-select-option', 'Junior Account Assistant').click();

        cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('ramshah@gmail.com')
        cy.get('.oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(9867543265)

    })
    it.only('select the file', function () {
        const filePath = "resume.pdf"
        cy.get('.oxd-icon.bi-upload.oxd-file-input-icon').click()
        cy.get('.oxd-file-div > .oxd-icon').attachFile(filePath)
        
        cy.wait(10000)
    })
    it('Describe', function () {
        cy.get("input[placeholder='Enter comma seperated words...']").type('Ram is very energetic and humble person')
        cy.wait(5000)
        cy.get("input[placeholder='yyyy-mm-dd']").should('have.value','2023-07-14')
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

