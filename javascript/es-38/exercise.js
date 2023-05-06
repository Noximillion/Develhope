const isLogged = true;


function checkLogId(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
         if(callback === true){
            resolve(Math.random())
        } else {
            reject(new Error(`oopsie`))
        }
    },1000)
})}


function printObj(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if(callback > 0.5) {
            resolve({name: "John", age: 24})
        } else {
            reject(new Error(`oppsie daisy`))
        }}, 1500)
        
})}


checkLogId(isLogged)
    .then(printObj)
    .then(console.log)
.catch((err) => console.error(err))