class Rectangle{
    constructor(width,height){
        this.width = width
        this.height = height
    }
    calculatePerimeter(){
        return 2*(this.width+this.height)
    }
    calculateArea(){
        return this.width*this.height
    }
}

class Square extends Rectangle{
    constructor(side){
        super(side,side)
    }
}


const rectangle = new Rectangle(2,3)

const perimeter = rectangle.calculatePerimeter()
console.log('perimeter',perimeter)
const area = rectangle.calculateArea()
console.log('area',area)

const square = new Square(3)
const squarePerimeter = square.calculatePerimeter()
console.log('squarePerimeter',squarePerimeter)
const squareArea = square.calculateArea()
console.log('squareArea',squareArea)