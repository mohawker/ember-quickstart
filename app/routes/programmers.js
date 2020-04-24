import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
  model() {
    return ['Si Han', 'Zhi Wei', 'Anthony Fong'];
  }
}
