import EmberRouter from '@ember/routing/router';
import config from 'budget-manager-fe/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('budgets');
  this.route('expenses');
  this.route('monthly-budget');
  this.route('incomes');
});
