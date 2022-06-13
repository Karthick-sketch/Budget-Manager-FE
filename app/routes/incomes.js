import Route from '@ember/routing/route';

export default class IncomesRoute extends Route {
  async model() {
    let response = await fetch('/incomes.json');
    let { data } = await response.json();
    return data;
  }
}
