function repeatHello(callback, t) {
    setInterval(() => callback(), t)
}

let printHello = () => {
    console.log("hello")
}

repeatHello(printHello, 1000)