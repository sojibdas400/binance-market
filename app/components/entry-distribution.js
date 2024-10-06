import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class EntryDistributionComponent extends Component {
  @tracked amount = 10;
  @tracked lowNumber = 4.5;
  @tracked highNumber = 5.32;
  @tracked distributionNumber = 20;
  @tracked distributions = [];
  @tracked cumulativeAverages = [];
  @tracked averageEntry = 0;
  @tracked totalAverage = 0;

  @action
  calculateDistribution() {
    this.calculate(this.lowNumber, this.highNumber, this.distributionNumber);
  }

  calculate(lowNumber, highNumber, distributionNumber) {
    this.distributions = []; // Reset distributions array
    const increment = this.increment(lowNumber, highNumber, distributionNumber);

    if (increment <= 0) {
      console.error('Invalid increment value.');
      return;
    }

    let entries = [];
    for (let i = lowNumber; i <= highNumber; i += increment) {
      entries.push(i);
    }

    this.weights = entries.map((entry) => 1 / entry);
    this.totalWeight = this.weights.reduce((acc, weight) => acc + weight, 0);

    let cumulativeSum = 0;
    this.distributions = entries.map((entry, index) => {
      const share = (this.weights[index] / this.totalWeight) * this.amount;
      cumulativeSum += share;
      return {
        entry: entry.toFixed(4),
        amount: share.toFixed(4),
        cumulativeAverage: (cumulativeSum / (index + 1)).toFixed(4),
      };
    });

    this.calculateAverageEntry();
    this.calculateTotalAverage();
  }

  increment(lowNumber, highNumber, distributionNumber) {
    return (highNumber - lowNumber) / (distributionNumber - 1);
  }

  calculateAverageEntry() {
    const totalEntries = this.distributions.reduce((acc, distribution) => {
      return acc + parseFloat(distribution.entry);
    }, 0);

    this.averageEntry = (totalEntries / this.distributions.length).toFixed(4);
  }

  calculateTotalAverage() {
    const totalAmount = this.distributions.reduce((acc, distribution) => {
      return acc + parseFloat(distribution.amount);
    }, 0);

    this.totalAverage = (totalAmount / this.distributions.length).toFixed(4);
  }
}
