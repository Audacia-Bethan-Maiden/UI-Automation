export default class UpdatepageSelectors {
  static readonly toSearchpageButton = '[data-id="to-search-page-from-update-book-button"]';

  static inputField(field: string): string {
    return `#book-${field}`;
  }

  static readonly openDropdownCategoryList = '.vs__open-indicator > path';

  static readonly bookCategoryOptionSelect = '.vs__dropdown-option';

  static readonly chosenBookCategory = '.vs__selected';

  static readonly addBookButton = '.add-button';

  static readonly updateBookButton = '.update-button';
}
