const objetoAuto = {
    color: "verde",
    brand: "toyota",
    model: "celica",
    year: 1991,
    isNew: false,
    details: {
        owner: "Oscar",
        engine: 2000
    },
    isClassic: function (year) {
        if (year - this.year > 50) {
            return true
        }
        return false
    },
    getYear: function () {
        return this.year
    }
}


function suma (num1, num2) {
    return num1 + num2
}

const suma2 = (num1, num2) => num1 + num2

// console.log(suma(2,4))

// console.log(suma2(2,4))


const objetoAuto2 = {
    color: "verde",
    brand: "toyota",
    model: "celica",
    year: 1991,
    isNew: false
}

// console.log(objetoAuto.details.owner)

// console.log(objetoAuto2.details?.owner || 'El objeto no tiene informacion del dueño')

const listaAutos = [
    {
        color: "verde",
        brand: "toyota",
        model: "celica",
        year: 1991,
        isNew: false,
        details: {
            owner: "Oscar",
            engine: 2000
        },
        isClassic: function (year) {
            if (year - this.year > 50) {
                return true
            }
            return false
        },
        getYear: function () {
            return this.year
        }
    },
    {
        color: "azul",
        brand: "changan",
        // model: "cs55",
        year: 2022,
        isNew: true,
        details: {
            owner: "Pedro",
            engine: 100
        },
        isClassic: function (year) {
            if (year - this.year > 50) {
                return true
            }
            return false
        },
        getYear: function () {
            return this.year
        }
    },
    {
        color: "amarillo",
        brand: "chevrolet",
        model: "camaro",
        year: 2022,
        isNew: false,
        details: {
            owner: "Sebastian",
            engine: 3000
        },
        isClassic: function (year) {
            if (year - this.year > 50) {
                return true
            }
            return false
        },
        getYear: function () {
            return this.year
        }
    }
]

const listaParaMostrar = listaAutos.map((element, index) => {
    return {
        brand: element.brand,
        model: element.model || 'sin modelo',
        owner: element.details.owner
    }
})

const listaParaMostrar2 = listaAutos.reduce((accumulator, element, index) => {
    return [...accumulator, {
        brand: element.brand,
        model: element.model || 'sin modelo',
        owner: element.details.owner
    }]
}, [])

console.log(listaParaMostrar)

console.log(listaParaMostrar2)