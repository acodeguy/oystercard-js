class Oystercard {

  constructor() {
    this._MAX_BALANCE = 100;
    this._balance = 0;
  }

  balance() {
    return this._balance;
  }

  topup(amount) {

    let newBalance = this._balance + amount;

    if (newBalance <= this._MAX_BALANCE) {

      this._balance += amount;

    } else {

      throw new Error('Topup failed; would bring balance over maximum amount allowed.');

    }
    
  }

  deduct(amount) {

    this._balance -= amount;
    
  }
}

module.exports = Oystercard;