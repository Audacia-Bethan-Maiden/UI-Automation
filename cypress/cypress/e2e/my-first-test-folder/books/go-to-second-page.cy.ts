import Env from '../../../../models/env';
import HomepageSelectors from '../../../../models/selectors/homepage-selectors';

describe('As a user I can use the paging buttons to go to the second page', () => {
  it('Allows a user to go to the second page', () => {
    // Visit the homepage of the book website
    cy.visit(Env.HomepageUrl);

    // Click on the second page button
    cy.get(HomepageSelectors.secondPageButton).click();

    // How to check if the test is correct?
  });
});
