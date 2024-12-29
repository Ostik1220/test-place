
// // метод forEach перебирає масив та робить щось з кожним елементом масиву, нічого не повертає
// const friends = ["Andrey", "Stas", "Sasha"]
// friends.forEach((friend, index, friendsArray) => {
//     console.log(Друг ${friend}, має індекс ${index})
// });

// // Синтаксис перебираючих методів
// // назваМасива.назваМетоду((елементМасиву, індексЕлементу, самМасив) => {Тут розписуємо що будемо робити з елементом масиву}) 


// // метод map перебирає масив і з кожним елементом масиву робить те що ми вказали в тілі колбеку, і цей змінений елемент записує у новий масив
// const updateFriends = friends.map((friend) => ${friend} мій друг);
// console.log(updateFriends)


// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
//   ];

 //1
//   const allPlayers = players.map((player) => player.name)
//   console.log(allPlayers)
//  //2
//   const addPoints = players.map((player) => {
//     const addedPoints = (player.points / 100) * 10 + player.points
//    const updatePlayer = {...player, points: addedPoints }
//    return updatePlayer
//   }
// )
// console.log(addPoints)
 //3

// const addHours = players.map((player) => {
//     const addedHourse = 10;
//     const updatePlayer = {...player, timePlayed: player.timePlayed + addedHourse};
//     return updatePlayer
// }
// )
// console.log(addHours)


// const playerToFind = players.fill((player) => player.id === 'player-3')
// console.log(playerToFind)


// function addHourse (hours, player) {
//     return player.timePlayed + hours
// }
// console.log(addHourse(50, playerToFind))
// console.log(players) 
//третє не вдале
const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
  ];
//4 Отримати масив всіх гравців онлайн
 const findOnlinePlayers = players.filter((player) => player.online === true)
 console.log(findOnlinePlayers)

 //5 Отримати масив всіх гравців офлайн
 const findOfflinePlayers = players.filter((player) => player.online === false)
 console.log(findOfflinePlayers)

 //6 масив всіх хардкорних гравців з часом більше 250 
 const findHardcorePlayers = players.filter((player) => player.timePlayed >= 250) 
 console.log(findHardcorePlayers)

 //*

 const findPlayerId= players.find((player) => player.id = "player-1")
 console.log(findPlayerId)

 const findPlayerName = players.find((player) => player.name = "Ajax")
 console.log(findPlayerName)
//-=-=-=----=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//метод fillter перебирає масив і перевіяє чи кожен елемнет з нього чи відповідає він умові яку ми вказалт в тілі колбека; повертає новий масив з елементами які пройшли перевірку(задовільняють умову)
 //метод find працює подібно до fillter але вертає тільки перший підходящий елемент
 //метод every перевіряє чи кожен елементз масиво вибирає вказаній умові якщо кожен то true a якщо не всі то false
 const array = [15, 13, 5, 23, 45]
const isNumEven = array.every((num) => num % 2 !== 0)

 console.log(isNumEven)
 // метод some перевряє чи хоча би 1 елемент в масиві правдивий умові
 const isNumBiggerThanFourthy = array.some((number) => number > 40)
 console.log(isNumBiggerThanFourthy)
 //--=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-

 const checkHourse = players.every((player) => player.timePlayed > 200)
 console.log(checkHourse)
 const checkOnline = players.every((player) => player.online)
 console.log(checkOnline)
