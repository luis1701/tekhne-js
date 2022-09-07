console.log('hola mundo')

// tipos de datos
// string
// number
// boolean
// Array
// Object
// null
// undefined

function test() {


}

// Definir con var es cuando queremos que la variable sea global
var texto = 'hola';


// ecmascript 6, ambos keywords repetan el scope donde son declarados
const texto1 = 'hola';
let texto2 = 'hola'

// numbers
var numero = 10
const numero1 = 10
let numero2 = 10

// boolean
var booleano = true
const booleano1 = true
let booleano2 = true

// Array
var lista = [1,2,3,4,true,{name: 'luis'}]

// Objects
const objecto = {
    name: "luis",
    apellido: "Delgado"
}

console.log(texto, typeof texto)
console.log(texto1, typeof texto1)
console.log(texto2, typeof texto2)
console.log(numero, typeof numero)
console.log(numero1, typeof numero1)
console.log(numero2, typeof numero2)
console.log(booleano, typeof booleano)
console.log(booleano1, typeof booleano1)
console.log(booleano2, typeof booleano2)
console.log(lista, typeof lista)
console.log(objecto.apellido)
console.log(objecto.name)

// Operadores

// Suma
const suma = 2 + 4
const sumaCadenas = "2" + "4"
const sumaNumberCadena = 2 + "4"

console.log("sumaNumberCadena: ", sumaNumberCadena)

// Operadores matematicos
// multiplicacion
// division
// resta
// mod => %

// Equal => = (asignar valor a una variable)

// Comparador
// == | === son distintos, el segundo ademas hace una verificacion del tipo

if (2 === '2') {
    console.log('los valores son iguales')
} else {
    console.log('los valores no son iguales')
}

if (2 !== '2') {
    console.log('son distintos')
} else {
    console.log('no son distintos')
}

const esMartes = true

console.log('imprimiendo si es martes: ', esMartes)
console.log('imprimiendo si es martes: ', !esMartes)

// Funcion normal JS
function funcSuma(num1, num2) {
    return num1 + num2
}

function funcSuma1(num1, num2) {
    console.log(num1 + num2)
}

// Arrow functions js
const funcSuma2 = (num1, num2) => {
    console.log(num1 + num2)
}

const resultado = funcSuma(3, 5)

console.log("Resultado: ", resultado)

funcSuma1(1, 1)
funcSuma2(1, 1)