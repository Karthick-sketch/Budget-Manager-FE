import Route from '@ember/routing/route';

export default class MonthlyBudgetRoute extends Route {
  async model() {
    let response = await fetch('/monthly-budget.json');
    let { data } = await response.json();
    return data;
  }
}
