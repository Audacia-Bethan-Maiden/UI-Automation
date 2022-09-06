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
    addBook(bookTitle: string, bookDescription: string, bookAuthor: string, publishedYear: number, dateAvailableFrom: string, hasEBook: boolean, bookCategory: string): Chainable<Element>

    /**
    * Request to update one detail of a book.
    */
    // eslint-disable-next-line max-len
    updateADetail(originalTitle: string, originalDetail: string, updateField: string, updatedDetail: string): Chainable<Element>

    /**
     * Request to check a book's details
     */
    // eslint-disable-next-line max-len
    checkDetails(bookId: string, bookTitle: string, bookDescription: string, bookAuthor: string, publishedYear: string, dateAvailableFrom: string, hasEBook: boolean, bookCategory: string): Chainable<Element>

    /**
     * Request to check a detail of a book
     */
    checkADetail(detailType: string, expectedValue: string): Chainable<Element>

    /**
     * Request to add a book
     */
    // eslint-disable-next-line max-len
    addBookApi(bookTitle: string, bookDescription: string, bookAuthor: string, publishedYear: number, dateAvailableFrom: string, hasEBook: boolean, bookCategory: number): Chainable<Element>

    /**
     * Request to delete a book
     */
    deleteBookApi(bookId: string): Chainable<Element>

    /**
     * Finds the ID of a book using the url of the updatepage
     */
    findBookId(): Chainable<string>
  }
}
