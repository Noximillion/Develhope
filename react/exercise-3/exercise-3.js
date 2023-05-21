import React from 'react';

function recieveName(name) {
    return <h1>Hello,{name}</h1>
}

class Name extends React.Component {
    render() {
        return recieveName('andre')
    }
}

// What happens if the `name` variable is not passed to the function?


// Se la variabile 'nome' non viene passata come argomento della funzione, essa non lo prenderà come oggetto da inserire in h1
