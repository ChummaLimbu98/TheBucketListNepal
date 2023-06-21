describe('classlocator',() => {
    it("CLAssLocator",() =>{
    cy.visit("http://www.automationpractice.pl/index.php?")
    cy.get("#search_query_top").type("T-Shirts") // using id #
    cy.get("[name='submit_search']").click() // using attribute
    cy.get(".lighter").contains("T-Shirts") //assortion

    //cy.get(".search_query").type("T-Shirts") // using class

    //cy.get("[name='search_query']").type("T-Shirts") // using attribute name

    cy.get(".search_query[name='search_query']").type("T-Shirts") //combination of class and attribute
    cy.get("input.search_query[name='search_query']").type("T-Shirts")//combination of tag,class and attribute tag may optional

    



    })
})