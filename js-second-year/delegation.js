const article = document.querySelector(".delegation");
article.style.background = "purple";
article.addEventListener("click", (e) => {
  console.log(e.target, "це target");
  console.log(e.currentTarget, "це current target");
});

const pizzaData = [
  {
    title: "4 сири",
    photo: `https://la.ua/wp-content/uploads/2021/08/kvafrik2.jpg`,
    description: "",
    price: "340грн",
  },
  {
    title: "салямі",
    photo: `https://la.ua/wp-content/uploads/2021/08/salami.jpg`,
    description: "",
    price: "290",
  },
  {
    title: "гавайська",
    photo: `https://la.ua/wp-content/uploads/2021/08/gavajska.jpg`,
    description: "",
    price: "310грн",
  },
  {
    title: "папероні",
    photo: `https://la.ua/wp-content/uploads/2021/08/peperoni.jpg`,
    description: "",
    price: "340",
  },
  {
    title: "діабола",
    photo: `https://la.ua/wp-content/uploads/2021/08/diabola-hot2.jpg`,
    description: "",
    price: "305грн",
  },
  {
    title: "маргарита",
    photo: `https://la.ua/wp-content/uploads/2021/08/margaryta4.jpg`,
    description: "",
    price: "200грн",
  },
];

const pizzaElements = pizzaData.map((pizza) => {
return `        <li class="item">
            <h2 class="name">${pizza.title}</h2>
            <img src="${pizza.photo}" alt="" class="photo">
            <p class="price">${pizza.price}</p>
        </li>`
})
console.log(pizzaElements)

const pizzaDom = pizzaElements.join("")
console.log(pizzaElements)
const list = document.querySelector(".list")
list.innerHTML = pizzaDom
