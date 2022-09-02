export default class HomepageSelectors {
  static readonly searchField = ':nth-child(1) > #search-arg-book-title';

  static readonly searchButton = '.search';

  static readonly tableCell = '.table-cell';

  static readonly addBookButton = '#navigate-add-book-button';

  static readonly secondPageButton = ':nth-child(2) > .paging-btn';

  static readonly lastPageButton = ':nth-child(3) > .paging-btn';

  static openEditPage(id: string): string {
    return `[data-id="open-book-from-search-table_${id}"]`;
  }

  static deleteBookButton(id: string): string {
    return `[data-id="delete-book-from-search-table_${id}"]`;
  }
}
