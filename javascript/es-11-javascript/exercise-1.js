function adultFilter(persons) {
  let adultage = persons.filter((person) => person.age > 17)
  return adultage;
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

/* let adult = persons.filter((persons) => persons.age > 17);
console.log(adult) */

const adults = adultFilter(persons);
console.log(persons);
console.log(adults);