describe('logged in a mock user to get its user-id and visit the edit page of the user in handy manoy', () => {
  it('this test should visit edit page successfully', () => {
    cy.request('POST', 'http://localhost:8800/api/login', {
      email: 'hehehe@gmail.com',
      password: '12345',
    }).then((response) => {
      const userId = response.body;
      const { id } = userId;

      //   cy.get('[data-cy="edit-username"]').type(username);
      //   cy.get('[data-cy="edit-first_name"]').type(first_name);
      //   cy.get('[data-cy="edit-middle_name"]').type(middle_name);
      //   cy.get('[data-cy="edit-last_name"]').type(last_name);
      //   cy.get('[data-cy="edit-address"]').type(address);
      //   cy.get('[data-cy="edit-phone_number"]').type(phone_number);
      //   cy.get('[data-cy="edit-telephone_number"]').type(telephone_number);

      cy.visit(`http://localhost:3000/profile/edit-profile/?userId=${id}`);
      cy.get('[data-cy="edit-username"]').type('Jabzz831');
      cy.get('[data-cy="edit-first_name"]').type('Jane');
      cy.get('[data-cy="edit-middle_name"]').type('Marie');
      cy.get('[data-cy="edit-last_name"]').type('Ceyes');
      cy.get('[data-cy="edit-address"]').type('Cebu City, Lilo-an');
      cy.get('[data-cy="edit-phone_number"]').type('123456');
      cy.get('[data-cy="edit-telephone_number"]').type('09123456789');
      cy.get('[data-cy="submit"]').click();
    });
  });
});
