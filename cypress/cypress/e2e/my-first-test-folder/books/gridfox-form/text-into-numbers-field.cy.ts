import GridfoxSelectors from '../../../../../models/gridfox-models/gridfox-selectors';

describe('As a user I cannot input text into a numbers field', () => {
  it('Does not allow a user to input text into a number field', () => {
    // Go to the form page
    cy.visit('https://forms.gridfox.com/BihNR6ATScLA');

    // Type in the number of days taken holiday field
    cy.get(GridfoxSelectors.numberOfDays).type('g2g3f');

    // Check that only the numbers were inputted
    cy.get(GridfoxSelectors.numberOfDays).should('have.value', '23');
  });
});
