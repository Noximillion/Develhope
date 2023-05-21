class Person {
  #firstName;
  #lastName;
  #age;
  constructor(firstName,lastName,age) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
  };

  sayAge() {
    return this.#age;
  }

  set firstName(newVal) {
    if(typeof(newVal) == 'string') {
      this.#firstName = newVal;
    } else {
      this.#firstName = 'invalid name'
    }
  };

  get firstName() {
    this.#firstName = firstName
  }

  set lastName(newVal) {
    if(typeof(newVal) == 'string') {
      this.#lastName = newVal;
    } else {
      this.#lastName = 'invalid surname'
    }
  }

  set age(newVal) {
    if(typeof(newVal) == 'number'){
      this.#age = newVal;
    } else {
      this.#age = 'errore'
    }
  }
  get fullName() {
    return this.#firstName + " " + this.#lastName;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName)
console.log(person.sayAge());

person.firstName = 'Maria';
person.lastName = 'Verdi';
person.age = 30;
console.log(person.fullName);
console.log(person.sayAge());