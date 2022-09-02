// import Env from '../../../../models/env';

describe('As a user I can delete a book', () => {
  it('Allows a user to delete a book', () => {
    // Delete a book
    cy.deleteBook('Test book title', '320');

    // Add another book back?
    // Click the add book button
    cy.addBook('Test book title', 'Test book description', 'Test Author', '2022', '2022-08-31', true, 'Fiction');

    // Do I need to check that the book has been added again correctly?

    // Search for the book to check it's there
    cy.searchBookByTitle('Test book title');
  });
});
