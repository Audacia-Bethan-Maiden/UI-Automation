import Env from '../../../../models/env';
import HomepageSelectors from '../../../../models/selectors/homepage-selectors';
import UpdatedpageSelectors from '../../../../models/selectors/updatepage-selectors';

describe('As a user I can check a detail of a book', () => {
  it('Allows a user to check the title of a book', () => {
    // Go to the homepage
    cy.visit(Env.HomepageUrl);

    // Search for the book
    cy.searchBookByTitle('Charlie and the Chocolate Factory');

    // Click the open button to view the details
    cy.get(HomepageSelectors.openEditPage('322')).click();

    // Wait for the page to load
    cy.get(UpdatedpageSelectors.inputField('title'), { timeout: 2000 }).should('have.value', 'Charlie and the Chocolate Factory');

    // Check the detail
    cy.checkADetail('title', 'Charlie and the Chocolate Factory');
  });

  it('Allows a user to check the description of a book', () => {
    // Go to the homepage
    cy.visit(Env.HomepageUrl);

    // Search for the book
    cy.searchBookByTitle('Charlie and the Chocolate Factory');

    // Click the open button to view the details
    cy.get(HomepageSelectors.openEditPage('322')).click();

    // Wait for the page to load
    cy.get(UpdatedpageSelectors.inputField('title'), { timeout: 2000 }).should('have.value', 'Charlie and the Chocolate Factory');

    // Check the detail
    cy.checkADetail('description', 'The adventures of young Charlie Bucket inside the chocolate factory of eccentric chocolatier Willy Wonka.');
  });

  it('Allows a user to check if a book has an eBook available', () => {
    // Go to the homepage
    cy.visit(Env.HomepageUrl);

    // Search for the book
    cy.searchBookByTitle('Charlie and the Chocolate Factory');

    // Click the open button to view the details of the book
    cy.get(HomepageSelectors.openEditPage('322')).click();

    // Wait for the page to load
    cy.get(UpdatedpageSelectors.inputField('title'), { timeout: 2000 }).should('have.value', 'Charlie and the Chocolate Factory');

    // // Check the detail
    cy.checkADetail('has-e-book', 'y');
  });
});
