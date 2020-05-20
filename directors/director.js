//Esse arquivo representa o Director do Builder Pattern

function Director(builder) {
    this.construct = (builder) => {
        builder.stepOne()
        builder.stepTwo()
        return builder.get()
    }
}

module.exports = { Director }