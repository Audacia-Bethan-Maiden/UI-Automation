import Env from '../../../../models/env';
// import HomepageSelectors from '../../../../models/selectors/homepage-selectors';

describe('As a user I can add the details of a book as long as I use the form correctly', () => {
  it('Allows a user to add a new book', () => {
    // Visit the homepage of the book website
    cy.visit(Env.HomepageUrl);

    // Update book
    cy.updateADetail('71', 'book-category', 'Crime');

    // Go back to the search book page
    cy.visit(Env.HomepageUrl);

    // Check that the new book is there
    // cy.get(HomepageSelectors.tableCell).should('be.visible').contains('New author');

    // Change title back to ApiTestTitle
    cy.updateADetail('71', 'book-category', 'Non-Fiction');

    // Go back to the search book page
    cy.visit(Env.HomepageUrl);

    // Check that the new book is there
    // cy.get(HomepageSelectors.tableCell).should('be.visible').contains('ApiTestAuthor');
  });
});
