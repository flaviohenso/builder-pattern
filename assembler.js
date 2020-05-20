const { Director } = require('./directors/director')
const { CarBuilder, TruckBuilder } = require('./builders/builder')

const director = new Director()

const car = () => {
    const carbuilder = new CarBuilder()
    return director.construct(carbuilder)
}

const truck = () => {
    const truckbuilder = new TruckBuilder()
    return director.construct(truckbuilder)
}

console.log(car())
console.log(truck())