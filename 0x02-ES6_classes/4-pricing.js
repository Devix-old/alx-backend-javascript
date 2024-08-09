import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('amout must be a number');
    }
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new TypeError('currency must a currency');
    }
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('amout must be a number');
    }
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new TypeError('currency must a currency');
    }
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof (amount) !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof (conversionRate) !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
