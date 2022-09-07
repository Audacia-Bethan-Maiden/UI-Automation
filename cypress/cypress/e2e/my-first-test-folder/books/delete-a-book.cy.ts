import Env from '../../../../models/env';
import HomepageSelectors from '../../../../models/selectors/homepage-selectors';
import TestBooks from '../../../../models/test-books/test-book-details';

let bookId = null;

describe('As a user I can delete a book', () => {
  beforeEach(() => {
    // Go to the homepage
    cy.visit(Env.HomepageUrl);
    // Add a book to be edited
    cy.addBookApi(TestBooks.bookTitle,
      TestBooks.bookDescription,
      TestBooks.bookAuthor,
      TestBooks.publishedYear,
      TestBooks.availableFrom,
      TestBooks.hasEBook,
      1).then((response) => { bookId = response; });
  });
  it('Allows a user to delete a book', () => {
    // Go to the homepage
    cy.visit(Env.HomepageUrl);

    // Delete a book
    cy.deleteBook(TestBooks.bookTitle, bookId);

    // Search for the book
    cy.searchBookByTitle(TestBooks.bookTitle);

    // Check it has been deleted
    cy.get(HomepageSelectors.tableCell).should('not.exist');
  });
});
