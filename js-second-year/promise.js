// console.dir(Promise)
const newPromise = new Promise((res, rej) => {
setTimeout(() => {
    if(5 > 3){
    res("5 > 3")
} else {
    rej("Помилка")
}
}, 5000)
})
console.log(newPromise)

newPromise.then((data) => {
 showMessage(data)
}).catch((error) => {
   showMessage(error)
})



function showMessage(message){
    alert(message)
}