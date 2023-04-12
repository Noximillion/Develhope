const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

let keys = Object.keys(person);


/* console.log(person["firstName"]);
console.log(person[keys[0]])
*/


keys.forEach((el) => {
  console.log(el + "-" + person[el]) /* person.firstName =  */
})

/* for (i = 0; i < person.length; i ++) {
  console.log(person[i])
} */

// Print values of person using Object.keys