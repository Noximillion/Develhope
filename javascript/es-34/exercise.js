
function printAsyncName(callback, name) {
    function changeArg(callback, name) {
        setTimeout(()=> (callback = console.log(name)),1500)
    }
    pippo = setInterval(() => changeArg(callback, name),1000)
    setTimeout(() => clearInterval(pippo),2000)
    /* ----------------------------------------------------------- */
    // setTimeout(() => pippo = setInterval(()=> callback, 1000),1000)
    // setTimeout(() => console.log(name),2000)
    // setTimeout(() => clearInterval(pippo),3000)
    /* ----------------------------------------------------------- */
    // setTimeout(()=> callback, 1000);
    // setTimeout(()=> console.log(name),2000)
}

function callback() {
    return console.log('hello')
}

printAsyncName(callback(),"pablo")

