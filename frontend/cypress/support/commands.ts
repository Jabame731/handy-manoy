/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

// declare namespace Cypress {
//   interface Chainable {
//     loginAndSetToken(): void;
//   }
// }

// Cypress.Commands.add('loginAndSetToken', () => {
//   cy.request('POST', 'http://localhost:8800/api/login', {
//     email: 'hehehe@gmail.com',
//     password: '12345',
//   }).then((response) => {
//     const userId = response.body;
//     const { token } = userId;

//     Cypress.env('token', token); // Store the token in Cypress environment

//     cy.log('Token:', token); // Log the token (optional)
//   });
// });
