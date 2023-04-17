class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(val) {
    if(val instanceof Square){
      /* se il valore inserito nella funzione calculate è un'istanza figlio di ... allora fai questo */
      return val.side * val.side;
    } else if (val instanceof Rectangle) {
      /* se il valore inserito nella funzione calculate è un'istanza figlio di ... allora fai questo */
      return val.width * val.height;
    } else if (val instanceof Circle) {
      /* se il valore inserito nella funzione calculate è un'istanza figlio di ... allora fai questo */
      return val.radius * val.radius * 3.14;
    } else {
      return 'invalid input'
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
/* expected output side * side = 16 */
console.log(AreaCalculator.calculate(rectangle));
/* expected output width * height = 8 */
console.log(AreaCalculator.calculate(circle)); 
/* expected output radius * radius * Pi =  78,5 */