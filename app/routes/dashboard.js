import Route from '@ember/routing/route';

export default class DashboardRoute extends Route {
  async model() {
    let response = await fetch('/dashboard.json');
    let { data } = await response.json();
    return data;
  }
}
