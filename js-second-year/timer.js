// const a = 5
// console.log(a)
// const b = "string"
// console.log(b)
// const c = true
// console.log(c)
// setTimeout(() => {
//     console.log("test 1")
// }, 5000)
// console.log("I love js")
// setTimeout(() => {
//     console.log("I like html")
// }, 1000)
// console.log("i really like js, css and html. also IT in general")

// setInterval(() => {
//     console.log("test 2")
// }, 3000)



let time = 0;
const interval = setInterval(() => {
  time++;
  console.log(time);
  if (time === 10) {
    clearInterval(interval);
  }
}, 1000);

console.log(interval);

// document.querySelector("#timer__button").addEventListener("click", () => {
//     clearInterval(interval)
// })
