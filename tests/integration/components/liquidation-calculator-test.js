import { module, test } from 'qunit';
<<<<<<< HEAD
import { setupRenderingTest } from 'binance-market/tests/helpers';
=======
import { setupRenderingTest } from 'market/tests/helpers';
>>>>>>> bd4a5e7db58fe77d7ff3bbae86ee698c02014dc7
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | liquidation-calculator', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<LiquidationCalculator />`);

<<<<<<< HEAD
    assert.dom().hasText('');
=======
    assert.dom(this.element).hasText('');
>>>>>>> bd4a5e7db58fe77d7ff3bbae86ee698c02014dc7

    // Template block usage:
    await render(hbs`
      <LiquidationCalculator>
        template block text
      </LiquidationCalculator>
    `);

<<<<<<< HEAD
    assert.dom().hasText('template block text');
=======
    assert.dom(this.element).hasText('template block text');
>>>>>>> bd4a5e7db58fe77d7ff3bbae86ee698c02014dc7
  });
});
