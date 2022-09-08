export default class GridfoxSelectors {
  static readonly nameField = '.font-sans';

  static readonly startDatePicker = ':nth-child(3) > .mt-2 > .g-form-field > .datepicker > input';

  static readonly endDatePicker = ':nth-child(4) > .mt-2 > .g-form-field > .datepicker > input';

  static readonly startTimePicker = ':nth-child(5) > .mt-2 > .g-form-field > .datepicker > input';

  static readonly endTimePicker = ':nth-child(6) > .mt-2 > .g-form-field > .datepicker > input';

  static readonly calendarYearChoose = '.datepicker-dropdown__3-4-grid';

  static readonly yearPicker = '.datepicker-dropdown__title > :nth-child(2)';

  static readonly monthPicker = '.datepicker-dropdown__title > :nth-child(1)';

  static chooseMonth(month: number): string {
    return `.datepicker-dropdown__3-4-grid > :nth-child(${month})`;
  }

  static readonly calendarCell = '.cell--active-month';

  static readonly openDropDownList = '.icon';

  static readonly listOptions = '.options-list';

  static readonly extraNotesBold = '[title="Bold"] > span';

  static readonly extraNotesInput = '.ProseMirror';

  static readonly approvedButton = '.text-white > .feather';

  static readonly submitButton = '.px-6';

  static readonly validationMessage = '.validation-message';

  static errorMessage(field: string): string {
    return `${field} is required`;
  }
}
