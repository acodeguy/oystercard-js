const assert = require('assert');

const Station = require('../src/Station');

describe('Station', () => {

    it('has a name and a zone', () => {

        const station = new Station('Walthamstow Central', 3);

        assert.equal(station.name(), 'Walthamstow Central');
        assert.equal(station.zone(), 3);
    });
});