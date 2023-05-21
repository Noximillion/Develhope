// Write a function that receives two parameters, `a` and `b` and returns the sum of them within an `h2` tag.

import React from 'react';

function sum(a, b) {
    return <h2>the sum of {a} and {b} is {a + b}</h2>
}

class Name extends React.Component {
    render() {
        return sum(10,22)
    }
}