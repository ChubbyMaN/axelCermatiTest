/// <reference types="cypress" />

let randomText = ""
let randomNumber = ""
let testDataText = ""
let testDataNumber = ""

// For Randomized Input Data
  var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  for (var i = 0; i < 10; i++)
  randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
  testDataText = randomText

  var pattern = "1234567890"
  for (var i = 0; i < 8; i++)
  randomNumber += pattern.charAt(Math.floor(Math.random() * pattern.length));
  testDataNumber = randomNumber

describe('Fill Cermati Sign Up Form', () => {
    beforeEach(() => {
      cy.visit('https://www.cermati.com/gabung');
    });
  
    it('Inputing Data to Cermati Sign Up Form', () => {
      cy.get('#email').type(testDataText + '@cermati.com');
      cy.get('#mobilePhone').type('0878' + testDataNumber);
      cy.get('#password').type('iniPassword123');
      cy.get('#confirmPassword').type('iniPassword123');
      cy.get('#firstName').type(testDataText);
      cy.get('#lastName').type(testDataText);
      cy.get('#cityAndProvince').type('KOTA TANGERANG SELATAN');
      cy.wait(3000);
      cy.get('.btn--action_kallT').click()
    });
  });