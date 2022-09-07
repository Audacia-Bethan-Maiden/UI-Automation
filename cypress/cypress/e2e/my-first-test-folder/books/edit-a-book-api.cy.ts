import ApiRoutes from '../../../../models/api-routes/api-routes';
import Env from '../../../../models/env';
import HomepageSelectors from '../../../../models/selectors/homepage-selectors';
import UpdatedpageSelectors from '../../../../models/selectors/updatepage-selectors';
import TestBooks from '../../../../models/test-books/test-book-details';

let bookId = null;
describe('As a user I can edit a book', () => {
  beforeEach(() => {
    // Go to the homepage
    cy.visit(Env.HomepageUrl);
    // Add a book to be edited
    cy.addBookApi(
      TestBooks.bookTitle,
      TestBooks.bookDescription,
      TestBooks.bookAuthor,
      TestBooks.publishedYear,
      TestBooks.availableFrom,
      TestBooks.hasEBook,
      1,
    ).then((response) => { bookId = response; }).then(() => {
      // Go back to the homepage
      cy.visit(Env.HomepageUrl);

      // Search for the book you want to edit
      cy.searchBookByTitle(TestBooks.bookTitle);

      // Open the update page for the book you want to update
      cy.get(HomepageSelectors.openEditPage(bookId)).click();
    });
  });
  afterEach(() => {
    cy.deleteBookApi(bookId);
  });
  it('Allows a user to edit the title of a book', () => {
    // Update the title of a the book
    cy.updateADetail(TestBooks.bookTitle, TestBooks.bookTitle, 'title', TestBooks.editedTitle);

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
    cy.checkADetail('title', TestBooks.editedTitle);
  });

  it('Allows a user to edit the description of a book', () => {
    // Update the description of the book
    cy.updateADetail(TestBooks.bookTitle, TestBooks.bookDescription, 'description', TestBooks.editedDescription);

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
    cy.checkADetail('description', TestBooks.editedDescription);
  });

  it('Allows the user to edit the author of a book', () => {
    // Update the author of the book
    cy.updateADetail(TestBooks.bookTitle, TestBooks.bookAuthor, 'author', TestBooks.editedAuthor);

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
    cy.checkADetail('author', TestBooks.editedAuthor);
  });

  it('Allows the user to edit the year a book was published', () => {
    // Update the year published
    cy.updateADetail(TestBooks.bookTitle, TestBooks.publishedYear.toString(), 'published-year', TestBooks.editedPublishedYear.toString());

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
    cy.checkADetail('published-year', TestBooks.editedPublishedYear.toString());
  });

  it('Allows a user to edit the date a book is available from', () => {
    // Update the date available
    cy.updateADetail(TestBooks.bookTitle, TestBooks.availableFrom, 'available-from', TestBooks.editedAvailableFrom);

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
    cy.checkADetail('available-from', TestBooks.editedAvailableFrom);
  });

  it('Allows a user to update the eBook status of a book', () => {
    // Update the eBook status of the book
    cy.updateADetail(TestBooks.bookTitle, TestBooks.hasEBook.toString(), 'has-e-book', TestBooks.editedHasEBook.toString());

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
    cy.checkADetail('has-e-book', TestBooks.editedHasEBook.toString());
  });

  it('Allows the user to change the category of a book', () => {
    // Update the category of the book
    cy.updateADetail(TestBooks.bookTitle, TestBooks.bookCategory, 'book-category', TestBooks.editedBookCategory);

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
    cy.checkADetail('book-category', TestBooks.editedBookCategory);
  });
});
