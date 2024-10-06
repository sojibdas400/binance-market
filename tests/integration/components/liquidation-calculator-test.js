import { module, test } from 'qunit';
import { setupRenderingTest } from 'binance-market/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | liquidation-calculator', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<LiquidationCalculator />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <LiquidationCalculator>
        template block text
      </LiquidationCalculator>
    `);

    assert.dom().hasText('template block text');
  });
});
