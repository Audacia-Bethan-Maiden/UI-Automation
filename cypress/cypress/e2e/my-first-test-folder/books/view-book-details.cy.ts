import Env from '../../../../models/env';
import HomepageSelectors from '../../../../models/selectors/homepage-selectors';

describe('As a user I can view all of a books details', () => {
  it('Allows a user to view all the details of a book', () => {
    // Go to the homepage
    cy.visit(Env.HomepageUrl);

    // Search for the book you want to check the details of
    cy.searchBookByTitle('Charlie and the Chocolate Factory');

    // Click the open button to view the details
    cy.get(HomepageSelectors.openEditPage('322')).click();

    // Check a book's details
    cy.checkDetails('322', 'Charlie and the Chocolate Factory', 'The adventures of young Charlie Bucket inside the chocolate factory of eccentric chocolatier Willy Wonka.', 'Roald Dahl', '1964', '1964-11-23', true, 'Fiction');
  });
});
