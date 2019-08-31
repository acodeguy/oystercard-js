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

    it('does not allow the balance to increase over the maximum allowed', function() {
      var oystercard = new Oystercard();
      assert.throws(
        function() { oystercard.topup(101) },
        Error,
        'Topup failed; would bring balance over maximum amount allowed.'
      );
      assert.strictEqual(oystercard.balance(), 0);
    });
  });

  describe('#deduct', function() {
    it('deducts the amount from the balance of the card', function() {
      var oystercard = new Oystercard();
      oystercard.deduct(1.50);
      assert.strictEqual(oystercard.balance(), -1.50);
    });
  });

  describe('#touchIn', function() {
    it('sets the inJourney flag to true', function() {
      var oystercard = new Oystercard();
      assert.strictEqual(oystercard.isInJourney(), false);
      oystercard.topup(2);
      oystercard.touchIn();
      assert.strictEqual(oystercard.isInJourney(), true);
    });

    it('throws an error if the balance is lower than the cost of a single journey', function() {
      var oystercard = new Oystercard();
      assert.throws(
        function() { oystercard.touchIn() },
        Error,
        'Insufficient balance for a journey.'
      );
    });
  })
  
  describe('#touchOut', function() {
    it('sets the inJourney flag to false', function() {
      var oystercard = new Oystercard();
      assert.strictEqual(oystercard.isInJourney(), false);
      oystercard.topup(2);
      oystercard.touchIn();
      assert.strictEqual(oystercard.isInJourney(), true);
      oystercard.touchOut();
      assert.strictEqual(oystercard.isInJourney(), false);
    });

    it('deducts the minimum fare', function() {
      var oystercard = new Oystercard();
      oystercard.touchOut();
      assert.strictEqual(oystercard.balance(), -1);
    });
  })

});