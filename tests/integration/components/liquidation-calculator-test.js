import { module, test } from 'qunit';
import { setupRenderingTest } from 'market/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | liquidation-calculator', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<LiquidationCalculator />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <LiquidationCalculator>
        template block text
      </LiquidationCalculator>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
