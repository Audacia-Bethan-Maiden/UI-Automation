import Env from '../../../../models/env';

describe('As a user I can view a books details', () => {
  it('Allows a user to view the details of a book', () => {
    // Go to the homepage
    cy.visit(Env.HomepageUrl);

    // Check a book's details
    cy.checkDetails('88', 'ApiTestPost', 'ApiTestDescriptionEdited', 'ApiTestAuthorEdited', '2022', '2022-10-18', false, 'Graphic Novel');
  });
});
