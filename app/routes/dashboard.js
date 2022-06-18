import Route from '@ember/routing/route';

export default class DashboardRoute extends Route {
  async model() {
    let response = await fetch('/dashboard.json');
    let { data } = await response.json();

    for (let d of data) {
      switch (d['type']) {
        case 'expenses':
          d['amount'] = `-₹${d['amount']}`;
          break;
        case 'incomes':
          d['amount'] = `+₹${d['amount']}`;
          break;
        case 'balance':
          d['amount'] = (d['amount'] < 0 ? '-₹' : '+₹') + Math.abs(d['amount']);
          break;
      }
    }

    return data;
  }
}
