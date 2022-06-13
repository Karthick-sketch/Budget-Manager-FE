import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | monthly-budget', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:monthly-budget');
    assert.ok(route);
  });
});
