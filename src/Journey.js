class Journey {

    constructor(entry) {

        this._entry = entry;
        this._exit = undefined;
    }

    details() {
        return {
            entry: this._entry,
            exit: this._exit
        }
    }

    end(atStation) {
        this._exit = atStation;
    }

    fare() {
        if(this._entry === undefined || this._exit === undefined) {
            return 6;
        } else {
            return 1;
        }
    }
}

module.exports = Journey;