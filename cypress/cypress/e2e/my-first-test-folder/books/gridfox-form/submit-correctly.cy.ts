import GridfoxSelectors from '../../../../../models/gridfox-models/gridfox-selectors';

describe('As a user I can submit a holiday request form if the correct form is used', () => {
  it('Allows a user to submit a holiday request form if the correct form is used', () => {
    // Go to the form page
    cy.visit('https://forms.gridfox.com/BihNR6ATScLA');

    // Type in the name
    cy.get(GridfoxSelectors.nameField).type('Name');

    // Open the start date date picker
    cy.get(GridfoxSelectors.startDatePicker).click();

    // Pick todays date
    cy.get(GridfoxSelectors.todaysDate).click();

    // Open the end date date picker
    cy.get(GridfoxSelectors.endDatePicker).click();

    // Pick the date
    cy.get(GridfoxSelectors.calendarCell).contains('15').click();

    // Pick the start time and end time
    // Start time
    // Open the start time picker
    cy.get(GridfoxSelectors.startTimePicker).click();

    // Pick the date
    cy.get(GridfoxSelectors.calendarCell).contains('13').click();

    // End time
    // Open the end time picker
    cy.get(GridfoxSelectors.endTimePicker).click();

    // Pick the date
    cy.get(GridfoxSelectors.calendarCell).contains('11').click();

    // Drop down reason list
    // Open list
    cy.get(GridfoxSelectors.openDropDownList).click();

    // Choose an option
    cy.get(GridfoxSelectors.listOptions).contains('Training').click();

    // Add some extra notes

    // Tick Approved button
    cy.get(GridfoxSelectors.approvedButton).click();

    // Intercept API request

    // Click submit form button
    cy.get(GridfoxSelectors.submitButton).click();

    // Check the response
  });
});
