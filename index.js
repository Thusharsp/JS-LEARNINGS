// const arr = [1, 2, 3, 4, 5];

// const mapresult = arr.map((ar) => {
//   return ar;
// });

// const forEachresult = arr.forEach((ar, i) => {
//   arr[i] = ar * 2;
//   console.log(arr[i]);
// });

// const vehical = [
//   {
//     Brand: 'TATA',
//     Name: 'Nexon',
//     Model: 2023,
//   },
//   {
//     Brand: 'Hyundai',
//     Name: 'Creta',
//     Model: 2020,
//   },
//   {
//     Brand: 'Suzuki',
//     Name: 'Baleno',
//     Model: 2019,
//   },
// ];

// console.log(vehical);

// //filtering after 2019

// const filteredvehical = vehical.filter((car) => {
//   return car.Model > 2019;
// });

// console.log(filteredvehical);

// const carlst = document.getElementById('app');
// filteredvehical.forEach((car) => {
//   const newlst = document.createElement('li');
//   newlst.textContent = `Brand: ${car.Brand}, Name: ${car.Name}, Model: ${car.Model}`;
//   carlst.appendChild(newlst);
// });

// //EVENT DELEGATION

// const btn = document.querySelector('button');

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// btn.addEventListener('click', () => {
//   const rndclr = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//   document.body.style.backgroundColor = rndclr;
// });

// Counter Applcation

// const cbtn = document.getElementById('clickme');
// const counter = document.getElementById('results');

// let count = 0;

// function updateCounter() {
//   counter.textContent = count;
// }

// cbtn.addEventListener('mouseover', () => {
//   count++;
//   updateCounter();
// });

//Counter Application with 2 btns

// const resultbtn = document.getElementById('results');
// const incbtn = document.getElementById('increment');
// const decbtn = document.getElementById('decrement');
// const resBtn = document.getElementById('reset');

// let count = 0;

// function updateCounter() {
//   resultbtn.textContent = count;
// }

// incbtn.addEventListener('click', () => {
//   count++;
//   updateCounter();
// });

// decbtn.addEventListener('click', () => {
//   count--;
//   updateCounter();
// });

// resBtn.addEventListener('click', () => {
//   count = 0;
//   alert('Reseted the values');
//   updateCounter();
// });

//ERROR HANDELLING

// try {
//   console.log('The program starts');
//   and;
//   console.log('THE programe ends');
// } catch (err) {
//   console.log('Error: ' + err);
// } finally {
//   console.log('this will always run');
// }

// console click

// const printer = document.getElementById('app');

// printer.addEventListener('click', () => {
//   console.log('You Clicke me');
// });

//promise function
// less than 5 resolved greater than 5 reject

// const testPromise = new Promise((resolve, reject) => {
//   let value = 2;

//   if (value < 5) {
//     resolve('Value is less than 5');
//   } else {
//     reject('Value is greater than 5');
//   }
// });

// testPromise
//   .then((result) => {
//     console.log('Sucess ===> ', result);
//   })
//   .catch((error) => {
//     console.log('Error ==> ', error);
//   });

// === and == using null and undefined

// let a = 7;
// console.log(a);

// console.log(null == undefined);
// console.log(null === undefined);

//FLATTEN ARRAY

// const arr = [[1, 2], [3, 4], [5, [6, 7], 8], 9];

// console.log(arr.flat(2));

//CALL APPLY BIND
// var person = {
//   name: 'Thush',
//   hello: function (thing) {
//     console.log(this.name + ' Says Hello ' + thing);
//   },
// };

// var altobj = {
//   name: 'Thushar',
// };

// const newHello = person.hello.bind(altobj);

// newHello('World');

// console.log(isNaN('Hi'));

// console.log(Number.isNaN(0 / 0));

//sum

const num1 = document.getElementById('input1');
const num2 = document.getElementById('input2');
const addbtn = document.getElementById('add');
const result = document.getElementById('result');

addbtn.addEventListener('click', () => {
  const num1 = parseFloat(input1.value);
  const num2 = parseFloat(input2.value);

  if (isNaN(num1) || isNaN(num2)) {
    alert('invald Number');
  } else {
    const sum = num1 + num2;
    result.textContent = `Result: ${sum}`;
  }
});
