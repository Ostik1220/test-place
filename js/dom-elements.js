//Метод creatElement дозволяє створити дом вузл в памяті і ще не додає його на сторінку в дом дерево

//Створимо статтю в якій буде заголовок картинка та опис
const articleEllement = document.createElement("article")
console.log(articleEllement)
const titleElement = document.createElement("h1")
titleElement.textContent = "Мої улюблині млинці - рецепт"
console.log(titleElement)

const pictureElement = document.createElement("img")
pictureElement.alt = "млинець з шоколадом"
pictureElement.src = "https://assets.dots.live/misteram-public/abf2e2f919a614ac107fa3e62bfcb06f-826x0.png"

const recepieElement = document.createElement("p")
recepieElement.textContent = `В посудину вбийте яйця, додайте до них цукор та какао. Гарно перемішайте до однорідного стану міксером, вінчиком або виделкою. Кількість цукру можна регулювати на свій смак.
Просійте борошно через сито і поступово додайте його в ємність із яєчно-шоколадною сумішшю, регулярно її помішуючи. Має вийти досить густе тісто без грудочок.
До тіста додайте воду кімнатної температури, добре перемішайте до однорідного стану. За густиною тісто має бути як зазвичай на млинці – як рідка сметана.
Рослинну олію додавати до тіста не потрібно. Вона необхідна лише для змазування сковорідки. 
Смажте млинці з двох сторін на добре розігрітій чавунній сковорідці або на спеціальній для млинців. Сковороду періодично змазуйте олією.`


const linkElement = document.createElement("a")
linkElement.href = "https://millennium-trade.com/kak-prazdnovat-maslenicu-10-unikalnih-receptov-blinov-s-shokoladom-dlja-shokoladomanov"
linkElement.textContent = "посилання наибільше рецептів тут🥞"
// для того щоб вкласти елемент в елемент або на сторінку використовуємо метод apend
articleEllement.append(titleElement, pictureElement, recepieElement)
articleEllement.prepend(linkElement)
recepieElement.before(linkElement)
console.log(articleEllement)



articleEllement.width = "300px"
articleEllement.style.backgroundColor = "yellow"
articleEllement.style.color = "brown"

//додамо статтю з усім що в ній є на сторінку
const boxElement = document.querySelector(".box")
boxElement.append(articleEllement)
console.log(boxElement)


const linkElem  = document.createElement("a")
linkElem.textContent = "Посилання на урок"
linkElem.setAttribute("src", "https://meet.google.com/wzz-zxys-ige")
console.log(linkElem)
const check = linkElem.hasAttribute("src")
console.log(check)
linkElem.removeAttribute("src")
linkElem.setAttribute("href", "https://meet.google.com/wzz-zxys-ige")
