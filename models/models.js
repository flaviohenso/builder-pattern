function Car() {
    this.doors = 0

    this.addParts = function () {
        this.doors = 4
    }

}

function Truck() {
    this.doors = 0

    this.addParts = function () {
        this.doors = 2
    }

}

module.exports = { Car, Truck }