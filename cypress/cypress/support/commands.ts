// import Env from '../../models/env';
import HomepageSelectors from '../../models/selectors/homepage-selectors';
import UpdatedpageSelectors from '../../models/selectors/updatepage-selectors';

// Command to search for a book
Cypress.Commands.add('searchBookByTitle', (bookTitle: string) => {
  // Type a title into the search field
  cy.get(HomepageSelectors.searchField).type(bookTitle);

  // Click the search button
  cy.get(HomepageSelectors.searchButton).click();

  // Check the titles searched are there
  cy.get(HomepageSelectors.tableCell).should('be.visible').contains(bookTitle);
});

// Command to delete a book
Cypress.Commands.add('deleteBook', (bookTitle: string, bookId: string) => {
  // Search for the book
  cy.searchBookByTitle(bookTitle);

  // Delete the book
  cy.get(HomepageSelectors.deleteBookButton(bookId)).click();

  // Check it has been deleted
  cy.get(HomepageSelectors.tableCell).should('not.exist');
});

// Command to add a book
Cypress.Commands.add('addBook', (bookTitle: string, bookDescription: string, bookAuthor: string, publishedYear: string, dateAvailableFrom: string, hasEBook: boolean, bookCategory: string) => {
  // Click the add new book button
  cy.get(HomepageSelectors.addBookButton).click();

  // Input the book title
  cy.get(UpdatedpageSelectors.inputField('title')).type(bookTitle);

  // Input the book description
  cy.get(UpdatedpageSelectors.inputField('description')).type(bookDescription);

  // Input the author
  cy.get(UpdatedpageSelectors.inputField('author')).type(bookAuthor);

  // Input the year published
  cy.get(UpdatedpageSelectors.inputField('published-year')).type(publishedYear);

  // Input the date available from
  cy.get(UpdatedpageSelectors.inputField('available-from')).type(dateAvailableFrom);

  // Click has an eBook
  if (hasEBook === true) {
    cy.get(UpdatedpageSelectors.inputField('has-e-book')).click();
  }

  // Open book category dropdown list
  cy.get(UpdatedpageSelectors.openDropdownCategoryList).click();

  // Pick the book category
  cy.get(UpdatedpageSelectors.bookCategoryOptionSelect).contains(bookCategory).should('be.visible').click();

  // Click the add new book button
  cy.get(UpdatedpageSelectors.addBookButton).click();
});

Cypress.Commands.add('updateADetail', (originalTitle: string, bookId: string, updateField: string, updatedDetail: string) => {
  // Search for the book you want to edit
  cy.searchBookByTitle(originalTitle);

  // Open the update page for the book you want to update
  cy.get(HomepageSelectors.openEditPage(bookId)).click();
  switch (updateField) {
    case 'title':
      // Clear the title
      cy.get(UpdatedpageSelectors.inputField('title')).clear();

      // Change the title
      cy.get(UpdatedpageSelectors.inputField('title')).type(updatedDetail);
      break;

    case 'description':
      // Clear the description
      cy.get(UpdatedpageSelectors.inputField('description')).clear();

      // Change the description
      cy.get(UpdatedpageSelectors.inputField('description')).type(updatedDetail);
      break;

    case 'author':
      // Clear the description
      cy.get(UpdatedpageSelectors.inputField('author')).clear();

      // Change the description
      cy.get(UpdatedpageSelectors.inputField('author')).type(updatedDetail);
      break;

    case 'published-year':
      // Clear the description
      cy.get(UpdatedpageSelectors.inputField('published-year')).clear();

      // Change the description
      cy.get(UpdatedpageSelectors.inputField('published-year')).type(updatedDetail);
      break;

    case 'available-from':
      // Clear the description
      cy.get(UpdatedpageSelectors.inputField('available-from')).clear();

      // Change the description
      cy.get(UpdatedpageSelectors.inputField('available-from')).type(updatedDetail);
      break;

    case 'has-e-book':
      // Change eBook status
      cy.get(UpdatedpageSelectors.inputField('has-e-book')).click();
      break;

    case 'book-category':
      // Open book category dropdown list
      cy.get(UpdatedpageSelectors.openDropdownCategoryList).click();

      // Pick the book category
      cy.get(UpdatedpageSelectors.bookCategoryOptionSelect).contains(updatedDetail).should('be.visible').click();
      break;
    default:
      break;
  }
  // Click the add new book button
  cy.get(UpdatedpageSelectors.updateBookButton).click();
});

Cypress.Commands.add('checkDetails', (bookId: string, bookTitle: string, bookDescription: string, bookAuthor: string, publishedYear: string, dateAvailableFrom: string, hasEBook: boolean, bookCategory: string) => {
  // Click the open button to view the details
  cy.get(HomepageSelectors.openEditPage(bookId)).click();

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

Cypress.Commands.add('checkADetail', (bookId: string, detailType: string, expectedValue: string) => {
  // Click the open button to view the details
  cy.get(HomepageSelectors.openEditPage(bookId)).click();
});
