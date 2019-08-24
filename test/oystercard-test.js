var assert = require('assert');

var Oystercard = require('../src/Oystercard');

describe('Oystercard', function() {
  describe('#balance', function() {
    it('shows the current balance on the card', function() {
      var oystercard = new Oystercard();
      assert.strictEqual(oystercard.balance(), 0);
    });
  });

  describe('#topup', function() {
    it('increases the blanace of the card by the amount topped-up', function() {
      var oystercard = new Oystercard();
      oystercard.topup(10)
      assert.strictEqual(oystercard.balance(), 10);
    });
  });
});