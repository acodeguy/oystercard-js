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

    describe('#fare', function() {

        it('deducts the penalty fare if a touch-in/out is missing', function() {

            const journey = new Journey('Archway');

            journey.end();

            assert.equal(journey.fare(), 6);
        });

        it('deducts the minimum fare if a journal is complete', function() {

            const journey = new Journey('Victoria');

            journey.end('Vauxhall');

            assert.equal(journey.fare(), 1);
        });
    });
});