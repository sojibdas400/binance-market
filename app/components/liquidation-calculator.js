import Component from '@glimmer/component';
import { action, computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LiquidationCalculatorComponent extends Component {
  @tracked entryPrice = 5.2;
  @tracked quantity = 725;
  @tracked leverage = 75;
  @tracked balance = 10.13;
  @tracked liquidationPrice = null;

  @action
  handleBalanceChange() {}

  @action
  calculateLiquidationPrice() {
    this.entryPrice = parseFloat(this.entryPrice);
    this.quantity = parseFloat(this.quantity);
    this.leverage = parseFloat(this.leverage);
    this.balance = parseFloat(this.balance);
    this.liquidationPrice = parseFloat(this.liquidationPrice);

    console.log('entry price', this.entryPrice);
    console.log('quantity', this.quantity);
    console.log('leverage', this.leverage);
    console.log('balance', this.balance);

    if (this.entryPrice > 0 && this.quantity > 0 && this.leverage > 0) {
      console.log('fuck');

      const liquidationPrice = this.entryPrice * (1 - 1 / this.leverage);
      this.liquidationPrice = liquidationPrice.toFixed(8); // Display with 8 decimal places
    }
    console.log('liquidationPrice', this.liquidationPrice);
  }
}
