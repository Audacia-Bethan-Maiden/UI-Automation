describe('As a user I can submit a holiday request form if the correct form is used', () => {
  it('Allows a user to submit a holiday request form if the correct form is used', () => {
    // Go to the form page
    cy.visit('https://forms.gridfox.com/BihNR6ATScLA');

    // Type in the name
    cy.get('.font-sans').type('Name');

    // Open the start date date picker
    cy.get(':nth-child(3) > .mt-2 > .g-form-field > .datepicker > input').click();

    // Pick todays date
    cy.get('.datepicker-dropdown__button').click();

    // Open the end date date picker
    cy.get(':nth-child(4) > .mt-2 > .g-form-field > .datepicker > input').click();

    // Pick the date
    cy.get('.cell--active-month').contains('15').click();

    // Pick the start time and end time

    // Drop down reason list
    // Open list
    cy.get('.icon').click();

    // Choose an option
    cy.get('.options-list').contains('Training').click();

    // Add some extra notes

    // Tick Approved button
    cy.get('.text-white > .feather').click();

    // Intercept API request

    // Click submit form button
    cy.get('.px-6').click();

    // Check the response
  });
});
