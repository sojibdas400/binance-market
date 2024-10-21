import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class Stocks extends Component {
  @tracked leverage = 10;
  @tracked size = 150;
  @tracked margin = 15;
  @tracked entryPrice = 5.1;
  @tracked marketPrice = 5.3;
  @tracked distributionNumber = 10;
  @tracked liquidationPrice = 1;
}
