const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(typeof numbers)

const archiveNum = JSON.stringify(numbers)
console.log(typeof archiveNum)
console.log(archiveNum)

localStorage.setItem("nums", archiveNum)
const dataFromLocalStorage = localStorage.getItem("nums")
console.log(dataFromLocalStorage)
const parsedNumbers = JSON.parse(dataFromLocalStorage)
console.log(parsedNumbers)

const user = {
    login: "user@gmail.com",
    password: "Sigma369"
}

const archiveUser = JSON.stringify(user)
console.log(archiveUser)
localStorage.setItem("infoUser", archiveUser)
// localStorage.removeItem("infoUser")
localStorage.clear()

//-----------------------------
const getNameValue = document.querySelector("#localstorage__form").addEventListener("submit", (e) => {
e.preventDefault()
  const usesrName = e.target.elements.username.value
  const usesrPassword = e.target.elements.userpassword.value
  const usesrEmail = e.target.elements.useremail.value
  if(usesrName === "" || usesrPassword === "" || usesrEmail === ""){
alert("Не залишайте рядок порожні")
  } else {
 const newUser = {
    name: usesrName,
    password: usesrPassword,
    email: usesrEmail
 }

 const archiveNewUser = JSON.stringify(newUser)
 localStorage.setItem("newUser", archiveNewUser)
 e.target.elements.useremail.value = ""
 e.target.elements.username.value = ""
 e.target.elements.userpassword.value = ""
alert("Дякуємо")
  }
})
 