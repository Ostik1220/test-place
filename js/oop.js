// const car = {
//     wheels: 4,
//     headlights:4, 
//     salon: "leather",
//     title: "BMW A5"
// }
// const bmwX3 = Object.create(car)
// console.log(bmwX3)
// bmwX3.color = "white"
// bmwX3.model = "X3"
// console.log(bmwX3)
// console.log(bmwX3.model)
// const bmwX3Ostap = Object.create(bmwX3)
// bmwX3Ostap.owner = "Ostap"
// console.log(bmwX3Ostap)
// const bmwX3Andrew = Object.create(bmwX3)
// bmwX3Andrew.owner = "Andrew"
// bmwX3.color = "red"
// console.log(bmwX3Andrew)


// для того щоб перевикористовувати модель для ексемплярів придумади функції - конструктори

// const Car = function () {
//     this.wheels = 4
//     this.headlights = 3;
//     this.mode = "BMW"
//     this.price = 3000000
// }

// const car1 = new Car(4, 2, "BMW", 3000000)
// console.log(car1)
// const car2 = new Car(4, 4, "Lexus", 2000000)
// console.log(car2)

//перепишемо цю функцію на класс

// class Car {
//     constructor(info) {
//         const {wheels, headlights, model, price} = info
//         //функція в якій ми зберігаємо дані якщо ми її створили тто вона автоматично створется і буде порожьньою
//         this.wheels = wheels;
//             this.headlights = headlights;
//             this.model = model;
//             this.price = price;
//     }
//     showinfo() {
//         return`автомобіль марки ${this.model} має ${this.wheels} колеса, ${this.headlights} фари за ціною ${this.price}`
//     }
// }

// const info = {
//     wheels: 4,
//     headlights: 2,
//     model: 'BMW AA8',
//     price: 1500000
// }

// const bmw = new Car(info)
// console.log(bmw.showinfo())

class Ork {
    constructor({orkName, orkPoints, orkSkinColor, orkWeapon}) {
        this.name = orkName;
        this.points = orkPoints;
        this.skincolor = orkSkinColor;
        this.weapons = orkWeapon;
    }
    orkAttacks(){
        this.points += 50
        return `Ork ${this.name} attack elf with ${this.weapons} and has ${this.points}`
    }
    showOrkPoints(){
        return `Ork ${rhis.name} has ${this.points}`
    }
}




const orkRufus = new Ork({orkName: 'Rufus', orkPoints: 100, orkSkinColor: 'Green', orkWeapon: 'sword'})

// console.log(showOrkPoints())
// console.log(orkAttacks())
// console.log(showOrkPoints())