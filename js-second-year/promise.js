// // console.dir(Promise)
// const newPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     if (5 > 3) {
//       res("5 > 3");
//     } else {
//       rej("Помилка");
//     }
//   }, 5000);
// });
// console.log(newPromise);

// newPromise
//   .then((data) => {
//     showMessage(data);
//   })
//   .catch((error) => {
//     showMessage(error);
//   });

// function showMessage(message) {
//   alert(message);
// }

//-----------Неділя------------
// 1
const numbers = [3, 6, 9, 12, 15];

const promiseFunction = (arr) => {
  const functionPtomise = new Promise((good, bad) => {
    const isNumEven = arr.every((num) => {
      num % 2 !== 0;
    });
    if (isNumEven === true) {
      good("Всі числа парні");
    } else {
      bad("є числа непарні");
    }
  });

  return functionPtomise;
};
promiseFunction(numbers)
  .then((data) => {
    alert(data);
  })
  .catch((wrong) => {
    alert(wrong);
  });

//   2
// // Напишіть функцію, яка отримує масив об'єктів  і повертає проміс,
// //  який виконується з масивом імен, відсортованих за алфавітом.
// const namesArray = [
//   { name: "Остап", age: 15 },
//   { name: "Андрій", age: 17 },
//   { name: "Даня", age: 15 },
//   { name: "Кирил", age: 16 },
//   { name: "Іван", age: 14 },
//   { name: "Святослав", age: 14 },
// ];

const namePlace = (arr) => {
            const ageCheck = arr.every((obj) => {
            obj.age > 13
        })
    const promiseName = new Promise((resolve, reject) => {
   if(ageCheck === true){
   }
    })


    return promiseName
}