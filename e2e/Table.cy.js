/// <reference types="Cypress" />

describe('Handle Tables',(()=>{
    beforeEach('Login',()=>{
        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')
        cy.get("button[type='submit']").click()
        cy.get('.btn-close').click()
        //Customers->Customers

        cy.get('#menu-customer>a').click() //Customers main menu
        cy.get('#menu-customer>ul>li:first-child').click() // Customers sub/clild item

    })

    it.skip('Check no. of rows and Columns',()=>{
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length','10') //For rows
        cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('have.length','7') //for column

    })

    it.skip('Check cell data from specific row and column',()=>{
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr:nth-child(3)')
        .contains('gorankreziccc90@gmail.com')
    })

    it.skip('Read all the rows and columns data in the first page',()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
        .each(($row, index, $rows)=>{

            cy.wrap($row).within(()=>{

                cy.get("td").each(($col, index,$cols)=>{

                    cy.log($col.text())

                })
            })
        })

    })

    it.only('Pagination',()=>{
        //Find total number of pages
        let totalpages
        cy.get(".col-sm-6 text-end").then((e)=>{
            let mytext=e.text() //Showing 1 to 10 of 5581(559 pages )
           totalpages= mytext.substring( mytext.indexOf("(")+1, mytext.indexOf("pages")-1 )
            cy.log("Total number of pages in a table=======>"+totalpages)

        })

        
    })
}))