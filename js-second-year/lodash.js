//бібліотека доступ
console.dir(_)

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//chunk
const numArr = _.chunk(num, 3)
console.log(numArr)

const fruit = {
    title: 'apple',
    price: 12,
    weight: 5
}

const fruitKey = _.findKey(fruit, "apple")
console.log(fruitKey)

const usersSalary = [
{name: "Anton",
    salary:1200
},
{name: "Ostap",
    salary:1100
},
{name: "Ruslan",
    salary: 1500
}
];
const result = _.meanBy(usersSalary, 'salary')
console.log(result)

let count = 0;
const callBack = (e) => {
    console.log(e.clientX, e.clientY);
    count++;
    document.querySelector(".library-text").textContent = count
}

document.querySelector("#box").querySelector("mousemove" , _.throttle(callBack, 1000))