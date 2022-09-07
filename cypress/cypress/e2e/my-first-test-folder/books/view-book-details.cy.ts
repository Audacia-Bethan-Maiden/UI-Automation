import Env from '../../../../models/env';
import HomepageSelectors from '../../../../models/selectors/homepage-selectors';
import CharlieAndTheChocolateFactory from '../../../../models/test-books/catcf-details';

describe('As a user I can view all of a books details', () => {
  it('Allows a user to view all the details of a book', () => {
    // Go to the homepage
    cy.visit(Env.HomepageUrl);

    // Search for the book you want to check the details of
    cy.searchBookByTitle(CharlieAndTheChocolateFactory.bookTitle);

    // Click the open button to view the details
    cy.get(HomepageSelectors.openEditPage(CharlieAndTheChocolateFactory.bookId)).click();

    // Check a book's details
    cy.checkDetails(
      CharlieAndTheChocolateFactory.bookId,
      CharlieAndTheChocolateFactory.bookTitle,
      CharlieAndTheChocolateFactory.bookDescription,
      CharlieAndTheChocolateFactory.bookAuthor,
      CharlieAndTheChocolateFactory.publishedYear,
      CharlieAndTheChocolateFactory.availableFrom,
      CharlieAndTheChocolateFactory.hasEBook,
      CharlieAndTheChocolateFactory.bookCategory,
    );
  });
});
