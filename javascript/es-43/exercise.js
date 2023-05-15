const user = {
  id: 1,
  name: "John",
  age: 25,
};

// function setUserInLocalStorage(arg) {
//   for(const key in arg){
//     localStorage.setItem(key, arg[key])
//   }
// }

// setUserInLocalStorage(user)


function setThisArgLocalStorage(arg){
  localStorage.setItem("user", JSON.stringify(arg))
}

setThisArgLocalStorage(user)