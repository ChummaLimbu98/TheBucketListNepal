/// <reference  types="cypress" />

    it('should enter any particular date',()=>{
        cy.visit('https://www.test.thebucketlistnepal.com/booking')
        cy.get('form > :nth-child(1) > .container > .row').click()
        cy.get('.booking-bottom-row > :nth-child(1)').click()
        
         // Find the date element using its unique identifiers (e.g., id, class, etc.)
        cy.get('#datePickerId').then(($dateElement) => {
        // Generate a random date within the desired range
        const minDate = new Date(); // Use your desired minimum date
        const maxDate = new Date(); // Use your desired maximum date
  
        const randomDate = new Date(
          minDate.getTime() + Math.random() * (maxDate.getTime() - minDate.getTime())
        );
  
        // Format the random date as per the date element's requirements (e.g., YYYY-MM-DD)
        const formattedDate = `${randomDate.getFullYear()}-${(randomDate.getMonth() + 1)
          .toString()
          .padStart(2, '0')}-${randomDate.getDate().toString().padStart(2, '0')}`;
  
        // Set the value of the date element to the random date
        cy.wrap($dateElement).clear().type(formattedDate);
  
        // Add any additional steps or assertions as needed
      });
    });
