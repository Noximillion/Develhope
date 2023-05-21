import React from 'react';

function recieveName(name) {
    return <h1>Hello,{name}</h1>
}

class Name extends React.Component {
    render() {
        return recieveName('andre')
    }
}