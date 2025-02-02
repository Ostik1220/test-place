const buttonElement = document.querySelector("button");
buttonElement.addEventListener("click", () => {
  const page = document.querySelector("body");
  let red = Math.round(Math.random() * (255 - 0) + 0);
  let green = Math.round(Math.random() * (255 - 0) + 0);
  let blue = Math.round(Math.random() * (255 - 0) + 0);
  const randomColor = `rgb(${red}, ${green}, ${blue})`;
  page.style.backgroundColor = randomColor;
});

//робимо так щоб при кліку на кнопку міняєтся кнопка і стиль
const themeElement = document.querySelector(".btn");
themeElement.addEventListener("click", (e) => {
  const randomColor = `rgb(${Math.round(
    Math.random() * (255 - 0) + 0
  )}, ${Math.round(Math.random() * (255 - 0) + 0)}, ${Math.round(
    Math.random() * (255 - 0) + 0
  )})`;
  const anotherColor = `rgb(${Math.round(
    Math.random() * (255 - 0) + 0
  )}, ${Math.round(Math.random() * (255 - 0) + 0)}, ${Math.round(
    Math.random() * (255 - 0) + 0
  )})`;
  themeElement.style.color = randomColor;
  themeElement.style.backgroundColor = anotherColor;
  const titleElement = document.querySelector("h1");
  titleElement.classList.toggle("title");
  console.log(e);
});

//==================================
//Неділля

const formElement = document.querySelector("form");
formElement.addEventListener("submit", (e) => {
  console.log(e.target.elements.name.value);
  e.preventDefault();
  const data = {
    name: e.target.elements.name.value,
    password: e.target.elements.password.value,
    email: e.target.elements.email.value,
  };
  e.target.elements.name.value = "";
  e.target.elements.password.value = "";
  e.target.elements.email.value = "";
  return console.log(data);
});

const textElement = document.querySelector(".text");
const inputElement = document.querySelector("input#test");
const checkboxElement = document.querySelector("input[type=checkbox]");
inputElement.addEventListener("input", (e) => {
  console.log(e.target.value);
  textElement.textContent = e.target.value;
});

checkboxElement.addEventListener("change", checkStatus);
function checkStatus(event) {
  const statusCheckbox = event.target.checked;
  console.log(statusCheckbox);
  if (statusCheckbox === true) {
    event.target.style.boxShadow = "2px 3px 8px 1px";
  } else {
    event.target.style.boxShadow = "none";
  }
}

inputElement.addEventListener("focus", (e) => {
  e.target.style.boxShadow = "10px 1px 7px 7px";
});
inputElement.addEventListener("blur", (e) => {
  e.target.style.boxShadow = "none";
});

//подіїї клавіатури ми завжди ставимо на докуменд або window на відміну від інших подій

// document.addEventListener("keydown", (e) => {
//   console.log(e.key)
//   console.log(e.code, `це e.code`)
// })

//змінення фону бокса по клавішах
const boxElement = document.querySelector("#box");

document.addEventListener("keydown", (e) => {
  if (e.code === "keyO") {
    document.body.style.backgroundColor = "orange";
  } else if (e.code === "Y") {
    document.body.style.backgroundColor = "yellow";
  } else if (e.code === "g") {
    document.body.style.backgroundColor = "green";
  } else if (e.code === "b") {
    document.body.style.backgroundColor = "blue";
  } else {
    document.body.style.backgroundColor = "white";
  }
}); //глючить




//Субота: події миші
 
boxElement.addEventListener("mousemove", (e) => {
  console.log(e.clientX, e.clientY)
})



const redBox = document.querySelector("#event-practic")
let x = 5
let y = 5
document.addEventListener("keydown", (e) => {
  redBox.style.transform = `translate(${x}px, ${y}px)`
  if(e.code === 'ArrowRight'){
x += 5
  } else if (e.code === 'ArrowLeft'){
    x -= 5
  }
   if (e.code === 'ArrowUp'){
    y -= 5
  } else if (e.code === 'ArrowDown'){
    y += 5
  }
})