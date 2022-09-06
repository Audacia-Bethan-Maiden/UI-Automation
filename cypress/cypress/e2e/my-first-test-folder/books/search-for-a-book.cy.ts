import Env from '../../../../models/env';
import HomepageSelectors from '../../../../models/selectors/homepage-selectors';

describe('As a user I can use the search on the homepage to search for a book', () => {
  it('Allows user to search for a book', () => {
    // Go to the homepage
    cy.visit(Env.HomepageUrl);

    // Search for the book by the title
    cy.searchBookByTitle('ApiTestTitle');

    // Check the titles searched are there
    cy.get(HomepageSelectors.tableCell).should('be.visible').contains('ApiTestTitle');
  });
});
