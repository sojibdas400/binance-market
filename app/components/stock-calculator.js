import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class StockCalculatorComponent extends Component {
  @tracked leverage = 10;
  @tracked size = 71; // Size in USDT
  @tracked margin = 7.18; // Margin in USDT
  @tracked entryPrice = 5.2257;
  @tracked markPrice = 0.006192;
  @tracked liquidationPrice = 0.005523;

  // Computed properties for PNL, ROI, and Margin Ratio
  get pnl() {
    return (this.markPrice - this.entryPrice) * this.size * this.leverage;
  }

  get roi() {
    return ((this.pnl / this.margin) * 100).toFixed(2);
  }

  get marginRatio() {
    return ((this.margin / (this.size * this.entryPrice)) * 100).toFixed(2);
  }

  // Actions to update values based on user input
  @action
  updateLeverage(event) {
    this.leverage = parseFloat(event.target.value);
    this.updateLiquidationPrice();
    this.checkSizeLimit();
  }

  @action
  updateSize(event) {
    let check = this.checkSizeLimit();
    if (check) {
      this.size = parseFloat(event.target.value);
      this.updateLiquidationPrice();
    }
  }

  @action
  updateMargin(event) {
    this.margin = parseFloat(event.target.value);
    this.checkSizeLimit();
  }

  @action
  updateEntryPrice(event) {
    this.entryPrice = parseFloat(event.target.value);
    this.updateLiquidationPrice();
  }

  @action
  updateMarkPrice(event) {
    this.markPrice = parseFloat(event.target.value);
  }

  @action
  updateLiquidationPrice() {
    if (this.leverage > 0 && this.margin > 0) {
      this.liquidationPrice =
        this.entryPrice - this.size / this.leverage / this.margin;
      console.log('liquidationPrice', this.liquidationPrice);
    }
  }

  @action
  checkSizeLimit() {
    const maxSize = this.leverage * this.margin;
    if (this.size > maxSize) {
      alert(
        `Size exceeds the maximum allowed size of ${maxSize} USDT. Please reduce the size.`,
      );
      return false;
    }
    return true;
  }
}
