class Oystercard {

  constructor() {
    this._MAX_BALANCE = 100;
    this._MIN_SINGLE_FARE = 1;
    this._balance = 0;
    this._isInJourney = false;
    this._entryStation = '';
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

      this._isInJourney = true;
      this._entryStation = stationName;
    } else {

      throw new Error('Insufficient balance for a journey.');
    }
  }

  touchOut() {
    this._isInJourney = false;
    this._entryStation = '';
    this.deduct(this._MIN_SINGLE_FARE);
  }

  isInJourney() {
    return this._isInJourney;
  }

  entryStation() {
    return this._entryStation;
  }
}

module.exports = Oystercard;