// operadores ternarios

function numberIsPair (number) {
    if (number % 2 === 0) {
        console.log('Es par: ', number)
        if (number > 10) {
            console.log('Es mayor a 10: ', number)
        }
    } else {
        console.log('Es impar: ', number)
    }
}

function numberIsPair2 (number) {
    number % 2 === 0 && number > 0
        ? (console.log('Es par: ', number), number > 10 && console.log('Es mayor a 10: ', number))
        : console.log('Es impar: ', number)
}


const number = 10

const texto = 'hola'

"hola" === texto && console.log("Imprimir texto: ", texto)

// if (number === 10) {
//     console.log('number: ', number)
// }


// numberIsPair(12)
numberIsPair2(4)