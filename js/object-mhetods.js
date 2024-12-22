//Цикл for.. in перебирає лише ОБЄКТИ
// const user = {
//   name: "coolguy",
//   password: 12345678,
//   email: "guy@gmail.com",
// };

// for (const key in user) {
//     console.log(`в обєкті юзер є ключ ${key} із значенням ${user[key]}`)
// }

//-------------------------------------------------------------------------


//методи обєктів
// 1 метод Object.keys витягує ключи з обєкта та робить з них масив
// const array = Object.keys(user)
// console.log(array)
// 2 метод Object.values витягує значення з обєкта та робить з них масив
// const values = Object.values(user)
// console.log(values)
// 3 метод Object.entries витягує пару ключ значення (як масив) з обєкта та робить з них масив
// const result = Object.entries(user)
// console.log(result)

//------------------------------------------------------------------------------------
//Задачки
// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: false },
//   ];

  //1
// function findFriendByName (arr, name) {
//     for (let friend of arr){
//         if (friend.name === name){
//             return friend.name;
//         }
//     }
//     return 'Нема такого ім я'
// }

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

//2 Написати функцію яка буде повертати масив всіх імен друзів
// function getAllNames (array) {
//     let arrayNames = [];
//     for (let i = 0; i < array.length; i++) {
//         arrayNames.push(array[i].name)
//     }
//     return arrayNames
// }
// console.log(getAllNames(friends));

//3 Написати функцію яка буде повертати масив імен друзів які онлайн
// function getOnlineFriends (array) {
//     for (let i = 0; i < array.length; i++) {
//        if (array[i].online === true){
//         return array[i].name
//        } 
//     }

// }
// console.log(getOnlineFriends(friends));

// //4
// function getOfflineFriends (array) {

//     for (let i = 0; i < array.length; i++) {
//        if (array[i].online === false){
//         return array[i].name
//        } 
//     }

// }
// console.log(getOfflineFriends(friends));

//чогось повертає тільки 1 імя


//------------------------------------------------------------------------------------------------------------------
//Деструкцизація це спосіб скорочення до ключа обєкта

// const user = {
//     userName: "Danylo",
//     userAge: 17,
//     isStudent: true,
//     friend: ["Nazar", "Ostap"],
//     addres: {
//         country: "Poland",
//         city: "Rzesów",
//         street: "Okulickego"
//     }
// }

// const userName = user.userName
// const isStudent = user.isStudent
// const friends = user.friends
// const userAge = user.userAge
// const country = user.addres.country
// const city = user.adress.city
// const {userName, userAge, isStudent, friend, addres:{country, city, street}} = user
// console.log(userName, userAge, isStudent, friend, country, city, street)


//-------------------------------------------------------------------------------------------------------------------------------
// const password = "kkjknhzbc7yuywg";
// const newUser = {
//     login: "dark",
//     password: "GCgvytcYGCtv"
// }

// const {login, password: userPasword// міняємо назву
// , avatar = "defoult"// оскільки в нас немає такого обєкту то ми задаємо якесь значення самостійно
//  } = newUser

// console.log(password)
// console.log(userPaswordpassword)
 

const course = {
  title: "HTML+CSS+JS",
  durationInMonth: 12,
  students: ["Ivan", "Kiril", "Ostap", "Danya"],
  school:{
    title:"GoITeens",
    country:"Ukraine",
  }
}


const {title, durationInMonth, students, school:{title: schoolName, country}, cost = 500, logo} = course
console.log(title, schoolName, cost, students, logo)