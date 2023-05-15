const user = {
  id: 1,
  name: "John",
  age: 25,
};


function setThisArgLocalStorage(arg){
  localStorage.setItem("user", JSON.stringify(arg))
}

setThisArgLocalStorage(user)


function getObjFromLocalStorage(arg) {
  return console.log(JSON.parse(localStorage.getItem(arg)))
}

getObjFromLocalStorage("user")


