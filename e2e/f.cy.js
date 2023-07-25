///<reference types="cypress" />

import 'cypress-file-upload'

describe('upload file in orangeHRM', function () {
    it("recruitment", function () {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate")
        cy.get('input[placeholder="Username"]').type('Admin')
        cy.get('input[placeholder="Password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.get(':nth-child(5) > .oxd-main-menu-item > .oxd-text').click()
        cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']").click()
        // cy.get('.oxd-file-button').attachFile('resume.pdf')
        
        cy.get('input[type="file"]').as('fileInput');
        cy.fixture('resume.pdf').then(fileContent => {
            cy.get('.oxd-file-input-div').attachFile({
                fileContent: fileContent.toString(),
                fileName: 'resume.pdf',
                mimeType: 'application/pdf'

            })
        })
    })
})