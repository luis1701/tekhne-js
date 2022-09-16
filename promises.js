// Promises => son objetos que tienen 3 estados
// 1. Resuelto => resolve
// 2. Rechazado => reject
// 3. Pendiente => pending

// Ultimas versiones de js entro en concepto de async await

console.log('Pido mis productos')

// setTimeout(() => {
//     console.log('Backend esta recuperando los productos de la base de datos para devolver al frontend')
// }, 5000)

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Backend esta recuperando los productos de la base de datos para devolver al frontend')
//         resolve('respuesta')
//     }, 5000)
// })

function promesa2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Backend esta recuperando los productos de la base de datos para devolver al frontend')
            resolve('respuesta')
        }, 5000)
    })
}

// promesa.then((response) => {
//     console.log(response)
//     console.log('Pintar la pantalla de productos')
// })

async function getBackendResult () {
    const response = await promesa2()
    console.log(response)
}

getBackendResult()

// Backend => Logica Negocio Ej: Calculos, procesamientos...
// Frontend => Pagina Web, App de escritorio, App mobile => Rest apis http (GET, POST, PUT, PATCH, DELETE) => async
// DB => Persistencia informacion
 