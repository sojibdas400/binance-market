import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class StockCalculatorComponent extends Component {
  @tracked leverage = 26;
  @tracked size = 42.487485; // Size in USDT
  @tracked margin = 7.52; // Margin in USDT
  @tracked entryPrice = 0.006536;
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
  }

  @action
  updateSize(event) {
    this.size = parseFloat(event.target.value);
  }

  @action
  updateMargin(event) {
    this.margin = parseFloat(event.target.value);
  }

  @action
  updateEntryPrice(event) {
    this.entryPrice = parseFloat(event.target.value);
  }

  @action
  updateMarkPrice(event) {
    this.markPrice = parseFloat(event.target.value);
  }

  @action
  updateLiquidationPrice(event) {
    this.liquidationPrice = parseFloat(event.target.value);
  }
}
