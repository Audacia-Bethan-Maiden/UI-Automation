import ApiRoutes from '../../../../models/api-routes/api-routes';
import Env from '../../../../models/env';
import AddpageSelectors from '../../../../models/selectors/addpage-selectors';
import HomepageSelectors from '../../../../models/selectors/homepage-selectors';
import UpdatedpageSelectors from '../../../../models/selectors/updatepage-selectors';

let bookId: string;

describe('As a user I can add the details of a book as long as I use the form correctly', () => {
  afterEach(() => {
    // Delete the book
    cy.deleteBookApi(bookId);
  });

  it('Allows a user to add a new crime book', () => {
  // Visit the homepage of the book website
    cy.visit(Env.HomepageUrl);

    // Add a new book
    cy.addBook('New test book title', 'Test book description', 'Test Author', 2022, '2022-08-31', true, 'Crime');

    // Intecept the request
    cy.intercept(ApiRoutes.addBookUrl).as('addBook');

    // Click the add new book button
    cy.get(AddpageSelectors.addBookButton).click();

    // Check that the request returns a 201 status code
    cy.wait('@addBook').then((intercept) => {
      const { statusCode } = intercept.response;
      expect(statusCode).to.equal(201);
    });

    // Store the book ID as a variable
    cy.url().should('contain', `${Env.HomepageUrl}book/`).then(() => {
      cy.findBookId().then((id) => {
        bookId = id;
      });
    });

    // Check that the book has been added
    // Click the back to search page button
    cy.get(UpdatedpageSelectors.toSearchpageButton).click();

    // Search for the book
    cy.searchBookByTitle('New test book title');

    // Check the book is visible
    cy.get(HomepageSelectors.tableCell).should('be.visible').contains('New test book title');
  });

  it('Allows a user to add a new fiction book', () => {
  // Visit the homepage of the book website
    cy.visit(Env.HomepageUrl);

    // Add a new book
    cy.addBook('New test book title', 'Test book description', 'Test Author', 2022, '2022-08-31', true, 'Fiction');

    // Intecept the request
    cy.intercept(ApiRoutes.addBookUrl).as('addBook');

    // Click the add new book button
    cy.get(AddpageSelectors.addBookButton).click();

    // Check that the request returns a 201 status code
    cy.wait('@addBook').then((intercept) => {
      const { statusCode } = intercept.response;
      expect(statusCode).to.equal(201);
    });

    // Store the book ID as a variable
    cy.url().should('contain', `${Env.HomepageUrl}book/`).then(() => {
      cy.findBookId().then((id) => {
        bookId = id;
      });
    });

    // Check that the book has been added
    // Click the back to search page button
    cy.get(UpdatedpageSelectors.toSearchpageButton).click();

    // Search for the book
    cy.searchBookByTitle('New test book title');

    // Check the book is visible
    cy.get(HomepageSelectors.tableCell).should('be.visible').contains('New test book title');
  });

  it('Allows the user to add a book that does not have an eBook', () => {
    // Go to the homepage
    cy.visit(Env.HomepageUrl);

    // Click the add book button
    cy.get(HomepageSelectors.addBookButton).click();

    // Add a new book
    cy.addBook('New test book title', 'Test book description', 'Test Author', 2022, '2022-08-31', false, 'Crime');

    // Intercept the API request
    cy.intercept(ApiRoutes.addBookUrl).as('addBook');

    // Click the add book button
    cy.get(AddpageSelectors.addBookButton).click();

    // Check the status code of the request
    cy.wait('@addBook').then((intercept) => {
      const { statusCode } = intercept.response;
      expect(statusCode).to.equal(201);
    });

    // Store the book ID as a variable
    cy.url().should('contain', `${Env.HomepageUrl}book/`).then(() => {
      cy.findBookId().then((id) => {
        bookId = id;
      });
    });

    // Click back to the search page
    cy.get(UpdatedpageSelectors.toSearchpageButton).click();

    // Search for the book
    cy.searchBookByTitle('New test book title');

    // Check the book is visible
    cy.get(HomepageSelectors.tableCell).should('be.visible').contains('New test book title');
  });
});
