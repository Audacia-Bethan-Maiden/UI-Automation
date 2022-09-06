/**
 * Mappings for environment variables
 */
export default class Env {
  // Homepage url
  static readonly HomepageUrl = Cypress.env('HOMEPAGE_URL');

  static readonly BaseApiUrl = Cypress.env('BASE_API_URL');
}
