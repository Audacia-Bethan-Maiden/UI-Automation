import Env from '../env';

export default class ApiRoutes {
  static readonly addBookUrl = `${Env.BaseApiUrl}book/Add`;

  static readonly updateBookUrl = `${Env.BaseApiUrl}book/Update`;

  static readonly deleteBookUrl = `${Env.BaseApiUrl}book`;
}
