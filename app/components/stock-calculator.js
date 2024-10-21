import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class StockCalculatorComponent extends Component {
  @tracked leverage = this.args.leverage;
  @tracked size = this.args.size; // Size in USDT
  @tracked margin = this.args.margin; // Margin in USDT
  @tracked entryPrice = this.args.entryPrice;
  @tracked marketPrice = this.args.marketPrice;
  @tracked liquidationPrice = this.args.liquidationPrice;

  // Computed properties for PNL, ROI, and Margin Ratio
  get pnl() {
    return (this.marketPrice - this.entryPrice) * this.size * this.leverage;
  }

  get roi() {
    return ((this.pnl / this.margin) * 100).toFixed(2);
  }

  get marginRatio() {
    return ((this.margin / (this.size * this.entryPrice)) * 100).toFixed(2);
  }

  @action updateLeverage(event) {
    this.leverage = parseFloat(event.target.value);
    this.updateLiquidationPrice();
    this.checkSizeLimit(this.size);
  }

  @action updateSize(event) {
    let value = parseFloat(event.target.value);
    let check = this.checkSizeLimit(value);

    if (check) {
      this.size = value;
      this.updateLiquidationPrice();
    }
  }

  @action updateMargin(event) {
    this.margin = parseFloat(event.target.value);
    this.checkSizeLimit();
  }

  @action updateEntryPrice(event) {
    this.entryPrice = parseFloat(event.target.value);
    this.updateLiquidationPrice();
  }

  @action updateMarkPrice(event) {
    this.marketPrice = parseFloat(event.target.value);
  }

  @action updateLiquidationPrice() {
    if (this.leverage > 0 && this.margin > 0) {
      this.liquidationPrice =
        // this.entryPrice - this.size / this.leverage / this.margin;
        this.entryPrice -
        (this.entryPrice / this.leverage) * (this.size / this.margin);

      console.log('liquidationPrice', this.liquidationPrice);
    }
  }

  @action checkSizeLimit(size) {
    const maxSize = this.leverage * this.margin;

    if (size > maxSize) {
      this.showWarning = `Size exceeds the maximum allowed size of ${maxSize} USDT. Please reduce the size.`;
      setTimeout(() => {
        this.showWarning = false;
      }, 3000);
      return false;
    }
    return true;
  }

  @tracked showWarning = false;
}
