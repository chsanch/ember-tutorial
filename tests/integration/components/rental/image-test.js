import { module, test } from 'qunit';
import { setupRenderingTest } from 'super-rentals/tests/helpers';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rental/image', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the given Image', async function (assert) {
    await render(hbs`<Rental::Image />`);

    assert.dom(this.element).hasText('');

    await render(hbs`
      <Rental::Image
        src="/assets/images/teaching-tomster.png"
        alt="Teaching Tomster"
      />
    `);

    assert.dom('[data-test-img]').exists('Rental image is rendered');
    assert
      .dom('[data-test-img] > img')
      .hasAttribute('src', '/assets/images/teaching-tomster.png');
    assert.dom('[data-test-img] > img').hasAttribute('alt', 'Teaching Tomster');
  });

  test('clicking on the component toggles its modal', async function (assert) {
    await render(hbs`
      <Rental::Image
        src="/assets/images/teaching-tomster.png"
        alt="Teaching Tomster"
      />
    `);

    assert.dom('[data-test-modal]').doesNotExist('Modal is not rendered');

    await click('[data-test-img]');

    assert.dom('[data-test-modal]').exists('Modal is rendered');

    await click('[data-test-close-modal]');

    assert.dom('[data-test-modal]').doesNotExist('Modal is not rendered');
  });
});
