import Route from '@ember/routing/route';

export default class ExpensesRoute extends Route {
  async model() {
    let response = await fetch('/expenses.json');
    let { data } = await response.json();
    return data;
  }
}
