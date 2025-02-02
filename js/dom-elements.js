 //Метод creatElement дозволяє створити дом вузл в памяті і ще не додає його на сторінку в дом дерево 
 
//Створимо статтю в якій буде заголовок картинка та опис 
const articleEllement = document.createElement("article"); 
console.log(articleEllement); 
const titleElement = document.createElement("h1"); 
titleElement.textContent = "Мої улюблині млинці - рецепт"; 
console.log(titleElement); 
 
const pictureElement = document.createElement("img"); 
pictureElement.alt = "млинець з шоколадом"; 
pictureElement.src = 
  "https://assets.dots.live/misteram-public/abf2e2f919a614ac107fa3e62bfcb06f-826x0.png"; 
 
const recepieElement = document.createElement("p"); 
recepieElement.textContent = `В посудину вбийте яйця, додайте до них цукор та какао. Гарно перемішайте до однорідного стану міксером, вінчиком або виделкою. Кількість цукру можна регулювати на свій смак. 
Просійте борошно через сито і поступово додайте його в ємність із яєчно-шоколадною сумішшю, регулярно її помішуючи. Має вийти досить густе тісто без грудочок. 
До тіста додайте воду кімнатної температури, добре перемішайте до однорідного стану. За густиною тісто має бути як зазвичай на млинці – як рідка сметана. 
Рослинну олію додавати до тіста не потрібно. Вона необхідна лише для змазування сковорідки.  
Смажте млинці з двох сторін на добре розігрітій чавунній сковорідці або на спеціальній для млинців. Сковороду періодично змазуйте олією.`; 
 
const linkElement = document.createElement("a"); 
linkElement.href = 
  "https://millennium-trade.com/kak-prazdnovat-maslenicu-10-unikalnih-receptov-blinov-s-shokoladom-dlja-shokoladomanov"; 
linkElement.textContent = "посилання наибільше рецептів тут🥞"; 
// для того щоб вкласти елемент в елемент або на сторінку використовуємо метод apend 
articleEllement.append(titleElement, pictureElement, recepieElement); 
articleEllement.prepend(linkElement); 
recepieElement.before(linkElement); 
console.log(articleEllement); 
 
articleEllement.width = "300px"; 
articleEllement.style.backgroundColor = "yellow"; 
articleEllement.style.color = "brown"; 
 
//додамо статтю з усім що в ній є на сторінку 
const boxElement = document.querySelector(".box"); 
boxElement.append(articleEllement); 
console.log(boxElement); 
 
const linkElem = document.createElement("a"); 
linkElem.textContent = "Посилання на урок"; 
linkElem.setAttribute("src", "https://meet.google.com/wzz-zxys-ige"); 
console.log(linkElem); 
const check = linkElem.hasAttribute("src"); 
console.log(check); 
linkElem.removeAttribute("src"); 
linkElem.setAttribute("href", "https://meet.google.com/wzz-zxys-ige");
//Неділя/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////.
console.log(linkElement.innerHTML);
linkElement.innerHTML = "посилання на рецепти";
console.log(linkElement.innerHTML);

articleEllement.innerHTML = "this is text test";
console.log(articleEllement.innerHTML);
// const markUp = `
//     <h3>заголовок</h3>
//     <ul>
//         <li>one</li>
//         <li>2</li>
//         <li>|||</li>
//         <li>чотири</li>
//         <li>pięc</li>
//     </ul>
// `;
// articleEllement.innerHTML= markUp

//innerHTML перезаписує контент в елементі на новий який записаний в лапках пілся дорівню

//якщо ми хочемо додати елементи після існуючих дітей, то використовуємо метод .insertAdjacentHTML
// articleEllement.insertAdjacentHTML("beforeend", markUp);

//----------------------

const dishes = [
  {
    title: "Вареники",
    photo:
      "https://i.obozrevatel.com/food/recipemain/2019/7/2/02.png?size=636x424",
    discription:
      "Вареники — один із символів української національної кухні. Невеликі трикутні чи заокруглені у формі півмісяця вироби з бездріжджового тіста здебільшого з пшеничного борошна, а також рідше з житнього, гречаного або ячмінного.",
  },
  {
    title: "борщ",
    photo:
      "https://images.unian.net/photos/2020_04/thumb_files/1200_0_1588081977-7108.jpg",
    discription:
      "Борщ — українська рідка страва, що вариться з посічених буряків, капусти з додаванням картоплі, квасолі, та різних приправ",
  },
  {
    title: "голубці",
    photo:
      "https://images.unian.net/photos/2020_07/1594844831-9010.jpg?0.1421778040046755",
    discription:
      "Голубці — страва української кухні, також притаманна кухні Східної Європи та Середнього Сходу. Є об'єктом нематеріальної культурної спадщини України. Страва готується з листя свіжої чи кислої капусти та начинки з м'яса, рису чи гречки, кукурудзяних чи пшоняних круп, картоплі, квасолі, грибів, цибулі, моркви та прянощів.",
  },
  {
  title: "пампушки",
  photo:
    "https://img.cookorama.net/uploads/images/00/03/59/2013/04/23/7e32ce_780x.jpg",
  discription:
    "Пампу́шка (пампу́х, пампу́шок) — невелика кругла пишна булочка, виготовлена з дріжджового тіста з житнього, пшеничного, гречаного чи змішаного борошна.",
},
];

const markUp = dishes.map((dish) => {
    const layout = `
        <li>
      <h2>${dish.title}</h2>
      <img src="${dish.photo}" alt="${dish.title}" />
      <p>${dish.discription}</p>
    </li>
    `
    return layout
} )

// console.log(markUp)

const markUpToAdd = markUp.join("")
console.log(markUpToAdd)

const list = document.querySelector(".list")
console.log(list)

list.insertAdjacentHTML("afterbegin", markUpToAdd)