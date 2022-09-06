import ApiRoutes from '../../../../models/api-routes/api-routes';
import Env from '../../../../models/env';
import AddpageSelectors from '../../../../models/selectors/addpage-selectors';

describe('As a user I can add the details of a book as long as I use the form correctly', () => {
  afterEach(() => {
    // Wait for the page to load
    cy.url().should('contain', `${Env.HomepageUrl}book/`).then(() => {
      // Find the book ID
      cy.findBookId().then((bookId: string) => {
        // afterEach deletes the book
        cy.deleteBookApi(bookId);
      });
    });
  });
  it('Allows a user to add a new crime book', () => {
    // Visit the homepage of the book website
    cy.visit(Env.HomepageUrl);

    // Add a new book
    cy.addBook('Test book title', 'Test book description', 'Test Author', 2022, '2022-08-31', true, 'Crime');

    // Intecept the request
    cy.intercept(ApiRoutes.addBookUrl).as('addBook');

    // Click the add new book button
    cy.get(AddpageSelectors.addBookButton).click();

    // Check that the request returns a 201 status code
    cy.wait('@addBook').then((intercept) => {
      const { statusCode } = intercept.response;
      expect(statusCode).to.equal(201);
    });
  });
  it('Allows a user to add a new fiction book', () => {
    // Visit the homepage of the book website
    cy.visit(Env.HomepageUrl);

    // Add a new book
    cy.addBook('Test book title', 'Test book description', 'Test Author', 2022, '2022-08-31', true, 'Fiction');

    // Intecept the request
    cy.intercept(ApiRoutes.addBookUrl).as('addBook');

    // Click the add new book button
    cy.get(AddpageSelectors.addBookButton).click();

    // Check that the request returns a 201 status code
    cy.wait('@addBook').then((intercept) => {
      const { statusCode } = intercept.response;
      expect(statusCode).to.equal(201);
    });
  });
});
