class Oystercard {
  constructor() {
    this._balance = 0;
  }

  balance() {
    return this._balance;
  }

  topup(amount) {
    this._balance += amount;
  }
}

module.exports = Oystercard;