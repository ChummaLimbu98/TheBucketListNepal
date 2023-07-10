///<reference types="Cypress" />

import 'cypress-file-upload'

describe('File upload',(()=>{

    it('Single file upload',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile('Log.pdf')
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
    })
    it('File upload - Rename',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile({filePath:'Log.pdf', fileName:'LogReport.pdf!'})// File name and file path are 2 parameter
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')

    })
    it('File upload - Drag and drop',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get('#drag-drop-upload').attachFile("Log.pdf", {subjectType:'drag-n-drop'})
        cy.wait(5000)
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains("Log.pdf")

    })

    it.only('Multiple file upload',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
     
        const yourfixturePath = 'Log.pdf'
        const yourfixturePath1 = 'Log12.png'
      //  cy.get('#filesToUpload').attachFile(["Log.pdf", "Log1.pdf"])
      cy.get('#filesToUpload')
      .attachFile('YourFixturePath')
      .attachFile('yourFixturePath1')
      cy.get(':nth-child(6) > strong').should('contain.text','Files You Selected:')
        
    })
    it('File upload - shadow Dom',()=>{

    })

}))