///<reference types ="Cypress"/>

describe('Implement Data drieven testing in DemoBlaze.com', () => {

    it('Test1', () => {

        cy.fixture("Demoblaze").then((data) => {

            cy.visit("https://www.demoblaze.com/index.html")


            data.forEach((userdata) => {

                cy.get('#login2').should('contain','Log in')
        
                //  cy.get('#loginusername').should('have.value',userdata1.Username)
                //  cy.get('#loginpassword').should('have.value', userdata1.Password)
                cy.get('input[id="loginusername"]').type(userdata.loginusername)
               
                cy.get('#loginusername').type(userdata.loginusername)
                 cy.get('#loginpassword').type(userdata.loginpassword)
                 cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
                 cy.get("button[onclick='logIn()']").click()

                // if(userdata.Username=='Admin' && userdata.password =='admin123')
                // {
                // cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')
                // .should('have.text', userdata.expected)
                // cy.get('#logout2').click()//logout
                // cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

                // }

                // else{
                //     //cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text")
                //    cy.get('p.oxd-text.oxd-text--p.oxd-alert-content-text')
                //     .should("have.text", userdata.expected)
                // }
    
            })
        })
    })
})