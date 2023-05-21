import React from 'react';

function recieveName(name) {
    return <h1>Hello,{name}</h1>
}

class Name extends React.Component {
    render() {
        return recieveName(<span>Andre</span>)
    }
}



// What happens if the `name` variable contains a JSX expression instead of a string?

// tutto il contenuto verrà portato nella variabile name e diventerà l'argomento della funzione 