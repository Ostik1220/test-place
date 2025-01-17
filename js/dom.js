// //метод querySelector шукає 1 елемент якщо нічого не знайшов товидає null
// const boxElement = document.querySelector(`.box a[href="https//:facebook"]`)
// console.log(boxElement)

// // querySelectorAll шукає всі елементи і видає масив елементів
// const itemList = document.querySelectorAll("li")
// console.log(itemList)
// itemList.forEach((item) => {
//     // item.style.border = "1px solid red"
// });
// const listElement = document.querySelector("ul")
// console.log(listElement)
// const secondElement = listElement.querySelector("li:nth-child(2)")
// console.log(secondElement)

// const secondText = secondElement.textContent
// secondElement.textContent = "це 2 елемент списку"
// const secondElemPerent = secondElement.parentElement
// console.log(secondElemPerent)

// const prevSiblElement = secondElement.previousElementSibling
// console.log(prevSiblElement)

// const lastChild = listElement.lastElementChild
// console.log(lastChild)

// //додавання стилів через js

// listElement.style.backgroundColor = "cyan"
// listElement.style.boxShadow = "1px 12px 7px 6px darkblue"

// secondElement.classList.add("test")
// // mhetod "add" add class to element
// // mhetod "contains" check if there already class on element
// const hasClass = secondElement.nextElementSibling.classList.contains("test")
// console.log(hasClass);
// console.log(secondElement.classList.contains("test"))
// //mhetod "replace" replace class to another one
// secondElement.classList.replace("test", "second-hand")
// secondElement.classList.add("test")
// secondElement.classList.remove("test")

// =======================================================
// Практика


// const box = document.querySelector(".site-nav")
// box.style.backgroundColor = "yellow"
// const firstLink = document.querySelector("a")
// firstLink.classList.add("site-nav__link")
// const linkStyle = document.querySelector(`a[href="https://"]`)
// linkStyle.style.fontSize = "50px"
// -----------------

// Зробіть всі зовнішні посилання помаранчевими, змінюючи властивість style.
// Оберіть всі посилання всередині списку та додайте першому і останньому клас зі стилями
// Додайте заголовок до тексту та стилізуйте його за допомогою додаткового класу.
// Замініть клас на заголовку.
// Перевірте чи містить посилання клас list


const linkAttribute = document.querySelectorAll(`a[href^="http:"]`)
console.log(linkAttribute)
linkAttribute.forEach((item) => {
    item.style.color = "orange"
})

const parent = document.querySelector("ul")
const firstChild = parent.firstElementChild
firstChild.classList.add("link")
const lastChild = parent.lastElementChild
lastChild.classList.add("link")


