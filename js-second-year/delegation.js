// const article = document.querySelector(".delegation");
// article.style.background = "brown";
// article.addEventListener("click", (e) => {
//   console.log(e.target, "це target");
//   console.log(e.currentTarget, "це current target");
// });

// const pizzaData = [
//   {
//     title: "4 сири",
//     photo: `https://la.ua/wp-content/uploads/2021/08/kvafrik2.jpg`,
//     description: "",
//     price: "340грн",
//   },
//   {
//     title: "салямі",
//     photo: `https://la.ua/wp-content/uploads/2021/08/salami.jpg`,
//     description: "",
//     price: "290",
//   },
//   {
//     title: "гавайська",
//     photo: `https://la.ua/wp-content/uploads/2021/08/gavajska.jpg`,
//     description: "",
//     price: "310грн",
//   },
//   {
//     title: "папероні",
//     photo: `https://la.ua/wp-content/uploads/2021/08/peperoni.jpg`,
//     description: "",
//     price: "340",
//   },
//   {
//     title: "діабола",
//     photo: `https://la.ua/wp-content/uploads/2021/08/diabola-hot2.jpg`,
//     description: "",
//     price: "305грн",
//   },
//   {
//     title: "маргарита",
//     photo: `https://la.ua/wp-content/uploads/2021/08/margaryta4.jpg`,
//     description: "",
//     price: "200грн",
//   },
// ];

// const pizzaElements = pizzaData.map((pizza) => {
// return `        <li class="item">
//             <h2 class="name">${pizza.title}</h2>
//             <img src="${pizza.photo}" alt="" class="photo">
//             <p class="price">${pizza.price}</p>
//             <button class="pizza-button" type="button">детальніше..</button>
//         </li>`

// })
// console.log(pizzaElements)

// const pizzaDom = pizzaElements.join("")
// console.log(pizzaElements)
// const list = document.querySelector(".list")
// list.innerHTML = pizzaDom


const addTaskBtn = document.querySelector("#addTask");
const newTaskInput = document.querySelector("#newTask");
const taskList = document.querySelector("#taskList");
const form = document.querySelector("form");


form.addEventListener("submit", function(e) {
  e.preventDefault();
  
  const taskText = newTaskInput.value.trim();
  
  if (taskText !== '') {
    const li = document.createElement("li");
    li.classList.add("task");
    
    li.innerHTML = `
      <input type="checkbox" class="task-checkbox">
      <p class="text">${taskText}</p>
      <button class="delete-btn">Delete</button>
    `;
    
    taskList.appendChild(li);
    newTaskInput.value = '';
  }
});

taskList.addEventListener("click", function(e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  }
});

taskList.addEventListener("change", function(e) {
  if (e.target.classList.contains("task-checkbox")) {
    const taskText = e.target.nextElementSibling;
    
    if (e.target.checked) {
      taskText.style.textDecoration = "line-through";
    } else {
      taskText.style.textDecoration = "none";
    }
  }
});

