export default class InputErrors {
  static inputError(inputField: string): string {
    return `${inputField} is required`;
  }
}
