/// <reference types="cypress" />

describe('Go to Cermati.com Signup Form', () => {

    it('Go to https://www.cermati.com/gabung', () => {
        cy.visit('https://www.cermati.com/gabung');
        cy.url().should('include', 'https://www.cermati.com/app/gabung');
    });

  });