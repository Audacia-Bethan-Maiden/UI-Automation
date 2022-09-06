// import Env from '../../models/env';

import ApiRoutes from '../../models/api-routes/api-routes';
import AddpageSelectors from '../../models/selectors/addpage-selectors';
import HomepageSelectors from '../../models/selectors/homepage-selectors';
import UpdatedpageSelectors from '../../models/selectors/updatepage-selectors';

// Command to search for a book
Cypress.Commands.add('searchBookByTitle', (bookTitle: string) => {
  // Type a title into the search field
  cy.get(HomepageSelectors.searchField).type(bookTitle);

  // Click the search button
  cy.get(HomepageSelectors.searchButton).click();
});

// Command to delete a book
Cypress.Commands.add('deleteBook', (bookTitle: string, bookId: string) => {
  // Search for the book
  cy.searchBookByTitle(bookTitle);

  // Intecept the request
  cy.intercept(`${ApiRoutes.deleteBookUrl}/${bookId}`).as('deleteBook');

  // Delete the book
  cy.get(HomepageSelectors.deleteBookButton(bookId)).click();

  // Confirm delete
  cy.get(HomepageSelectors.confirmDeleteActionButton).contains('Confirm').click();

  // Check that the request returns a 204 status code
  cy.wait('@deleteBook').then((intercept) => {
    const { statusCode } = intercept.response;
    expect(statusCode).to.equal(200);
  });
});

// Command to add a book
Cypress.Commands.add('addBook', (bookTitle: string, bookDescription: string, bookAuthor: string, publishedYear: number, dateAvailableFrom: string, hasEBook: boolean, bookCategory: string) => {
  // Click the add new book button
  cy.get(HomepageSelectors.addBookButton).click();

  // Input the book title
  cy.get(AddpageSelectors.inputField('title')).type(bookTitle);

  // Input the book description
  cy.get(AddpageSelectors.inputField('description')).type(bookDescription);

  // Input the author
  cy.get(AddpageSelectors.inputField('author')).type(bookAuthor);

  // Input the year published
  cy.get(AddpageSelectors.inputField('published-year')).type(publishedYear.toString());

  // Input the date available from
  cy.get(AddpageSelectors.inputField('available-from')).type(dateAvailableFrom);

  // Click has an eBook
  if (hasEBook === true) {
    cy.get(AddpageSelectors.inputField('has-e-book')).click();
  }

  // Open book category dropdown list
  cy.get(AddpageSelectors.openDropdownCategoryList).click();

  // Pick the book category
  cy.get(AddpageSelectors.bookCategoryOptionSelect).contains(bookCategory).should('be.visible').click();
});

Cypress.Commands.add('updateADetail', (originalTitle: string, originalDetail: string, updateField: string, updatedDetail: string) => {
  switch (updateField) {
    case 'title':
      // Clear the title
      cy.get(UpdatedpageSelectors.inputField('title')).should('have.value', originalTitle).should('be.visible');
      cy.get(UpdatedpageSelectors.inputField('title')).clear();
      cy.get(UpdatedpageSelectors.inputField('title'), { timeout: 5000 }).should('not.have.value', originalTitle);

      // Change the title
      cy.get(UpdatedpageSelectors.inputField('title')).type(updatedDetail);
      break;

    case 'description':
      // Clear the description
      cy.get(UpdatedpageSelectors.inputField('description')).should('have.value', originalDetail).should('be.visible');
      cy.get(UpdatedpageSelectors.inputField('description')).clear();
      cy.get(UpdatedpageSelectors.inputField('description'), { timeout: 5000 }).should('not.have.value', originalDetail);

      // Change the description
      cy.get(UpdatedpageSelectors.inputField('description')).type(updatedDetail);
      break;

    case 'author':
      cy.get(UpdatedpageSelectors.inputField('author')).should('have.value', originalDetail).should('be.visible');
      // Clear the description
      cy.get(UpdatedpageSelectors.inputField('author')).clear();
      cy.get(UpdatedpageSelectors.inputField('author'), { timeout: 5000 }).should('not.have.value', originalDetail);

      // Change the description
      cy.get(UpdatedpageSelectors.inputField('author')).type(updatedDetail);
      break;

    case 'published-year':
      // Clear the description
      cy.get(UpdatedpageSelectors.inputField('published-year')).should('have.value', originalDetail).should('be.visible');
      cy.get(UpdatedpageSelectors.inputField('published-year')).clear();
      cy.get(UpdatedpageSelectors.inputField('published-year'), { timeout: 5000 }).should('not.have.value', originalDetail);

      // Change the description
      cy.get(UpdatedpageSelectors.inputField('published-year')).type(updatedDetail);
      break;

    case 'available-from':
      // Clear the description
      cy.get(UpdatedpageSelectors.inputField('available-from')).should('have.value', originalDetail).should('be.visible');
      cy.get(UpdatedpageSelectors.inputField('available-from')).clear();
      cy.get(UpdatedpageSelectors.inputField('available-from'), { timeout: 5000 }).should('not.have.value', originalDetail);

      // Change the description
      cy.get(UpdatedpageSelectors.inputField('available-from')).type(updatedDetail);
      break;

    case 'has-e-book':
      // Wait for page to load
      cy.get(UpdatedpageSelectors.inputField('title')).should('have.value', originalTitle);
      // Change eBook status
      if (originalDetail !== updatedDetail) {
        cy.get(UpdatedpageSelectors.inputField('has-e-book')).click();
      }
      break;

    case 'book-category':
      // Wait for page to load
      cy.get(UpdatedpageSelectors.inputField('title')).should('have.value', originalTitle);

      // Open book category dropdown list
      cy.get(UpdatedpageSelectors.openDropdownCategoryList).click();

      // Pick the book category
      cy.get(UpdatedpageSelectors.bookCategoryOptionSelect).contains(updatedDetail).should('be.visible').click();
      break;
    default:
      break;
  }
  // Click the add new book button
  // cy.get(UpdatedpageSelectors.updateBookButton).click();
});

Cypress.Commands.add('checkDetails', (bookId: string, bookTitle: string, bookDescription: string, bookAuthor: string, publishedYear: string, dateAvailableFrom: string, hasEBook: boolean, bookCategory: string) => {
  // Check the title is correct
  cy.get(UpdatedpageSelectors.inputField('title')).should('be.visible').should('have.value', bookTitle);

  // Check the description is correct
  cy.get(UpdatedpageSelectors.inputField('description')).should('be.visible').should('have.value', bookDescription);

  // Check the author is correct
  cy.get(UpdatedpageSelectors.inputField('author')).should('be.visible').should('have.value', bookAuthor);

  // Check published year
  cy.get(UpdatedpageSelectors.inputField('published-year')).should('be.visible').should('have.value', publishedYear);

  // Check date available from
  cy.get(UpdatedpageSelectors.inputField('available-from')).should('be.visible').should('have.value', dateAvailableFrom);

  // Check that it has an eBook
  if (hasEBook === true) {
    cy.get(UpdatedpageSelectors.inputField('has-e-book')).should('be.visible').should('be.checked');
  } else {
    cy.get(UpdatedpageSelectors.inputField('has-e-book')).should('be.visible').should('not.be.checked');
  }
  // Check that the book category is correct
  cy.get(UpdatedpageSelectors.chosenBookCategory).should('be.visible').contains(bookCategory);
});

Cypress.Commands.add('checkADetail', (detailType: string, expectedValue: string) => {
  switch (detailType) {
    case 'title':
      cy.get(UpdatedpageSelectors.inputField('title')).should('be.visible').should('have.value', expectedValue);
      break;

    case 'description':
      cy.get(UpdatedpageSelectors.inputField('description')).should('be.visible').should('have.value', expectedValue);
      break;

    case 'author':
      cy.get(UpdatedpageSelectors.inputField('author')).should('be.visible').should('have.value', expectedValue);
      break;

    case 'published-year':
      cy.get(UpdatedpageSelectors.inputField('published-year')).should('be.visible').should('have.value', expectedValue);
      break;

    case 'available-from':
      cy.get(UpdatedpageSelectors.inputField('available-from')).should('be.visible').should('have.value', expectedValue);
      break;

    case 'has-e-book':
      if (expectedValue === 'true') {
        cy.get(UpdatedpageSelectors.inputField('has-e-book')).should('be.visible').should('be.checked');
      } else if (expectedValue === 'false') {
        cy.get(UpdatedpageSelectors.inputField('has-e-book')).should('be.visible').should('not.be.checked');
      }
      break;

    case 'book-category':
      cy.get(UpdatedpageSelectors.chosenBookCategory).should('be.visible').contains(expectedValue);
      break;

    default:
      break;
  }
});

Cypress.Commands.add('addBookApi', (bookTitle: string, bookDescription: string, bookAuthor: string, publishedYearInput: number, dateAvailableFrom: string, hasEBookInput: boolean, bookCategory: number) => {
  cy.request({
    // State the type of API that is being called
    method: 'POST',

    // URL of the API request
    url: ApiRoutes.addBookUrl,

    // API request body
    body: {
      title: bookTitle,
      description: bookDescription,
      author: bookAuthor,
      publishedYear: publishedYearInput,
      availableFrom: dateAvailableFrom,
      hasEBook: hasEBookInput,
      bookCategoryId: bookCategory,
    },

    // Get the auth token?
    auth: {
      bearer: '',
    },
  }).then((response) => response.body.output.id);
});

Cypress.Commands.add('deleteBookApi', (bookId: string) => {
  cy.request({
    // Type of request
    method: 'DELETE',

    // Url
    url: `${ApiRoutes.deleteBookUrl}/${bookId}`,

    // auth token?
    auth: {
      bearer: '',
    },
  });
});

Cypress.Commands.add('findBookId', () => {
  cy.location().then((location) => {
    const bookUrlArray = location.pathname.split('/');
    const bookId: string = bookUrlArray[2];
    return cy.wrap(bookId);
  });
});
