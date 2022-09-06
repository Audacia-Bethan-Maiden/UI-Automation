import Env from '../../../../models/env';
import HomepageSelectors from '../../../../models/selectors/homepage-selectors';

let bookId = null;

describe('As a user I can delete a book', () => {
  beforeEach(() => {
    // Go to the homepage
    cy.visit(Env.HomepageUrl);
    // Add a book to be edited
    cy.addBookApi('Another Test', 'Test Description', 'Test Author', 2022, '2022-09-06', true, 1).then((response) => { bookId = response; });
  });
  it('Allows a user to delete a book', () => {
    // Go to the homepage
    cy.visit(Env.HomepageUrl);

    // Delete a book
    cy.deleteBook('Another Test', bookId);

    // Search for the book
    cy.searchBookByTitle('Another Test');

    // Check it has been deleted
    cy.get(HomepageSelectors.tableCell).should('not.exist');
  });
});
