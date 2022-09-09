// ... spread operator => funciona tanto en objetos como en arrays

const auto = {
    modelo: "celica",
    marca: "toyota",
    año: 1990
}

const modelo2 = auto.modelo

const { modelo } = auto


const auto2 = {
    ...auto,
    cantidadPasajeros: 2
}

console.log(auto)
console.log(auto2)

const arregloNumeros = [1,2,3,4]

const arregloNumeros2 = [...arregloNumeros, 5,6]

console.log(arregloNumeros)
console.log(arregloNumeros2)

