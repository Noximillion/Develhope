function sum(...value) {
  return value.reduce((a,b) => a+b);
}

const numbers = [1, 2, 3,4,5,6];
console.log(sum(...numbers));
console.log(numbers)