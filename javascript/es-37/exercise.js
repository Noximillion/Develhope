const number = 15;


let promise = new Promise((resolve, reject) => {
    if(number > 10){
        resolve(number)
    } else {
        reject(number)
    }
})


promise
    .then((val) => console.log(val))
.catch((err) => console.error(err))

