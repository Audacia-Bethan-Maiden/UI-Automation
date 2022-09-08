import GridfoxSelectors from '../../../../../models/gridfox-models/gridfox-selectors';

describe('As a user I cannot submit a form unless I use the correct form', () => {
  it('Does not allow a user to submit a form if the name field is not filled', () => {
    // Go to the form page
    cy.visit('https://forms.gridfox.com/BihNR6ATScLA');

    // Enter the start date
    // Open the start date date picker
    cy.get(GridfoxSelectors.startDatePicker).click();

    // Choose the date
    cy.get(GridfoxSelectors.calendarCell).contains('12').click();

    // Enter the end date
    // Open the end date date picker
    cy.get(GridfoxSelectors.endDatePicker).click();

    // Choose the date
    cy.get(GridfoxSelectors.calendarCell).contains('28').click();

    // Choose the reason
    // Open the drop down list
    cy.get(GridfoxSelectors.openDropDownList).click();

    // Choose the option
    cy.get(GridfoxSelectors.listOptions).contains('Training').click();

    // Click the submit button
    cy.get(GridfoxSelectors.submitButton).click();

    // Check validation error is there
    cy.get(GridfoxSelectors.validationMessage).should('be.visible').contains(GridfoxSelectors.errorMessage('Name'));
  });

  it('Does not allow a user to submit a form if a reason is not filled', () => {
    // Go to the form page
    cy.visit('https://forms.gridfox.com/BihNR6ATScLA');

    // Input the name
    cy.get(GridfoxSelectors.nameField).type('Name');

    // Input the start date
    // Open the start date date picker
    cy.get(GridfoxSelectors.startDatePicker).click();

    // Choose the month
    cy.get(GridfoxSelectors.monthPicker).click();
    cy.get(GridfoxSelectors.chooseMonth(12)).click();

    // Choose the day
    cy.get(GridfoxSelectors.calendarCell).contains('24').click();

    // Input the end date
    // Open the end date date picker
    cy.get(GridfoxSelectors.endDatePicker).click();

    // Choose the year
    cy.get(GridfoxSelectors.yearPicker).click();
    cy.get(GridfoxSelectors.calendarYearChoose).contains('2023').click();

    // Choose the month
    cy.get(GridfoxSelectors.chooseMonth(12)).click();

    // Pick the day
    cy.get(GridfoxSelectors.calendarCell).contains('25').click();

    // Input extra notes in bold
    cy.get(GridfoxSelectors.extraNotesBold).click();
    cy.get(GridfoxSelectors.extraNotesInput).type('Extra notes.');

    // Click the submit button
    cy.get(GridfoxSelectors.submitButton).click();

    // Check validation error is visible
    cy.get(GridfoxSelectors.validationMessage).should('be.visible').contains(GridfoxSelectors.errorMessage('Reason'));
  });
});
