import Env from '../../../../models/env';
import HomepageSelectors from '../../../../models/selectors/homepage-selectors';

describe('As a user I can use the paging buttons to go to the last page', () => {
  it('Allows the user to go to the last page of the book list', () => {
    // Go to the homepage
    cy.visit(Env.HomepageUrl);

    // Click the last page button
    cy.get(HomepageSelectors.lastPageButton).click();

    // How to check if it works?
  });
});
