// операція ...rest дозволяє зібрати аргументи у масив
const sumNum = (...num) => {
    let sum = 0;
for (let i = 0; i < num.length; i++) {

}
}

sumNum(1, 2, 3, 5, 8, 13)
sumNum(243, 3425, 12, 6765)


//операція ...spread робить з масива не масив (витягує елементи з масиву)
const fruits = ["apple", "banana", "orange"]
console.log(...fruits)
function makeMessage (fruit1, fruit2, fruit3) {
    return `мої улюблені фрукти це ${fruit1}, ${fruit2}, ${fruit3}`
}
console.log(makeMessage(...fruits))

