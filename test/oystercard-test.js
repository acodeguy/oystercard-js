var assert = require('assert');

var Oystercard = require('../src/Oystercard');

describe('Oystercard', function() {
  describe('#balance', function() {
    it('shows the current balance on the card', function() {
      var oystercard = new Oystercard();
      assert.strictEqual(oystercard.balance(), 0);
    });
  });
});