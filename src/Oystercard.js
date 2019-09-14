class Oystercard {

  constructor() {
    this._MAX_BALANCE = 100;
    this._MIN_SINGLE_FARE = 1;
    this._balance = 0;
    this._entryStation = '';
    this._journeyHistory = [];
  }

  balance() {
    return this._balance;
  }

  topup(amount) {

    const newBalance = this._balance + amount;

    if (newBalance <= this._MAX_BALANCE) {

      this._balance += amount;

    } else {

      throw new Error('Topup failed; would bring balance over maximum amount allowed.');

    }
    
  }

  deduct(amount) {

    this._balance -= amount;

  }

  touchIn(stationName) {

    if (this._balance >= this._MIN_SINGLE_FARE) {

      this._entryStation = stationName;
    } else {

      throw new Error('Insufficient balance for a journey.');
    }
  }

  touchOut() {
    this._entryStation = '';
    this.deduct(this._MIN_SINGLE_FARE);
  }

  isInJourney() {

    return this._entryStation !== '' ? true : false
  }

  entryStation() {
    return this._entryStation;
  }

  journeyHistory() {
    return this._journeyHistory;
  }
}

module.exports = Oystercard;