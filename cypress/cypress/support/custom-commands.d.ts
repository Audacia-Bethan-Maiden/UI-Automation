declare namespace Cypress {
  interface Chainable {
    /**
    * Request to search for a book using it's title.
    */
    searchBookByTitle(bookTitle: string): Chainable<Element>

    /**
    * Request to delete a book using it's title and id.
    */
    deleteBook(bookTitle: string, bookId: string): Chainable<Element>

    /**
    * Request to add a book.
    */
    // eslint-disable-next-line max-len
    addBook(bookTitle: string, bookDescription: string, bookAuthor: string, publishedYear: string, dateAvailableFrom: string, hasEBook: boolean, bookCategory: string): Chainable<Element>

    /**
    * Request to update one detail of a book.
    */
    updateADetail(bookId: string, updateField: string, updatedDetail: string): Chainable<Element>

    /**
     * Request to check a book's details
     */
    // eslint-disable-next-line max-len
    checkDetails(bookId: string, bookTitle: string, bookDescription: string, bookAuthor: string, publishedYear: string, dateAvailableFrom: string, hasEBook: boolean, bookCategory: string): Chainable<Element>
  }
}
