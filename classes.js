class Rectangulo {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    getWidth() {
        return this.width
    }

    getHeight() {
        return this.height
    }

    calcArea() {
        return this.width * this.height
    }

    setWidth(width) {
        this.width = width
    }

}


class Rectangulo2 extends Rectangulo {
    printArea() {
        console.log(this.width * this.height)
    }
}





const rectangulo = new Rectangulo(2, 3)

console.log(rectangulo.getHeight(), rectangulo.getWidth())

console.log(rectangulo.height, rectangulo.width)

console.log(rectangulo.calcArea())

rectangulo.setWidth(5)

console.log(rectangulo.getWidth())

console.log(rectangulo.calcArea())

console.log(typeof rectangulo)


const rectangulo2 = new Rectangulo2(4, 6)

rectangulo2.printArea()
console.log(rectangulo2.calcArea())