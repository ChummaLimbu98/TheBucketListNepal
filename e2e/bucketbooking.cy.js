///<referencdes types="cypres/>

describe('Booking on The Bucket List Nepal website', () => {
    it('Should successfully book for tour', () => {
      cy.visit('https://www.test.thebucketlistnepal.com/booking')

      cy.get('.book-btn > .v-btn__content').click()

    function generateRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Enter the date and number of traveller:
    cy.get('form > :nth-child(1) > .container > .row').click()
    cy.get(':nth-child(1) > .container > .row > :nth-child(1) > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot').click()
    cy.get('input[name="date"]').invoke('removeAttr', 'readonly').type('2023-06-30');

    cy.get('input[name="no_of_travellers"]').type('6');

    
    // Leader detail name section
    cy.get('input[name="fname"]').type('John') // Replace 'name' with the actual name attribute value
    cy.get('input[id="input-62"]')
    cy.get('input[type="text"]')

    cy.get('input[name="lname"]').type('Doe') // Replace 'name' with the actual lname attribute value
    cy.get('input[id="input-62"]')
    cy.get('input[type="text"]')

    //Email
    cy.get('input[name="email"]').type('johndoe101@gmail.com') 
    cy.get('input[id="input-66"]') 
    cy.get('input[type="text"]')

    cy.get('input[name="email"]').should('have.value', '')

    //Budget
    cy.get('input[name="budget"]').type('10000') 
    cy.get('input[id="input-68"]') 
    cy.get('input[type="text"]')

    // Country
    cy.get('input[name="country"]').type('Nepal') 
    cy.get('input[id="input-70"]') 
    cy.get('input[type="text"]')

    // Phone number:
    cy.get('input[name="phone"]').type('9862658297') 
    cy.get('input[type="text"]')

  
    // //Requirements:
    cy.get('.col-md-12 > .v-input > .v-input__control > .v-input__slot').type('You need to bring your identity card.   ')
    cy.get('.v-input--selection-controls__ripple').click()
  
    //For form Submission 
    cy.get('.btn > .v-btn__content').click()
    //cy.contains('Booking confirmed').should('be.visible')

    })
  })
  
  
  