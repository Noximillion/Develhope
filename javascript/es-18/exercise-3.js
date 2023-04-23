class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  static fromObject(obj) {
    let person = new Person(obj.firstName, obj.lastName);
    return person;
  }
  /* in questo caso sono io che sto istanziando il valore di person? */

  /* static fromObject(value) {
    return value;
  } */
  /* in questo caso invece sto solo ritornando quello che assegno come argomento alla mia funzione */
}

const obj = {
  firstName: "Mario",
  lastName: "Rossi",
};

const person = Person.fromObject(obj);
console.log(person.firstName + " " + person.lastName);
