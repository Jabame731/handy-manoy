describe('visit register page of handy manoy', () => {
  it('this test should visit register page successfully', () => {
    cy.visit('http://localhost:3000/register');
  });

  it('this test should fill out forms and when it clicks submit redirects to login', () => {
    cy.visit('http://localhost:3000/register');
    cy.get('[data-cy="input-username"]').type('nekki77');
    cy.get('[data-cy="input-email"]').type('nekki442@gmail.com');
    cy.get('[data-cy="input-password"]').type('12345');
    cy.get('[data-cy="input-confirm_password"]').type('12345');
    cy.get('[data-cy="input-first_name"]').type('nekki');
    cy.get('[data-cy="input-middle_name"]').type('jane');
    cy.get('[data-cy="input-last_name"]').type('doe');
    cy.get('[data-cy="input-address"]').type('basak mandaue city');
    cy.get('[data-cy="input-phone_number"]').type('123456');
    cy.get('[data-cy="input-telephone_number"]').type('09123456789');
    cy.get('[data-cy="submit"]').click();
  });
});
