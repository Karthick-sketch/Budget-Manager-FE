import Route from '@ember/routing/route';

export default class BudgetRoute extends Route {
  async model(params) {
    let response = await fetch(`/budgets/${params.id}.json`);
    let { data } = await response.json();

    return data[0];
  }
}
