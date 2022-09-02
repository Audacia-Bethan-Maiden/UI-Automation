import Env from '../../../../models/env';

describe('As a user I can use the search on the homepage to search for a book', () => {
  it('Allows user to search for a book', () => {
    // Go to the homepage
    cy.get(Env.HomepageUrl);

    // Search for the book by the title
    cy.searchBookByTitle('ApiTestPost');
  });
});
