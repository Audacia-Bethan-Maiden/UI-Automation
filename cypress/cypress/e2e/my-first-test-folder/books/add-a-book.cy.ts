import ApiRoutes from '../../../../models/api-routes/api-routes';
import Env from '../../../../models/env';
import AddpageSelectors from '../../../../models/selectors/addpage-selectors';
import HomepageSelectors from '../../../../models/selectors/homepage-selectors';
import UpdatedpageSelectors from '../../../../models/selectors/updatepage-selectors';
import TestBooks from '../../../../models/test-books/test-book-details';

let bookId: string;

describe('As a user I can add the details of a book as long as I use the form correctly', () => {
  afterEach(() => {
    // Delete the book
    cy.deleteBookApi(bookId);
  });

  it('Allows a user to add a new fiction book', () => {
  // Visit the homepage of the book website
    cy.visit(Env.HomepageUrl);

    // Add a new book
    cy.addBook(TestBooks.bookTitle,
      TestBooks.bookDescription,
      TestBooks.bookAuthor,
      TestBooks.publishedYear,
      TestBooks.availableFrom,
      TestBooks.hasEBook,
      'Fiction');

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
    }).then(() => {
      // Check that the book has been added
      // Click the back to search page button
      cy.get(UpdatedpageSelectors.toSearchpageButton).click();

      // Search for the book
      cy.searchBookByTitle(TestBooks.bookTitle);

      // Check the book is visible
      cy.get(HomepageSelectors.tableCell).should('be.visible').contains(TestBooks.bookTitle);

      // Click the open button to view the details
      cy.get(HomepageSelectors.openEditPage(bookId)).click();

      // Check the details are correct
      cy.checkDetails(bookId,
        TestBooks.bookTitle,
        TestBooks.bookDescription,
        TestBooks.bookAuthor,
        TestBooks.publishedYear.toString(),
        TestBooks.availableFrom,
        TestBooks.hasEBook,
        'Fiction');
    });
  });

  it('Allows a user to add a new non-fiction book', () => {
    // Visit the homepage of the book website
    cy.visit(Env.HomepageUrl);

    // Add a new book
    cy.addBook(TestBooks.bookTitle,
      TestBooks.bookDescription,
      TestBooks.bookAuthor,
      TestBooks.publishedYear,
      TestBooks.availableFrom,
      TestBooks.hasEBook,
      'Non-Fiction');

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
    }).then(() => {
      // Check that the book has been added
      // Click the back to search page button
      cy.get(UpdatedpageSelectors.toSearchpageButton).click();

      // Search for the book
      cy.searchBookByTitle(TestBooks.bookTitle);

      // Check the book is visible
      cy.get(HomepageSelectors.tableCell).should('be.visible').contains(TestBooks.bookTitle);

      // Click the open button to view the details
      cy.get(HomepageSelectors.openEditPage(bookId)).click();

      // Check the details are correct
      cy.checkDetails(bookId,
        TestBooks.bookTitle,
        TestBooks.bookDescription,
        TestBooks.bookAuthor,
        TestBooks.publishedYear.toString(),
        TestBooks.availableFrom,
        TestBooks.hasEBook,
        'Non-Fiction');
    });
  });

  it('Allows a user to add a new crime book', () => {
    // Visit the homepage of the book website
    cy.visit(Env.HomepageUrl);

    // Add a new book
    cy.addBook(TestBooks.bookTitle,
      TestBooks.bookDescription,
      TestBooks.bookAuthor,
      TestBooks.publishedYear,
      TestBooks.availableFrom,
      TestBooks.hasEBook,
      'Crime');

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
    }).then(() => {
      // Check that the book has been added
      // Click the back to search page button
      cy.get(UpdatedpageSelectors.toSearchpageButton).click();

      // Search for the book
      cy.searchBookByTitle(TestBooks.bookTitle);

      // Check the book is visible
      cy.get(HomepageSelectors.tableCell).should('be.visible').contains(TestBooks.bookTitle);

      // Click the open button to view the details
      cy.get(HomepageSelectors.openEditPage(bookId)).click();

      // Check the details are correct
      cy.checkDetails(bookId,
        TestBooks.bookTitle,
        TestBooks.bookDescription,
        TestBooks.bookAuthor,
        TestBooks.publishedYear.toString(),
        TestBooks.availableFrom,
        TestBooks.hasEBook,
        'Crime');
    });
  });

  it('Allows a user to add a new graphic novel book', () => {
    // Visit the homepage of the book website
    cy.visit(Env.HomepageUrl);

    // Add a new book
    cy.addBook(TestBooks.bookTitle,
      TestBooks.bookDescription,
      TestBooks.bookAuthor,
      TestBooks.publishedYear,
      TestBooks.availableFrom,
      TestBooks.hasEBook,
      'Graphic Novels');

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
    }).then(() => {
      // Check that the book has been added
      // Click the back to search page button
      cy.get(UpdatedpageSelectors.toSearchpageButton).click();

      // Search for the book
      cy.searchBookByTitle(TestBooks.bookTitle);

      // Check the book is visible
      cy.get(HomepageSelectors.tableCell).should('be.visible').contains(TestBooks.bookTitle);

      // Click the open button to view the details
      cy.get(HomepageSelectors.openEditPage(bookId)).click();

      // Check the details are correct
      cy.checkDetails(bookId,
        TestBooks.bookTitle,
        TestBooks.bookDescription,
        TestBooks.bookAuthor,
        TestBooks.publishedYear.toString(),
        TestBooks.availableFrom,
        TestBooks.hasEBook,
        'Graphic Novels');
    });
  });

  it('Allows a user to add a new childrens book', () => {
    // Visit the homepage of the book website
    cy.visit(Env.HomepageUrl);

    // Add a new book
    cy.addBook(TestBooks.bookTitle,
      TestBooks.bookDescription,
      TestBooks.bookAuthor,
      TestBooks.publishedYear,
      TestBooks.availableFrom,
      TestBooks.hasEBook,
      'Childrens');

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
    }).then(() => {
      // Check that the book has been added
      // Click the back to search page button
      cy.get(UpdatedpageSelectors.toSearchpageButton).click();

      // Search for the book
      cy.searchBookByTitle(TestBooks.bookTitle);

      // Check the book is visible
      cy.get(HomepageSelectors.tableCell).should('be.visible').contains(TestBooks.bookTitle);

      // Click the open button to view the details
      cy.get(HomepageSelectors.openEditPage(bookId)).click();

      // Check the details are correct
      cy.checkDetails(bookId,
        TestBooks.bookTitle,
        TestBooks.bookDescription,
        TestBooks.bookAuthor,
        TestBooks.publishedYear.toString(),
        TestBooks.availableFrom,
        TestBooks.hasEBook,
        'Childrens');
    });
  });

  it('Allows the user to add a book that does not have an eBook', () => {
    // Go to the homepage
    cy.visit(Env.HomepageUrl);

    // Add a new book
    cy.addBook(TestBooks.bookTitle,
      TestBooks.bookDescription,
      TestBooks.bookAuthor,
      TestBooks.publishedYear,
      TestBooks.availableFrom,
      false,
      TestBooks.bookCategory);
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
    }).then(() => {
      // Check that the book has been added
      // Click the back to search page button
      cy.get(UpdatedpageSelectors.toSearchpageButton).click();

      // Search for the book
      cy.searchBookByTitle(TestBooks.bookTitle);

      // Check the book is visible
      cy.get(HomepageSelectors.tableCell).should('be.visible').contains(TestBooks.bookTitle);

      // Click the open button to view the details
      cy.get(HomepageSelectors.openEditPage(bookId)).click();

      // Check the details are correct
      cy.checkDetails(bookId,
        TestBooks.bookTitle,
        TestBooks.bookDescription,
        TestBooks.bookAuthor,
        TestBooks.publishedYear.toString(),
        TestBooks.availableFrom,
        false,
        TestBooks.bookCategory);
    });
  });
});
