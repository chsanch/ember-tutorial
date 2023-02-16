import { module, test } from 'qunit';
import { setupRenderingTest } from 'super-rentals/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rental', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders information about a rental property', async function (assert) {
    await render(hbs`<Rental />`);

    assert.dom('[data-test-rental]').exists('Rental component is rendered');
    assert.dom('[data-test-img]').exists('Rental image is rendered');
    assert.dom('[data-test-title]').exists('Rental title is rendered');
    assert.dom('[data-test-location]').exists('Rental location is rendered');
    assert
      .dom('[data-test-description]')
      .exists('Rental description is rendered');
    assert.dom('[data-test-price]').exists('Rental price is rendered');
  });
});
