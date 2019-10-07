const assert = require('assert');

const Journey = require('../src/Journey');

describe('Journey', function() {

    it('records the entry station', function() {
        
        const journey = new Journey('Archway');

        const expectedJourney = {
            entry: 'Archway',
            exit: undefined
        }

        assert.deepStrictEqual(journey.details(), expectedJourney);
        
    });

    it('#end records the exit station', function() {
        
        const journey = new Journey('Archway');

        journey.end('Morden');

        const expectedJourney = {
            entry: 'Archway',
            exit: 'Morden'
        }
        assert.deepStrictEqual(journey.details(), expectedJourney);
        
    });
});