import GridfoxSelectors from '../../../../../models/gridfox-models/gridfox-selectors';

describe('As a user I can input the start time', () => {
  it('Allows a user to pick the start time on the form by typing it', () => {
    // Go to the form page
    cy.visit('https://forms.gridfox.com/BihNR6ATScLA');

    // Type in the start date and time
    cy.get(GridfoxSelectors.startTimePicker).type('09-09-2022, 14:00');
      cy.get('body').click(0, 0);


    // Choose the end time using the buttons
    // Click into the end time field
    cy.get(GridfoxSelectors.endTimePicker).click();

    // Choose the year
    cy.get(GridfoxSelectors.yearPicker).click();
    cy.get(GridfoxSelectors.calendarYearChoose).contains('2021').click();

    // Choose the month
    cy.get(GridfoxSelectors.chooseMonth(3)).click();

    // Choose the day
    cy.get(GridfoxSelectors.calendarCell).contains('20').click();

    // Click back into the end time field
    cy.get(GridfoxSelectors.endTimePicker).click();

    // Change the time
    cy.get(':nth-child(3) > input').type('14');
    cy.get('.time-grid > :nth-child(2) > .feather').dblclick();
  });
});
