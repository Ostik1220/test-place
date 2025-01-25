const buttonElement = document.querySelector("button")
buttonElement.addEventListener("click", () => {
  const page = document.querySelector("body")
  let red = Math.round(Math.random() * (255 - 0) + 0)
  let green = Math.round(Math.random() * (255 - 0) + 0)
  let blue = Math.round(Math.random() * (255 - 0) + 0) 
  const randomColor = `rgb(${red}, ${green}, ${blue})`
  page.style.backgroundColor = randomColor
})

//робимо так щоб при кліку на кнопку міняєтся кнопка і стиль
const themeElement = document.querySelector(".btn")
themeElement.addEventListener("click", () => {
    const randomColor = `rgb(${Math.round(Math.random() * (255 - 0) + 0) }, ${Math.round(Math.random() * (255 - 0) + 0) }, ${Math.round(Math.random() * (255 - 0) + 0) })`
    const anotherColor = `rgb(${Math.round(Math.random() * (255 - 0) + 0) }, ${Math.round(Math.random() * (255 - 0) + 0) }, ${Math.round(Math.random() * (255 - 0) + 0) })`
    themeElement.style.color = randomColor
    themeElement.style.backgroundColor = anotherColor
    const titleElement = document.querySelector("h1")
    titleElement.classList.toggle("title")
})