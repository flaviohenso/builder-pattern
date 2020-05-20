const { Car, Truck } = require('../models/models')

function CarBuilder () {
    this.car = null

    this.stepOne = () => {
        this.car = new Car()
    }

    this.stepTwo = () => {
        this.car.addParts();
    }

    this.get = () => this.car
}

function TruckBuilder () {
    this.truck = null

    this.stepOne = () => {
        this.truck = new Truck()
    }

    this.stepTwo = () => { 
        this.truck.addParts() 
    }

    this.get = () => this.truck
}

module.exports = { CarBuilder,TruckBuilder}