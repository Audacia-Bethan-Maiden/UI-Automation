// import { v4 as uuidv4 } from 'uuid';

import Env from '../../../../models/env';

describe('As a user I can add the details of a book as long as I use the form correctly', () => {
  it('Allows a user to add a new book', () => {
    // Visit the homepage of the book website
    cy.visit(Env.HomepageUrl);

    // Generate a GUID
    // const bookName = uuidv4();

    // Add a new book
    cy.addBook('Test book title', 'Test book description', 'Test Author', '2022', '2022-08-31', true, 'Fiction');

    // Add in a wait time
    // cy.wait(2000);
    // Have visit homepage at the top of search for a book

    // Go back to the homepage
    cy.visit(Env.HomepageUrl);

    // Search for the added book and delete the new book
    cy.deleteBook('Test book title', '368');
  });
});
