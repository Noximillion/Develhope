function repeatHello(callback, t) {
    let banana = setInterval(() => callback(), t)
    setTimeout(() => clearInterval(banana), 5000)

}

let printHello = () => {
    console.log("hello")
}

repeatHello(printHello, 1000)