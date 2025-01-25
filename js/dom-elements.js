 
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