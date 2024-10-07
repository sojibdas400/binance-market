import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class EntryDistributionComponent extends Component {
  @tracked amount = 10;
  @tracked lowNumber = 5.0;
  @tracked highNumber = 5.4;
  @tracked distributionNumber = 10;
  @tracked distributions = [];
  @tracked weights = [];
  @tracked totalWeight = 0;
  @tracked averageEntry = 0;

  @action
  calculateDistribution() {
    console.clear();

    return this.calculate(
      parseFloat(this.lowNumber),
      parseFloat(this.highNumber),
      this.distributionNumber
    );
  }

  calculate(lowNumber, highNumber, distributionNumber) {
    this.distributions = []; // Reset distributions array
    const increment = this.increment(lowNumber, highNumber, distributionNumber);

    // Check if increment is a valid number
    if (increment <= 0) {
      console.error('Invalid increment value.');
      return;
    }

    console.log('increment', increment);
    let entries = [];
    for (let i = lowNumber; i <= highNumber; i += increment) {
      entries.push(i);
    }

    this.weights = entries.map((entry) => 1 / entry);
    console.log('weights', this.weights);

    this.totalWeight = this.weights.reduce((acc, weight) => acc + weight, 0);
    console.log('totalWeight', this.totalWeight);

    this.distributions = entries.map((entry, index) => {
      const share = (this.weights[index] / this.totalWeight) * this.amount;
      return { amount: share.toFixed(5), entry: entry.toFixed(4) };
    });
    console.log('Distributions', this.distributions);

    this.calculateAverageEntry();

    return this.distributions;
  }

  calculateAverageEntry() {
    if (this.distributions.length === 0) {
      this.averageEntry = 0;
      return;
    }

    // Calculate the average entry
    const totalEntries = this.distributions.reduce((acc, distribution) => {
      return acc + parseFloat(distribution.entry); // Convert entry to float for summation
    }, 0);

    this.averageEntry = (totalEntries / this.distributions.length).toFixed(4); // Calculate average and format it
    console.log('Average Entry:', this.averageEntry);
  }

  increment(lowNumber, highNumber, distributionNumber) {
    return (highNumber - lowNumber) / (distributionNumber - 1);
  }
}
