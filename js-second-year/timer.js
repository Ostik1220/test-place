// // const a = 5
// // console.log(a)
// // const b = "string"
// // console.log(b)
// // const c = true
// // console.log(c)
// // setTimeout(() => {
// //     console.log("test 1")
// // }, 5000)
// // console.log("I love js")
// // setTimeout(() => {
// //     console.log("I like html")
// // }, 1000)
// // console.log("i really like js, css and html. also IT in general")

// // setInterval(() => {
// //     console.log("test 2")
// // }, 3000)



// let time = 0;
// const interval = setInterval(() => {
//   time++;
//   console.log(time);
//   if (time === 10) {
//     clearInterval(interval);
//   }
// }, 1000);

// console.log(interval);

// // document.querySelector("#timer__button").addEventListener("click", () => {
// //     clearInterval(interval)
// // })











// ========================================================
//Неділя


const inputTimer = document.querySelector("#timer")
document.querySelector(".timer__form").addEventListener("submit", (e) => {
  e.preventDefault()
  let reverseTimer = inputTimer.value;
console.log(inputTimer.value)
  const resetInterval = setInterval(() => {
    reverseTimer = reverseTimer - 1;
    document.querySelector(".timer__timer").innerHTML = reverseTimer
  if(reverseTimer === 0){
    clearInterval(resetInterval)
  }
  }, 1000)
})

// ----------------
let timerSecond = 0;
let timerMinut = 0;
let timerHour = 0;
const secondTimer = setInterval(() => {
  timerSecond = timerSecond + 1
  document.querySelector(".timer__second").innerHTML = timerSecond
  if(timerSecond === 60){
    timerSecond = 0
  }
  if(timerSecond === 5){
    document.querySelector("body").style.backgroundColor = "red"
  }
  }, 1000);
const minutTimer = setInterval(() => {
  timerMinut = timerMinut + 1
  document.querySelector(".timer__minut").innerHTML = timerMinut
  if(timerMinut === 60){
    timerMinut = 0
  }
  }, 60000
);
const hourTimer = setInterval(() => {
  timerHour = timerHour + 1
  document.querySelector(".timer__hour").innerHTML = timerHour
  if(timerHour === 60){
    timerHour = 0
  }
  }, 3600000
)