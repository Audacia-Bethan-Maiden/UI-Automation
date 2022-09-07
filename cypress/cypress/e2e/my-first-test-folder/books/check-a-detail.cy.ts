import Env from '../../../../models/env';
import HomepageSelectors from '../../../../models/selectors/homepage-selectors';
import UpdatedpageSelectors from '../../../../models/selectors/updatepage-selectors';
import CharlieAndTheChocolateFactory from '../../../../models/test-books/catcf-details';

describe('As a user I can check a detail of a book', () => {
  it('Allows a user to check the title of a book', () => {
    // Go to the homepage
    cy.visit(Env.HomepageUrl);

    // Search for the book
    cy.searchBookByTitle(CharlieAndTheChocolateFactory.bookTitle);

    // Click the open button to view the details
    cy.get(HomepageSelectors.openEditPage(CharlieAndTheChocolateFactory.bookId)).click();

    // Wait for the page to load
    cy.get(UpdatedpageSelectors.inputField('title'), { timeout: 2000 }).should('have.value', CharlieAndTheChocolateFactory.bookTitle);

    // Check the detail
    cy.checkADetail('title', CharlieAndTheChocolateFactory.bookTitle);
  });

  it('Allows a user to check the description of a book', () => {
    // Go to the homepage
    cy.visit(Env.HomepageUrl);

    // Search for the book
    cy.searchBookByTitle(CharlieAndTheChocolateFactory.bookTitle);

    // Click the open button to view the details
    cy.get(HomepageSelectors.openEditPage(CharlieAndTheChocolateFactory.bookId)).click();

    // Wait for the page to load
    cy.get(UpdatedpageSelectors.inputField('title'), { timeout: 2000 }).should('have.value', CharlieAndTheChocolateFactory.bookTitle);

    // Check the detail
    cy.checkADetail('description', CharlieAndTheChocolateFactory.bookDescription);
  });

  it('Allows a user to check if a book has an eBook available', () => {
    // Go to the homepage
    cy.visit(Env.HomepageUrl);

    // Search for the book
    cy.searchBookByTitle(CharlieAndTheChocolateFactory.bookTitle);

    // Click the open button to view the details of the book
    cy.get(HomepageSelectors.openEditPage(CharlieAndTheChocolateFactory.bookId)).click();

    // Wait for the page to load
    cy.get(UpdatedpageSelectors.inputField('title'), { timeout: 2000 }).should('have.value', CharlieAndTheChocolateFactory.bookTitle);

    // // Check the detail
    cy.checkADetail('has-e-book', CharlieAndTheChocolateFactory.hasEBook.toString());
  });
});
