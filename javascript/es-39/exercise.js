const isLogged = true;


function checkLogId(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(callback === true){
            resolve(Math.random())
            } else {
            reject(new Error(`the user is not logged in`))
            }
        },1000)
    })
}


function printObj(val) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(val > 0.5) {
            resolve({name: "John", age: 24})
            } else {
            reject(new Error(`the user doesn't exist`))
            }
        }, 1500)
        
    })
}


checkLogId(isLogged)
    .then(printObj)
    .then(console.log)
.catch((err) => console.error(err))
.finally(() => console.log(`check complete`))