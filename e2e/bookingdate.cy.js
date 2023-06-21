/// <reference  types="cypress" />


// describe('Booking page',()=>{
//     it('should select a date',()=>{
//         cy.visit('https://www.test.thebucketlistnepal.com/booking')
//         cy.get('form > :nth-child(1) > .container > .row').click()
//         cy.get('.booking-bottom-row > :nth-child(1)').click()

//         //const desiredDate = '2023-06-20'; // Replace with the desired date in 'YYYY-MM-DD' format

//         // Wait for the input field to be visible and interactable
//         cy.get('#input-54', { timeout: 10000 }).should('be.visible')

//         // Find the input field by its ID and set its value
//         cy.get('input[name="date"]').click() 
//         cy.get('#input-54').click()
//         // Optional: Assert that the entered date is correct
//         cy.get('#input-54').click().should('have.col-md-6','20233-06-20')

//   });
// });
function generateRandomString(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

describe('Example Test', () => {
  it('should test JSON data', () => {
    cy.visit('https://thebucketlistnepal.com/booking'); // Replace '/your-page' with the actual page URL you want to visit


    cy.get('input[name="date"]').invoke('removeAttr', 'readonly').type('2023-06-13');

    cy.get('input[name="no_of_travellers"]').type('1');
    cy.get('input[name="fname"]').type(generateRandomString(8));
    cy.get('input[name="lname"]').type(generateRandomString(8));
    cy.get('input[name="email"]').type(generateRandomString(8) + '@example.com');
    cy.get('input[name="country"]').type(generateRandomString(8));
    cy.get('input[name="phone"]').type(generateRandomNumber(100000000, 999999999));
    cy.get('input[name="budget"]').type(generateRandomNumber(100, 1000));
    cy.get('textarea[name="extraRequirements"]').type(generateRandomString(20));

  });
});
