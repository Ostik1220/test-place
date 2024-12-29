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
 

// const course = {
//   title: "HTML+CSS+JS",
//   durationInMonth: 12,
//   students: ["Ivan", "Kiril", "Ostap", "Danya"],
//   school:{
//     title:"GoITeens",
//     country:"Ukraine",
//   }
// }


// const {title, durationInMonth, students, school:{title: schoolName, country}, cost = 500, logo} = course
// console.log(title, schoolName, cost, students, logo)

















//-----------------------------------------------

const musicLibrary = {
  count: 2,
  artists: [
    {
      name: 'The Beatles',
      albums: [
        {
          title: 'Sgt. Pepper\'s Lonely Hearts Club Band',
          year: 1967,
          tracks: [
            { title: 'With a Little Help from My Friends', duration: '2:44' },
            { title: 'Lucy in the Sky with Diamonds', duration: '3:28' },
            { title: 'A Day in the Life', duration: '5:33' }
          ]
        },
        {
          title: 'Abbey Road',
          year: 1969,
          tracks: [
            { title: 'Come Together', duration: '4:19' },
            { title: 'Something', duration: '3:01' },
            { title: 'Here Comes the Sun', duration: '3:06' }
          ]
        }
      ]
    },
    {
      name: 'Pink Floyd',
      albums: [
        {
          title: 'The Wall',
          year: 1979,
          tracks: [
            { title: 'Another Brick in the Wall, Part 2', duration: '3:59' },
            { title: 'Comfortably Numb', duration: '6:23' },
            { title: 'Hey You', duration: '4:40' }
          ]
        },
        {
          title: 'Dark Side of the Moon',
          year: 1973,
          tracks: [
            { title: 'Speak to Me/Breathe', duration: '3:58' },
            { title: 'Time', duration: '7:06' },
            { title: 'Money', duration: '6:22' }
          ]
        }
      ]
    }        
  ]
}

// const {count, artist:[firstGroupe: {theBeatles, firstAlbums: [albumOne: {titleOne, yearOne, tracksOne: [songOne: {trackTitleOne, durationOne}, songTwo: {trackTitleTwo, durationTwo}, songThree: {trackTitleThree, durationThree}]}, albumTwo: {titleTwo, yearTwo, tracksTwo:[songFour:{trackTitleFour, durationFour}, songFive:{trackTitleFive, durationFive}, songSix: {trackTitleSix, durationSix}]} ]}, secondGroup]} = musicLibrary



// const {count, artist} = musicLibrary
// const [firstGroupe, secondGroup] = artist
// // 1
// const {theBeatles, firstAlbums} = firstGroupe
// const [albumOne, albumTwo] = firstAlbums

// //1,1
// const {titleOne, yearOne, tracksOne} = albumOne
// const [songOne, songTwo, songThree] = tracksOne


// //1,1,1
// const {trackTitleOne, durationOne} = songOne
// //1,1,2
// const {trackTitleTwo, durationTwo} = songTwo
// //1,1,3
// const {trackTitleThree, durationThree} = songThree


// //1,2
// const {titleTwo, yearTwo, tracksTwo} = albumTwo
// const [songFour, songFive, songSix] = tracksTwo


// //1,2,1
// const {trackTitleFour, durationFour} = songFour
// //1,2,2
// const {trackTitleFive, durationFive} = songFive
// //1,2,3
// const {trackTitleSix, durationSix} = songSix




// //2
// const {PinkFloyd, secondAlbums} = secondGroup
// const [albumThree, albumFour] = secondAlbums
// //2,1
// const {titleThree, yearThree, tracksThree} = albumThree
// const [songSeven, songEight, songNine] = tracksThree

// //2,1,1
// const {trackTitleSeven, durationSeven} = songSeven
// //2,1,2
// const {trackTitleEight, durationEight} = songEight
// //2,1,3
// const {trackTitleNine, durationNine} = songNine


// //2,2
// const {titleFour, yearFour, tracksFour} = albumFour
// const [songTen, songEleven, songTwelve] = tracksFour


// //2,2,1
// const {trackTitleTen, durationTen} = songTen
// //2,2,2
// const {trackTitleEleven, durationEleven} = songEleven
// //2,2,3
// const {trackTitleTwelve, durationTwelve} = songTwelve

