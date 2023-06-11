describe('visit login page of handy manoy', () => {
  it('this test should visit login page successfully', () => {
    cy.visit('http://localhost:3000/login');
  });

  it('this test should fill out forms and when it clicks submit redirects to login', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('[data-cy="email"]').type('nekki44@gmail.com');
    cy.get('[data-cy="password"]').type('12345');
    cy.get('[data-cy="submit"]').click();
  });
});
