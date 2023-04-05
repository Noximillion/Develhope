const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

/* ------------- */

/* const person2 = {...person1}; */


/* let person2={};
Object.assign(person2,person1); */


/* ------------- */

person2.firstName="Simon";

/* il motivo per cui non si può cambiare il valore di firstName solo nell'oggetto person2 è perché gli oggetti non hanno un valore assegnatoli, ma fanno riferimento ad una posizione di quei valori. In questo caso abbiamo creato una seconda via per arrivare allo stesso punto, cambiando quindi firstName, lo stiamo andando a cambiare alla fonte da cui viene preso. Per poter cambiare il nome senza cambiare il valore a cui fa riferimento person1 bisogna clonare person1 e poi cambiare il valore di firstName. Sopra alcuni metodi per farlo.*/


// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);
 