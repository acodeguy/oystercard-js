class Station {

    constructor(name = '', zone = 3) {
        this._name = name;
        this._zone = zone;
    }

    name() {
        return this._name;
    }

    zone() {
        return this._zone;
    }
}

module.exports = Station;