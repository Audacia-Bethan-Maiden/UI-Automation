import ApiRoutes from '../../../../models/api-routes/api-routes';
import Env from '../../../../models/env';
import InputErrors from '../../../../models/error-messages/input-errors';
import AddpageSelectors from '../../../../models/selectors/addpage-selectors';
import HomepageSelectors from '../../../../models/selectors/homepage-selectors';

describe('As a user I cannot add a book if I use the wrong form', () => {
  beforeEach(() => {
    // Go to the home page
    cy.visit(Env.HomepageUrl);

    // Click the add book button
    cy.get(HomepageSelectors.addBookButton).click();
  });

  it('Does not allow a user to add a book if they do not specify a book title', () => {
    // Input the book description
    cy.get(AddpageSelectors.inputField('description')).type('bookDescription');

    // Input the author
    cy.get(AddpageSelectors.inputField('author')).type('bookAuthor');

    // Input the year published
    cy.get(AddpageSelectors.inputField('published-year')).type('2000');

    // Input the date available from
    cy.get(AddpageSelectors.inputField('available-from')).type('2022-08-30');

    // Click has an eBook
    cy.get(AddpageSelectors.inputField('has-e-book')).click();

    // Open book category dropdown list
    cy.get(AddpageSelectors.openDropdownCategoryList).click();

    // Pick the book category
    cy.get(AddpageSelectors.bookCategoryOptionSelect).contains('Crime').should('be.visible').click();

    // Intercetp the API request
    cy.intercept(ApiRoutes.addBookUrl).as('addBook');

    // Click add book button
    cy.get(AddpageSelectors.addBookButton).click();

    // Check the response is a code 400
    cy.wait('@addBook').then((intercept) => {
      const { statusCode } = intercept.response;
      expect(statusCode).to.equal(400);
    });

    // Check that the error message is there
    cy.get(AddpageSelectors.validationError).should('be.visible').contains(InputErrors.inputError('Title'));
  });

  it('Does not allow a user to add a book if they do not specify a book description', () => {
    // Input the book title
    cy.get(AddpageSelectors.inputField('title')).type('bookTitle');

    // Input the author
    cy.get(AddpageSelectors.inputField('author')).type('bookAuthor');

    // Input the year published
    cy.get(AddpageSelectors.inputField('published-year')).type('2000');

    // Input the date available from
    cy.get(AddpageSelectors.inputField('available-from')).type('2022-08-30');

    // Click has an eBook
    cy.get(AddpageSelectors.inputField('has-e-book')).click();

    // Open book category dropdown list
    cy.get(AddpageSelectors.openDropdownCategoryList).click();

    // Pick the book category
    cy.get(AddpageSelectors.bookCategoryOptionSelect).contains('Crime').should('be.visible').click();

    // Intercetp the API request
    cy.intercept(ApiRoutes.addBookUrl).as('addBook');

    // Click add book button
    cy.get(AddpageSelectors.addBookButton).click();

    // Check the response is a code 400
    cy.wait('@addBook').then((intercept) => {
      const { statusCode } = intercept.response;
      expect(statusCode).to.equal(400);
    });

    // Check that the error message is there
    cy.get(AddpageSelectors.validationError).should('be.visible').contains(InputErrors.inputError('Description'));
  });

  it('Does not allow a user to add a book if they do not specify an author', () => {
    // Input the title
    cy.get(AddpageSelectors.inputField('title')).type('bookTitle');

    // Input the book description
    cy.get(AddpageSelectors.inputField('description')).type('bookDescription');

    // Input the year published
    cy.get(AddpageSelectors.inputField('published-year')).type('2000');

    // Input the date available from
    cy.get(AddpageSelectors.inputField('available-from')).type('2022-08-30');

    // Click has an eBook
    cy.get(AddpageSelectors.inputField('has-e-book')).click();

    // Open book category dropdown list
    cy.get(AddpageSelectors.openDropdownCategoryList).click();

    // Pick the book category
    cy.get(AddpageSelectors.bookCategoryOptionSelect).contains('Crime').should('be.visible').click();

    // Intercetp the API request
    cy.intercept(ApiRoutes.addBookUrl).as('addBook');

    // Click add book button
    cy.get(AddpageSelectors.addBookButton).click();

    // Check the response is a code 400
    cy.wait('@addBook').then((intercept) => {
      const { statusCode } = intercept.response;
      expect(statusCode).to.equal(400);
    });

    // Check that the error message is there
    cy.get(AddpageSelectors.validationError).should('be.visible').contains(InputErrors.inputError('Author'));
  });

  it('Does not allow a user to add a book if they do not specify a published year', () => {
    // Input the title
    cy.get(AddpageSelectors.inputField('title')).type('bookTitle');

    // Input the book description
    cy.get(AddpageSelectors.inputField('description')).type('bookDescription');

    // Input the year published
    cy.get(AddpageSelectors.inputField('author')).type('bookAuthor');

    // Input the date available from
    cy.get(AddpageSelectors.inputField('available-from')).type('2022-08-30');

    // Click has an eBook
    cy.get(AddpageSelectors.inputField('has-e-book')).click();

    // Open book category dropdown list
    cy.get(AddpageSelectors.openDropdownCategoryList).click();

    // Pick the book category
    cy.get(AddpageSelectors.bookCategoryOptionSelect).contains('Crime').should('be.visible').click();

    // Intercetp the API request
    cy.intercept(ApiRoutes.addBookUrl).as('addBook');

    // Click add book button
    cy.get(AddpageSelectors.addBookButton).click();

    // Check the response is a code 400
    cy.wait('@addBook').then((intercept) => {
      const { statusCode } = intercept.response;
      expect(statusCode).to.equal(400);
    });
    // Check that the error message is there
    cy.get(AddpageSelectors.validationError).should('be.visible').contains(InputErrors.inputError('Published Year'));
  });

  it('Does not allow a user to add a book if they do not specify a date available from', () => {
    // Input the title
    cy.get(AddpageSelectors.inputField('title')).type('bookTitle');

    // Input the book description
    cy.get(AddpageSelectors.inputField('description')).type('bookDescription');

    // Input the year published
    cy.get(AddpageSelectors.inputField('author')).type('bookAuthor');

    // Input the date available from
    cy.get(AddpageSelectors.inputField('published-year')).type('2022');

    // Click has an eBook
    cy.get(AddpageSelectors.inputField('has-e-book')).click();

    // Open book category dropdown list
    cy.get(AddpageSelectors.openDropdownCategoryList).click();

    // Pick the book category
    cy.get(AddpageSelectors.bookCategoryOptionSelect).contains('Crime').should('be.visible').click();

    // Intercetp the API request
    cy.intercept(ApiRoutes.addBookUrl).as('addBook');

    // Click add book button
    cy.get(AddpageSelectors.addBookButton).click();

    // Check the response is a code 400
    cy.wait('@addBook').then((intercept) => {
      const { statusCode } = intercept.response;
      expect(statusCode).to.equal(400);
    });
    // Check that the error message is there
    cy.get(AddpageSelectors.validationError).should('be.visible').contains(InputErrors.inputError('Available From'));
  });

  it('Does not allow a user to add a book if they do not specify a book category', () => {
    // Input the title
    cy.get(AddpageSelectors.inputField('title')).type('bookTitle');

    // Input the book description
    cy.get(AddpageSelectors.inputField('description')).type('bookDescription');

    // Input the author
    cy.get(AddpageSelectors.inputField('author')).type('bookAuthor');

    // Input the year published
    cy.get(AddpageSelectors.inputField('published-year')).type('2000');

    // Input the date available from
    cy.get(AddpageSelectors.inputField('available-from')).type('2022-08-30');

    // Click has an eBook
    cy.get(AddpageSelectors.inputField('has-e-book')).click();

    // Intercetp the API request
    cy.intercept(ApiRoutes.addBookUrl).as('addBook');

    // Click add book button
    cy.get(AddpageSelectors.addBookButton).click();

    // Check the response is a code 400
    cy.wait('@addBook').then((intercept) => {
      const { statusCode } = intercept.response;
      expect(statusCode).to.equal(400);
    });

    // Check that the error message is there
    cy.get(AddpageSelectors.validationError).should('be.visible').contains(InputErrors.inputError('Book Category'));
  });
});
