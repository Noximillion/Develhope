function nicknameMap(persons) {
  let nick = ""
  for(let i = 0; i < persons.length; i++){
  nick += (persons[i].name + "-" + persons[i].age + ",");
  }
  return nick;
}


/*
 i = 0. condizione = true. 
 i  = 1. condizione = true.
 i = 2. condizione = true.
 i = 3. condizione = true.
 i = 4. condizione = true.
 i = 5. condizione = true.
 i = 6. condizione = true.
 i = 7. condizione = true.
 i= 8. condizione = true.
 i= 9. condizione = false.
*/

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

const nicknames = nicknameMap(persons);
/* console.log(persons); */
console.log(nicknames.split(",")); 