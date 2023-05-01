class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  toJson() {
    return JSON.stringify(this);
  }

  static fromJson(arg) {
    let person = {};
    let pippo = JSON.parse(arg)
    person = new Person(pippo.id, pippo.firstName, pippo.lastName, pippo.age)
    return person
  }
}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
console.log(developer);