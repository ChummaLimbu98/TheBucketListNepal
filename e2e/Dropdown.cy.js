///<reference types='cypress'/>

describe('handle dropdowns',()=>{
    it.skip('Dropdown with select',()=>{
        cy.visit('https://www.zoho.com/commerce/free-demo.html')

        cy.get('#zcf_address_country')
        .select('Nepal')
        .should('have.value','Nepal')
    })

    it.skip('Dropdown with select',()=>{
        cy.visit('https://www.zoho.com/commerce/free-demo.html')

        cy.get('#zcf_address_country')
        .select('Nepal')
        .should('have.value','Nepal')
    })

    it.skip('Dropdown without select',()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-order-page/')

        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Italy').type('{enter}')

        cy.get('#select2-billing_country-container').should('have.text','Italy')
   })
        it.skiip('Auto suggest dropdown',()=>{
            cy.visit('https://www.wikipedia.org/')

            cy.get('#searchInput').type('Nepal')

            cy.get('.suggestion-title').contains('Nepali language').click()
        })

        it('Dynamic dropdown', ()=>{
            cy.visit('https:/.www.google.com/')
            cy.get("input[name='q']")

        })
    
    
    

})