import Env from '../../../../models/env';
import HomepageSelectors from '../../../../models/selectors/homepage-selectors';

describe('As a user I can update the title of a book', () => {
  it('Allows a user to update the title of a book', () => {
    // Visit the homepage of the book website
    cy.visit(Env.HomepageUrl);

    // Update title of a book
    cy.updateADetail('71', 'title', 'New title');

    // Return to the search page and check the details of the book have changed and are correct
    // Go back to the search book page
    cy.visit(Env.HomepageUrl);

    // Check that the new book is there
    cy.get(HomepageSelectors.tableCell).should('be.visible').contains('New title');

    // Change title back to ApiTestTitle
    cy.updateADetail('71', 'title', 'ApiTestTitle');

    // // Go back to the homepage to check the details have been changed back
    // cy.visit(Env.HomepageUrl);

    // // Check that the new book is there
    // cy.get(HomepageSelectors.tableCell).should('be.visible').contains('ApiTestTitle');
  });
});
