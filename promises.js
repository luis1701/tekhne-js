// Promises => son objetos que tienen 3 estados
// 1. Resuelto => resolve
// 2. Rechazado => reject
// 3. Pendiente => pending

// Ultimas versiones de js entro en concepto de async await

const getProducts = async () => {
    let products = []
    await setTimeout(() => {
        console.log('productos antes: ', products)
        products = ['Papas fritas', 'Gaseosas', 'Jugos']
        console.log('productos despues: ', products)
    }, 3000);
    console.log('productos: ', products)
    return products
}

const getProducts1 = () => {
    let products = []
    products = ['Papas fritas', 'Gaseosas', 'Jugos']
    return products
}

// Promesas comunmente
const getProducts2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(['Papas fritas', 'Gaseosas', 'Jugos', 'Galletas'])
        // reject('error')
    }, 3000)
});

getProducts2
    .then((result) => {
        console.log("llamada a la funcion  usando promesas", result)
    })
    .catch((error) => {
        console.log(error)
    })


// const listProducts = await getProducts()
// console.log("llamada a la funcion sin usar promesas", listProducts)


// getProducts()
//     .then((result) => console.log(result))
//     .catch(error => console.log(error))

