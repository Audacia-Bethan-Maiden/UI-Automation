import ApiRoutes from '../../../../models/api-routes/api-routes';
import Env from '../../../../models/env';
import InputErrors from '../../../../models/error-messages/input-errors';
import HomepageSelectors from '../../../../models/selectors/homepage-selectors';
import UpdatedpageSelectors from '../../../../models/selectors/updatepage-selectors';

const bookTitle = 'Book A';
const bookId = '248';

describe('As a user I cannot edit a book if I do not use the correct form', () => {
  it('Does not allow a user to edit the title of a book unless the correct form is used', () => {
    // Go to the homepage
    cy.visit(Env.HomepageUrl);

    // Search for the book you would like to edit
    cy.searchBookByTitle(bookTitle);

    // Open the update page for the book
    cy.get(HomepageSelectors.openEditPage(bookId)).click();

    // Wait for the page to load
    cy.get(UpdatedpageSelectors.inputField('title'), { timeout: 2000 }).should('have.value', bookTitle);

    // Clear the title field
    cy.get(UpdatedpageSelectors.inputField('title')).clear();

    // Intercept the API request
    cy.intercept(ApiRoutes.updateBookUrl).as('editBook');

    // Click the update button
    cy.get(UpdatedpageSelectors.updateBookButton).click();

    // Checkt the request failed
    cy.wait('@editBook').then((intercept) => {
      const { statusCode } = intercept.response;
      expect(statusCode).to.equal(400);
    });

    // Check there is an error message
    cy.get(UpdatedpageSelectors.validationError).should('be.visible').contains(InputErrors.inputError('Title'));
  });

  it('Does not allow a user to edit the description of a book unless the correct form is used', () => {
    // Go to the homepage
    cy.visit(Env.HomepageUrl);

    // Search for the book you would like to edit
    cy.searchBookByTitle(bookTitle);

    // Open the update page for the book you want to edit
    cy.get(HomepageSelectors.openEditPage(bookId)).click();

    // Wait for the page to load
    cy.get(UpdatedpageSelectors.inputField('title'), { timeout: 2000 }).should('have.value', bookTitle);

    // Clear the description field
    cy.get(UpdatedpageSelectors.inputField('description')).clear();

    // Intercept the API request
    cy.intercept(ApiRoutes.updateBookUrl).as('editBook');

    // Click the update button
    cy.get(UpdatedpageSelectors.updateBookButton).click();

    // Check that the request failed
    cy.wait('@editBook').then((intercept) => {
      const { statusCode } = intercept.response;
      expect(statusCode).to.equal(400);
    });

    // Check the error is there
    cy.get(UpdatedpageSelectors.validationError).should('be.visible').contains(InputErrors.inputError('Description'));
  });

  it('Does not allow a user to edit the author of a book unless the correct form is used', () => {
    // Go to the homepage
    cy.visit(Env.HomepageUrl);

    // Search for the book you want to edit
    cy.searchBookByTitle(bookTitle);

    // Open the edit page for the book
    cy.get(HomepageSelectors.openEditPage(bookId)).click();

    // Wait for the page to load
    cy.get(UpdatedpageSelectors.inputField('title'), { timeout: 2000 }).should('be.visible').should('have.value', bookTitle);

    // Clear the author field
    cy.get(UpdatedpageSelectors.inputField('author')).clear();

    // Intercept the API request
    cy.intercept(ApiRoutes.updateBookUrl).as('editBook');

    // Click the update button
    cy.get(UpdatedpageSelectors.updateBookButton).click();

    // Check the status code is 400
    cy.wait('@editBook').then((intercept) => {
      const { statusCode } = intercept.response;
      expect(statusCode).to.equal(400);
    });

    // Check that the error is there
    cy.get(UpdatedpageSelectors.validationError).should('be.visible').contains(InputErrors.inputError('Author'));
  });

  it('Does not allow a user to edit the year a book was published if the incorerrect form is used', () => {
    // Go to the homepage
    cy.visit(Env.HomepageUrl);

    // Search for the book you want to edit
    cy.searchBookByTitle(bookTitle);

    // Open the edit page for the book
    cy.get(HomepageSelectors.openEditPage(bookId)).click();

    // Wait for the page to open
    cy.get(UpdatedpageSelectors.inputField('title'), { timeout: 2000 }).should('be.visible').should('have.value', bookTitle);

    // Clear the published year field
    cy.get(UpdatedpageSelectors.inputField('published-year')).clear();

    // Intercept the API request
    cy.intercept(ApiRoutes.updateBookUrl).as('editBook');

    // Click the update book button
    cy.get(UpdatedpageSelectors.updateBookButton).click();

    // Check the response
    cy.wait('@editBook').then((intercept) => {
      const { statusCode } = intercept.response;
      expect(statusCode).to.equal(400);
    });

    // Check that the error message is there
    cy.get(UpdatedpageSelectors.validationError).should('be.visible').contains(InputErrors.inputError('Published Year'));
  });

  it('Does not allow a user to edit the date a book is available from if the correct form is not used', () => {
    // Go to the homepage
    cy.visit(Env.HomepageUrl);

    // Search for the book you want to edit
    cy.searchBookByTitle(bookTitle);

    // Open the edit page for the book
    cy.get(HomepageSelectors.openEditPage(bookId)).click();

    // Wait for the page to load
    cy.get(UpdatedpageSelectors.inputField('title')).should('be.visible').should('have.value', bookTitle);

    // Clear the date field for date available from
    cy.get(UpdatedpageSelectors.inputField('available-from')).clear();

    // Intercept the API request
    cy.intercept(ApiRoutes.updateBookUrl).as('editBook');

    // Click the update book button
    cy.get(UpdatedpageSelectors.updateBookButton).click();

    // Check the status code is 400
    cy.wait('@editBook').then((intercept) => {
      const { statusCode } = intercept.response;
      expect(statusCode).to.equal(400);
    });

    // Check the error message
    cy.get(UpdatedpageSelectors.validationError).should('be.visible').contains(InputErrors.inputError('Available From'));
  });

  it('Does not allow a user to change the book category unless the right form is used', () => {
    // Go to the homepage
    cy.visit(Env.HomepageUrl);

    // Click the update button for the book
    cy.get(HomepageSelectors.openEditPage(bookId)).click();

    // Wait for the page to load
    cy.get(UpdatedpageSelectors.inputField('title')).should('be.visible').should('have.value', bookTitle);

    // Clear the category field
    cy.get(UpdatedpageSelectors.clearBookCategory).click();

    // Intercept the API request
    cy.intercept(ApiRoutes.updateBookUrl).as('editBook');

    // Click the update button
    cy.get(UpdatedpageSelectors.updateBookButton).click();

    // Check the API response
    cy.wait('@editBook').then((intercept) => {
      const { statusCode } = intercept.response;
      expect(statusCode).to.equal(400);
    });

    // Check the error message
    cy.get(UpdatedpageSelectors.validationError).should('be.visible').contains(InputErrors.inputError('Book Category'));
  });
});
