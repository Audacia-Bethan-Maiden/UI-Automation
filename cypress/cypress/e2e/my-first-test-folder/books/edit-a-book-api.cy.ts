import ApiRoutes from '../../../../models/api-routes/api-routes';
import Env from '../../../../models/env';
import HomepageSelectors from '../../../../models/selectors/homepage-selectors';
import UpdatedpageSelectors from '../../../../models/selectors/updatepage-selectors';

let bookId = null;
describe('As a user I can edit a book', () => {
  beforeEach(() => {
    // Go to the homepage
    cy.visit(Env.HomepageUrl);
    // Add a book to be edited
    cy.addBookApi('New Test', 'Test Description', 'Test Author', 2022, '2022-09-06', true, 1).then((response) => { bookId = response; }).then(() => {
      // Go back to the homepage
      cy.visit(Env.HomepageUrl);

      // Search for the book you want to edit
      cy.searchBookByTitle('New Test');

      // Open the update page for the book you want to update
      cy.get(HomepageSelectors.openEditPage(bookId)).click();
    });
  });
  afterEach(() => {
    cy.deleteBookApi(bookId);
  });
  it('Allows a user to edit the title of a book', () => {
    // Update the title of a the book
    cy.updateADetail('New Test', 'New Test', 'title', 'New title');

    // Intecept the request
    cy.intercept(ApiRoutes.updateBookUrl).as('editBook');

    // Click the update button
    cy.get(UpdatedpageSelectors.updateBookButton).click();

    // Check that the request returns a 200 status code
    cy.wait('@editBook').then((intercept) => {
      const { statusCode } = intercept.response;
      expect(statusCode).to.equal(200);
    });

    // Check that the book has been edited
    cy.checkADetail('title', 'New title');
  });

  it('Allows a user to edit the description of a book', () => {
    // Update the description of the book
    cy.updateADetail('New Test', 'Test Description', 'description', 'New description');

    // Intercept the request
    cy.intercept(ApiRoutes.updateBookUrl).as('editBook');

    // Click the update button
    cy.get(UpdatedpageSelectors.updateBookButton).click();

    // Check that the request returns a 200 status code
    cy.wait('@editBook').then((intercept) => {
      const { statusCode } = intercept.response;
      expect(statusCode).to.equal(200);
    });

    // Check that the description has been updated
    cy.checkADetail('description', 'New description');
  });

  it('Allows the user to edit the author of a book', () => {
    // Update the author of the book
    cy.updateADetail('New Test', 'Test Author', 'author', 'New Author');

    // Intercept the API request
    cy.intercept(ApiRoutes.updateBookUrl).as('editBook');

    // Click the update book button
    cy.get(UpdatedpageSelectors.updateBookButton).click();

    // Check the API response
    cy.wait('@editBook').then((intercept) => {
      const { statusCode } = intercept.response;
      expect(statusCode).to.equal(200);
    });

    // Check that the author has been updated
    cy.checkADetail('author', 'New Author');
  });

  it('Allows the user to edit the year a book was published', () => {
    // Update the year published
    cy.updateADetail('New Test', '2022', 'published-year', '2000');

    // Intercept the request
    cy.intercept(ApiRoutes.updateBookUrl).as('editBook');

    // Click the update book button
    cy.get(UpdatedpageSelectors.updateBookButton).click();

    // Check the request
    cy.wait('@editBook').then((intercept) => {
      const { statusCode } = intercept.response;
      expect(statusCode).to.equal(200);
    });

    // Check that the year published was updated
    cy.checkADetail('published-year', '2000');
  });

  it('Allows a user to edit the date a book is available from', () => {
    // Update the date available
    cy.updateADetail('New Test', '2022-09-06', 'available-from', '2022-09-07');

    // Intercept the API request
    cy.intercept(ApiRoutes.updateBookUrl).as('editBook');

    // Click the update book button
    cy.get(UpdatedpageSelectors.updateBookButton).click();

    // Check the response is a status code 200
    cy.wait('@editBook').then((intercept) => {
      const { statusCode } = intercept.response;
      expect(statusCode).to.equal(200);
    });

    // Check the detail was updated
    cy.checkADetail('available-from', '2022-09-07');
  });

  it('Allows a user to update the eBook status of a book', () => {
    // Update the eBook status of the book
    cy.updateADetail('New Test', 'true', 'has-e-book', 'true');

    // Intercept the API request
    cy.intercept(ApiRoutes.updateBookUrl).as('editBook');

    // Click the update button
    cy.get(UpdatedpageSelectors.updateBookButton).click();

    // Check the status code is 200
    cy.wait('@editBook').then((intercept) => {
      const { statusCode } = intercept.response;
      expect(statusCode).to.equal(200);
    });

    // Check the detail
    cy.checkADetail('has-e-book', 'true');
  });

  it('Allows the user to change the category of a book', () => {
    // Update the category of the book
    cy.updateADetail('New Test', 'Fiction', 'book-category', 'Crime');

    // Intercept API request
    cy.intercept(ApiRoutes.updateBookUrl).as('editBook');

    // Click on the update button
    cy.get(UpdatedpageSelectors.updateBookButton).click();

    // Check the response of the request
    cy.wait('@editBook').then((intercept) => {
      const { statusCode } = intercept.response;
      expect(statusCode).to.equal(200);
    });

    // Check the detail was updated correctly
    cy.checkADetail('book-category', 'Crime');
  });
});
