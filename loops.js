// Array => listas

const lista = [1, "a", true, { name: "luis" }, null, undefined]
            // 0   1     2          3            4       5

// function printList(list) {
//     console.log("Tamaño de la lista: ", list.length)
//     for (let index = 0; index < list.length; index++) {
//         const element = list[index];
//         // list[2]
//         console.log("Elemento: ", element)
//     }
// }

// function printList1(list, callback) {
//     let index = 0;
//     while (index < list.length) {
//         const element = list[index];
//         callback(element)
//         index++
//     }
// }

function filterEvenNumbers (list) {
    // el callback en un filter debe retornar un booleano
    // el filter de una lista retorna otra nueva lista
    const listOfEvenNumbers = list.filter(checkEven)
    console.log(listOfEvenNumbers)
}

function checkEven (elemento, indice) {
    console.log(indice)
    if (elemento % 2 === 0) {
        return true
    }
    return false
}

function filterPrimeNumbers (list) {
    const listOfPrimeNumbers = list.filter(checkPrime)
    console.log(listOfPrimeNumbers)
}

function checkPrime (elemento, indice) {
    let isPrime = true
    if (elemento === 1) {
        return isPrime
    }
    for (let index = 2; index < elemento; index++) {
        if (elemento % index === 0) {
            isPrime = false
            break
        }        
    }
    return isPrime
}

// filterPrimeNumbers([1,2,3,4,5,6,7,8,9,13,27,37,47,79])


// print => usando el valor de print
// print() => estas llamando a la function print


// callback => es una funcion que se manda como parametro a otra funcion

function print(item, i) {
    console.log("elemento: ", item, " indice: ", i)
}

// function recibe una lista como parametro
function printList2(list) {
    // el callback puede hacer cualquier cosa
    // forEach no retorna nada
    list.forEach(print);
}

// map => devolverte una nueva lista que tiene el mismo tamaño de la lista itera

function convertList (list) {
    console.log(list)
    const newList = list.map(convertNumberToString)
    console.log(newList)
}

function convertNumberToString (elemento, indice) {
    // return {value: elemento.toString(), indice: indice}
    if (elemento % 2 === 0) {
        return true
    }
    return {value: elemento.toString(), indice: indice}
}

const obj = {
    name: "Luis"
}

// reduce => 

function reduceExample(lista) {
    const result = lista.reduce(callbackExampleReduce, 0)
    console.log(result)
}

function callbackExampleReduce(accumulator, elemento, indice) {
    return accumulator + elemento.total
}

function addDiscountPercentageOnList(lista) {
    const newList = lista.map(addDiscountPercentage)
    console.log(newList)
}

function addDiscountPercentage(element) {
    const discountPercentage = element.discount * 100 / element.price
    return {
        ...element, discountPercentage: discountPercentage
    }
}

// destructuring
const auto = {
    marca: "toyota",
    modelo: "celica",
    año: "1990",
    placa: "ASDF1234"
}

const { marca, modelo } = auto


console.log(marca, modelo)

console.log(auto.marca)




const listaProductos = [
    {
        name: "Coca Cola",
        price: 10,
        discount: 2,
        total: 8
    },
    {
        name: "Papas fritas",
        price: 9,
        discount: 2,
        total: 7
    },
    {
        name: "Dulces",
        price: 6,
        discount: 2,
        total: 4
    },
    {
        name: "Pipocas",
        price: 4,
        discount: 2,
        total: 2
    }
]

addDiscountPercentageOnList(listaProductos)


// input => [1, 2, 3, 4]
// output => 10


function printArrayWithFuncInline (lista) {
    lista.forEach(function (elemento, indice) {
        console.log(elemento, indice)
    })
}

function printSumResultWithFuncInline (lista) {
    const result = lista.reduce(function (acc, elemento, indice) {
        return acc + elemento
    }, 0)
    console.log(result)
}

printSumResultWithFuncInline([1,2,3,4,5])




