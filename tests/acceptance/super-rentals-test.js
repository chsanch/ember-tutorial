import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'super-rentals/tests/helpers';

module('Acceptance | super rentals', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/');
    assert.dom('[data-test-nav]').exists();
    assert.dom('h2').hasText('Welcome to Super Rentals!');
  });

  test('visiting /about', async function (assert) {
    await visit('/about');

    assert.strictEqual(currentURL(), '/about');
    assert.dom('[data-test-nav]').exists();
    assert.dom('h2').hasText('About Super Rentals');
  });

  test('visiting /getting-in-touch', async function (assert) {
    await visit('/getting-in-touch');

    assert.strictEqual(currentURL(), '/getting-in-touch');
    assert.dom('[data-test-nav]').exists();
    assert.dom('h2').hasText('Contact Us');
  });

  test('navigating using the nav-bar', async function (assert) {
    await visit('/');

    assert.dom('[data-test-nav-about]').hasText('About');
    assert.dom('[data-test-nav-contact]').hasText('Contact');
    assert.dom('[data-test-nav-home]').hasText('Home SuperRentals');

    await click('[data-test-nav-about]');
    assert.strictEqual(currentURL(), '/about');

    await click('[data-test-nav-contact]');
    assert.strictEqual(currentURL(), '/getting-in-touch');

    await click('[data-test-nav-home]');
    assert.strictEqual(currentURL(), '/');
  });
});
