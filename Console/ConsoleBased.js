// concept of hoisting
// var x = 7;
// function getName(){
//     console.log("hello"); //hello
// }
// getName();
// console.log(x) //7

// getName();
// console.log(x) //undefined
// const x = 7;
// function getName(){
//     console.log("hello"); //hello
// }


// getName();
// console.log(x) //ReferenceError: x is not defined
//  var x = 7;
// function getName(){
//     console.log("hello"); //hello
// }

// console.log(x) //undefined
// getName();
// getName2();
// getName1();
// var x = 7;
// function getName(){
//     console.log("hello"); //hello
// }
// var getName1 = function(){
//     console.log("hi"); //TypeError: getName1 is not a function
// }
// var getName2 = () => {
//     console.log("namaste") // TypeError: getName2 is not a function
// }

// concept of function

// var x = 1;
// a();
// b();
//  console.log(x)
// function a(){
//     var x = 10;
//     console.log(x)
// }
// function b(){
//     var x = 100;
//     console.log(x)
// }

// shortest program or global context
// var a = 10;
// function b(){
//     var x = 10;
//     console.log(x)
// }
// console.log(a) //10
// console.log(this.a) //10
//  console.log(window.a) //10
// b();

// undefined vs not defined 
// var a;
// console.log(a)
// var a = 10;
// console.log(a);
// var a = "hello";
// console.log(a)

// var a;
// console.log(a) // undefined
// console.log(x) //x is not define

// scope chain and lexicalenvironment
// function a(){
//         var b = 10;
//         function c(){
//         console.log(b)
//       }
//     c();
// }
// a();
// console.log(b)

// let, const and temporal dead zone
// console.log(x) //ReferenceError: x is not defined
// console.log(b) // undefined
// console.log(a) //ReferenceError: Cannot access 'a' before initialization
// let a = 10;
// var b = 100;

// let a = 10;
// let a = 100; //syntex error

// let a;
// a=10;
// console.log(a) //10

// const a;
// a = 10;
// console.log(a) //syntex error

// const a = 100;
// a = 10;
// console.log(a) //TypeError: Assignment to constant variable.

// {
//     var a = 10;
//     let b = 20;
//     let c = 30;
//     console.log(a) //10
//     console.log(b) //20
//     console.log(c) //30
// }
// console.log(a) //10
// console.log(b) //ReferenceError: b is not defined
// console.log(c) //ReferenceError: b is not defined

// var a = 100;
// {
//     var a = 10;
//     let b = 20;
//     let c = 30;
//     console.log(a) //10
//     console.log(b) //20
//     console.log(c) //30
// }
// console.log(a) //10
// in line 124 shadowing line 122

// let b = 100; // script scope
// {
//     var a = 10;
//     let b = 20; //block scope
//     let c = 30;
//     console.log(a) //10
//     console.log(b) //20
//     console.log(c) //30
// }
// console.log(b) //100

// let a = 20;
// {
//     var a = 20;
// }

// let a =10;
// {
//     let a = 10;
// }

// var a = 10;
// {
//     let a = 10;
// }

// closures
// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();

// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// var z = x();
// console.log(z)
// z();
// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     a = 100;
//     return y;
// }
// var z = x();
// console.log(z)
// z();

// function z(){
//     var b = 900;
//     function x(){
//         var a = 7;
//         function y(){
//             console.log(a, b)
//         }
//         y();
//     }
//     x();
// }
// z();
// more example of clouser
// function x(){
//     var i = 1;
//     setTimeout(function y(){
//         console.log(i)
//     }, 3000);
//     console.log("hello")
// }
// x();

// function x(){
//     for(var i = 1; i<5; i++){
//         setTimeout(function y(){
//             console.log(i)
//         }, i*1000);
//     } 
//     console.log("hello")
// }
// x();
// function x(){
//     for(let i = 1; i<5; i++){
//         setTimeout(function y(){
//             console.log(i)
//         }, i*3000);
//     } 
//     console.log("hello")
// }
// x();
// function x() {
//     for (var i = 1; i < 5; i++) {
//         function clouser(i) {
//             setTimeout(function y() {
//                 console.log(i)
//             }, i * 3000);
//         }
//         clouser(i)
//     }
//     console.log("hello")
// }
// x();

// function func2() {
//     for (var i = 0; i < 3; i++) {
//       setTimeout((function (j) {
//         return function () {
//           console.log(j);
//         };
//       })(i), 2000);
//     }
//   }
//   func2();

// function statement or function declaration
// function a(){
//     console.log("a called")
// }

// function expression

// var b = function(){
//     console.log('b called')
// }

// a();
// b();

// anonymous function
// function (){

// }

// named function expression
// var b = function xyz(){
//     console.log('hello')
// }
// xyz();  // reference error xyz is not defined

// difference between parameters and arguments
// var a = function(parameters1, parameters2){
//     console.log("hello")
// }
// a(arguments1, arguments2);

// first class function

// var a = function(parameters1, parameters2){
//     return function xyz(){

// }
// }
// a(arguments1, arguments2);

// var a = function(){
//     console.log('hello')
// }
// a(function(){

// });

// call back function
// setTimeout(function(){
//     console.log('timer')
// }, 5000)
// function x(y){
//     console.log("x")
//     y();
// }
// x(function y(){
//     console.log('y')
// });

// function attachEventListeners(){
//     let count = 0;
//     document.getElementById('click').addEventListener('click', function xyz() {console.log("button clicked", ++count)} )
// }
// attachEventListeners();
// let count = 0;
// let autoinc = null;
// function increment(){
//     count = count+1;
//     display();
// }
// function decrement(){
//     count = count-1;
//     display();
// }
// function display(){
//    const displayCount = document.getElementById('display')
//    displayCount.textContent = count;
// }
// const incButton = document.getElementById('inc');
// const dcrButton = document.getElementById('dcr');
// incButton.addEventListener('click', () => {
//     increment();
//     autoinc = setTimeout(() => {
//         increment();
//     }, 2000)
// });
// dcrButton.addEventListener('click', () => {
//     decrement();
//     autoinc = setTimeout(() => {
//         decrement();
//     }, 2000)
// });

// function appendToDisplay(value){
//     document.getElementById('display').value += value;
// }
// function clearDisplay(){
//     document.getElementById('display').value = '';
// }
// function calculate(){
//     const expression = document.getElementById('display').value;
//     const result = eval(expression);
//     document.getElementById('display').value = result;
// }

// higher order function

// function x(){
//     console.log('hi');
// }
// function y(x){
//     x();
// }
// here y is higher order function and x is call back function

// const radius = [2, 3, 1, 4];

// const area = function(radius){
//     return Math.PI * radius * radius;
// }
// const parameter = function(radius){
//     return 2 * Math.PI * radius;
// }
// const diameter = function(radius){
//     return 2 * radius;
// }

// function calculate(radius, logic){
//     const output = [];
//     for(let i=0; i<radius.length; i++){
//         output.push(logic(radius[i]))
//     }
//     return output; 
// }
// console.log(calculate(radius, area))
// console.log(calculate(radius, parameter))
// console.log(calculate(radius, diameter))

// function calculateArea(){
//     const output = [];
//     for(let i=0; i<radius.length; i++){
//         output.push(Math.PI * radius[i] * radius[i])
//     }
//     return output;
// }
// console.log(calculateArea());
// function calculateParameter(){
//     const output = [];
//     for(let i=0; i<radius.length; i++){
//         output.push(2 * Math.PI * radius[i])
//     }
//     return output;
// }
// console.log(calculateParameter());
// function calculateDiameter(){
//     const output = [];
//     for(let i=0; i<radius.length; i++){
//         output.push(2 * radius[i])
//     }
//     return output;
// }
// console.log(calculateDiameter());

//map filter and reduce
// const users = [
//     {firstName: 'gaurav', lastName: 'garg', age: '27'},
//     {firstName: 'dheeraj', lastName: 'garg', age: '25'},
//     {firstName: 'yogesh', lastName: 'garg', age: '29'},
//     {firstName: 'sonal', lastName: 'garg', age: '29'},
// ];

// o/p list of full name
// const output = users.map(x => x.firstName + " " + x.lastName);
// console.log(output);

// o/p {29: 2, 27: 1, 25: 1}
// const output = users.reduce((acc, curr) =>  {
//     if(acc[curr.age]){
//         acc[curr.age] += acc[curr.age];
//     }else{
//         acc[curr.age] = 1
//     }
//     return acc;
// }, {})
// console.log(output);

// o/p first name of user whose age is less then 27
// const output = users.filter(x => x.age < 29).map(x => x.firstName);
// console.log(output)

// const output = users.reduce((acc, curr) => {
//     if(curr.age<29){
//         acc.push(curr.firstName)
//     }
//     return acc;
// }, [])
// console.log(output);

//stop watch

// const starter = document.getElementById('start')
// const stoper = document.getElementById('stop')
// const reseter = document.getElementById('reset')
// const hour = document.getElementById('hour');
// const min = document.getElementById('min');
// const sec = document.getElementById('sec');
// const cnt = document.getElementById('count');

// var hours = 0;
// var minutes = 0;
// var seconds = 0;
// var count = 0;


// let running = false;

// function start(){
//     running = true;
//     stopWatch();
// }

// function stop(){
//     running = false;

// }

// function reset(){
//     running = false;
//     hours = 0;
//     minutes = 0;
//     seconds = 0;
//     count = 0;
//     cnt.innerHTML = '00';
//     sec.innerHTML = '00';
//     min.innerHTML = '00';
//     hour.innerHTML = '00';
// }

// function stopWatch(){
//     if(running){
//         var hourString = hours;
//         var minString = minutes;
//         var secString = seconds;
//         var countString = count;
//         if(count<10){
//             countString = "0" + countString;
//         }
//         if(minutes<10){
//             minString = "0" + minString;
//         }
//         if(hours<10){
//             hourString = "0" + hourString;
//         }
//         if(seconds<10){
//             secString = "0" + secString;
//         }
//         count = count + 1;
//         cnt.innerHTML = countString;
//         if(count == 100){
//             seconds = seconds+1;
//             sec.innerHTML = secString;
//             count = 0;
//         }
//         if(seconds == 60){
//             minutes = minutes+1;
//             min.innerHTML = minString;
//             seconds = 0;
//         }
//         if(minutes == 60){
//             hours = hours + 1;
//             hour.innerHTML = hourString;
//             minutes = 0;
//             seconds = 0;
//         }
//         setTimeout("stopWatch()", 10)
//     }
// }

// starter.addEventListener('click', start);
// stoper.addEventListener('click', stop);
// reseter.addEventListener('click', reset);

// call apply and bind method
// let name = {
//     firstName: 'gaurav',
//     lastName: 'garg',
// }

// let fullPrintName =  function (city, state){
//     console.log(this.firstName + " " + this.lastName + " " + city + " " + state);
// }
// function fullPrintName(){
//     console.log(this.firstName + " " + this.lastName);
// }

// let fullPrintName = () => {
//     console.log(this.firstName + " " + this.lastName);
// }

// fullPrintName.call(name, 'jaipur', 'rajasthan')
// fullPrintName.apply(name, ['jaipur', 'rajasthan'])
// let details = fullPrintName.bind(name, 'jaipur', 'rajasthan')
// details();

// import React, {useState} from 'react';
// import './App.css';

// function App() {
//   const [count, setCount] = useState(0)
//       function increment(){
//         if(count<5){
//           setCount((prevCount) => prevCount + 1);
//           setTimeout(() => {
//             setCount((prevCount) => prevCount + 1)
//           }, 1000)
//         }
//     }
//   function decrement(){
//     if(count>0){
//       setCount((prevCount) => prevCount - 1);
//       setTimeout(() => {
//         setCount((prevCount) => prevCount - 1)
//       }, 1000)
//     }
//   }

//   return (
//     <div className="App">
//       <button onClick={increment}>increment</button>
//       <div>{count}</div>
//       <button onClick={decrement}>decrement</button>
//     </div>
//   );
// }

// export default App;

// import React, {useState, useEffect, useRef} from 'react';
// import './App.css';

// function App() {
//   const [time, setTime] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   const start = () => {
//     setIsRunning(true);
//   };

//   const stop = () => {
//     setIsRunning(false);
//   };

//   const reset = () => {
//     setIsRunning(false);
//     setTime(0);
//   };

//   useEffect(() => {
//     let interval;

//     if (isRunning) {
//       interval = setInterval(() => {
//         setTime((prevTime) => prevTime + 1);
//       }, 10);
//     } else {
//       clearInterval(interval);
//     }

//     return () => clearInterval(interval);
//   }, [isRunning]);

//   const formatTime = (time) => {
//     const milliseconds = (`0${time % 100}`).slice(-2);
//     const seconds = (`0${Math.floor((time / 100) % 60)}`).slice(-2);
//     const minutes = (`0${Math.floor((time / 6000) % 60)}`).slice(-2);
//     const hours = (`0${Math.floor(time / 360000)}`).slice(-2);

//     return `${hours}:${minutes}:${seconds}.${milliseconds}`;
//   };
//   return (
//     <div className="App">
//       <div>{formatTime(time)}</div>
//       <div>
//         <button onClick={start}>Start</button>
//         <button onClick={stop}>Stop</button>
//         <button onClick={reset}>Reset</button>
//       </div>
//     </div>
//   );
// }

// export default App;

//spread operator examples
// const array = [1, 2, 3];
// console.log(...array); //1, 2, 3

// // copying an Array
// const originalArray = [1, 2, 3];
// const copiedArray = [...originalArray];
// console.log(copiedArray); //[1, 2, 3]

// // merging arrays
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5];
// const mergedArray = [...arr1, ...arr2];
// console.log(mergedArray); // [1, 2, 3, 4, 5]

// //passing multiple arguments to a function
// const num = [1, 2, 3, 4, 5];
// Sum(...num);
// function Sum(a, b, c, d, e){
//     console.log(a + b + c + d + e); //15
// }

//rest operator example
// display(1, 2, 3, 4, 5);
// function display(first, second, ...remaining){
//     console.log(first);
//     console.log(second);
//     console.log(remaining)
// }

//array destructuring
// const fruits = ['apple', 'banana', 'orange'];
// const [firstFruit, secondFruit, thirdFruit] = fruits;
// console.log(firstFruit);
// console.log(secondFruit);
// console.log(thirdFruit);

//deep copy and shallow copy
// const person = {
//     name: 'gaurav',
//     age: 26,
//     address: {
//         city: 'delhi',
//         country: 'India',
//     }
// }
//shallow copy
// const clonePerson = {...person};
// const clonePerson2 = Object.assign({}, person);
// clonePerson2.address.city = 'mumbai';
// console.log(clonePerson2)
// console.log(clonePerson);
//deep copy
// const clonePerson3 = JSON.parse(JSON.stringify(person));
// clonePerson3.address.city = 'banglore';
// //   console.log(clonePerson)
// console.log(person); 
//  console.log(clonePerson3)
//  // console.log(clonePerson3)

//console base output question
// 1
// let a = [];
// let b = [];
// console.log(a == b) 
// console.log(a === b)
// hint : memory location different
// 2
// let a = [];
// let b = a;
// console.log(a == b) 
// console.log(a === b)
// 3
// let a = [20];
// let b = [20];
// console.log(a[0] == b[0]) 
// console.log(a[0] === b[0])
// console.log(a == b) 
// console.log(a === b)
// 4
// let z = [1, 2, 3, 4]
// console.log(...z)
// console.log([...z])
// 5
// console.log(typeof NaN)
// 6
// console.log(10 - -10)
// 7
//const set = new Set([1, 1, 2, 3, 4]);
//const set1 = new Set(1, 1, 2, 3, 4);
// console.log(set);
//console.log(set1);

// 8
// let data = {name: 'gaurav'};
// console.log(delete data.age);
//  console.log(data)
// const num = 42;
// console.log(delete num);
// const obj = { nonConfigurable: 'Cannot be deleted' };
// console.log(delete obj.nonConfigurable);
// 9
// let data = {name: 'gaurav'};
// console.log(delete data);
// console.log(data)
// 10
// const data = ['gaurav', 'dheeraj', 'yogesh'];
// // const[y] = data;
// const[, y] = data;
// const [a, b] = data;
// console.log(y);
// console.log(a, b);
// 11
// get property name without . operator
// const data = {name: 'gaurav', age: 29, skill: 'js'};
// const {age} = data;
// console.log(age);
// 12
// merge two object
// const data1 = {name: 'gaurav', age: 26, skill: 'js'};
// const data2 = {city: 'jaipur', skill: 'react'}
// const data = {...data1,...data2}
// console.log(data)
// 13
// const res1 = 0 || false || NaN; 
// const res2 = '' || NaN || false;
// console.log(res1);
// console.log(res2);
// falsy value  '', NaN, undefined, false, 0, null;
// 14
// console.log(Promise.resolve(5))
// 15
// console.log('💖' == '💖')
// console.log('😍' == '❤')
// console.log('🔥' == '💦')
// 16
// const jsonString = '{"name": "John", "age": 30}';
// const jsObject = JSON.parse(jsonString);
// console.log(jsObject.name);
// console.log(jsObject);
// console.log(jsonString)
// const data = { name: 'Alice', age: 25 };
// console.log(data)
// const jsonString1 = JSON.stringify(data); // Serialization
// console.log(jsonString1)
// const jsObject1 = JSON.parse(jsonString1); // Deserialization
// console.log(jsObject1)
// 17
// let name = 'gaurav';
// function getName(){
//     console.log(name);
//     let name = 'garg'
// }
// getName();
// 18
// console.log((x => x)('hello'));
// console.log(`${(x => x)('hello')}, Gaurav`);
// 19
// const name = 'gaurav';
// console.log(!typeof name);
// console.log(!typeof name === 'string')
// console.log(!typeof name === 'object')
// console.log(!typeof name === false)
// 20
//   const person = {
//     name: 'John',
//     age: 30,
//   };
//   // Seal the object
//   Object.seal(person);
//   // Attempt to add a new property (will be ignored)
//   person.gender = 'Male';
//   // Attempt to delete an existing property (will be ignored)
//   delete person.age;
//   // Modify an existing property (allowed)
//   person.name = 'Alice';
//   console.log(person);
// 21
// let data = 'true';
// //convert data to boolean false value
// console.log(!data);
// 22
// let data = ['gaurav', 'dheeraj', 'yogesh']
// delete data[1];
// console.log(data);
// console.log(data.length);
// 23
// let a = [1, 2, 3, 4];
// let b = [4, 5, 6];
// let c = [...a, ...b];
// console.log(c);
// 24
// let c = 3 ** 3;
// console.log(c);
// 25
// let a = 2;
// setTimeout(() => {
//     console.log(a);
// }, 0);
// a = 100;
// 26
// let a = 10;
// let A = 20;
// console.log(A)
// 27
// let A10 = 'gaurav';
// let 10A = 'garg';
// 28
// let a = 'like';
// let b = `like`;
// console.log(a === b);
// 29
// let a = 1;
// let c = 2;
// console.log(c-- === a);
// console.log(--c === a);
// let b = --c;
// let d = c--;
// console.log(b);
// console.log(d);
// 30
// let a = 1;
// let b = 1;
// let c = 2;
// console.log(a === b === --c);
// console.log(a === b == --c);
// const d = true;
// const e = 1;
// console.log(d == e) //coercion is applied
// console.log(d === e)
// 31
// console.log(3*3)
// console.log(3**3)
// console.log(3***3)
// 32
// console.log(a)
// let a = 10;
// 33
// console.log(a)
// var a = 10;
// 34
// console.log(a)
// 35
// console.log([[[[]]]])
// 36
// let for = 36;
// let fore = 36;
// 37
// console.log(+true)
// console.log(+false)
// console.log(+'gaurav')
// console.log(+'2')
// console.log(typeof +true)
// 38
// let data = 'size';
// const bird = {
//     size: 'small',
// };
// console.log(bird[data]);
// console.log(bird['size']);
// console.log(bird.size)
// console.log(bird.data)
// 39
// let c = {name: 'peter'};
// let d;
// d = c;
// c.name = 'anil';
// console.log(d.name)
// 40
// let a = 3;
// let b = new Number(3);
// console.log(b)
// console.log(a == b);
// console.log(a === b);
// console.log(typeof b)
// 41
// console.log(typeof [])
// 42
// function getAge(){
//     'use strict';
//     age = 21;
//     console.log(age);
// }
// getAge();
// 43
// const sum = eval('10*10+5');
// console.log(sum)
// 44
// const obj = {1: 'a', 2: 'b', 3: 'c'};
// console.log(obj.hasOwnProperty('1'))
// console.log(obj.hasOwnProperty(1))
// const obj1 = {1: 'a', 2: 'b', 1: 'c'};
// console.log(obj1)
// 45
// function sayHi(){
//     return (() => 0)();
// }
// function sayHi(){
//     return (() => 0);
// }
// console.log(sayHi());
// console.log(sayHi()());
// console.log(typeof sayHi());
// console.log(typeof sayHi()());
// 46
// console.log(typeof typeof 1)
// console.log(typeof number)
// console.log(typeof 'number')
// console.log(typeof 1)
// 47
// const numbers = [1, 2, 3];
// numbers[6] = 11;
// console.log(numbers)
// console.log(numbers.length)
// 48
// const numbers = [1, 2, 3]
// numbers[9] = numbers;
// console.log(numbers);
// 49
// console.log([...'gaurav'])
// console.log(...'gaurav'[0])
// const b = ([...'gaurav']);
// console.log(typeof b)
// 50
// const firstPromise = new Promise((res, rej) => {
//     setTimeout(res, 500, 'one');
// });
// const secondPromise = new Promise((res, rej) => {
//     setTimeout(res, 600, 'two');
// });
// Promise.race([firstPromise, secondPromise]).then(res => console.log(res))
// 51
// const person = {
//     name: 'gaurav',
//     age: '25',
// };
// // const person = [1, 2, 3];
// for(const item in person){
//     console.log(item)
//     console.log(person[item])
// }
// 52
// let data = 3 + 4 + '5';
// console.log(typeof data)
// console.log(data)
// console.log(typeof 3 + 4 + '5')
// console.log(typeof (3 + 4 + '5'))
// console.log(typeof (3 + 4 + +'5'))
// console.log((3 + 4 + +'5'))
// 53
// let data = [1, 2, 3].map(num => {
//     if(typeof num === 'number')return 'divya';
//     return num*2;
// });
// console.log(data)
// let data = [1, 2, 3].map(num => {
//     if(typeof num === 'number')return 1;
//     return num*2;
// });
// console.log(data)
// 54
// function getInfo(member){
//     member.name = 'gaurav';
// }
// const person = {name: 'dheeraj'};
// getInfo(person);
// console.log(person);
// 55
// function car(){
//     this.make = 'tata';
//     return {make: 'kia'};
// }
// const myCar = new car();
// console.log(myCar.make)
// 56
// (() => {
//     let x = (y = 10);
// })();
//     console.log(typeof x)
// console.log(typeof (x = (y = 10)))
// 57
// (() => {
//     let x=y=10;
// })();
// console.log(typeof y)
// console.log(typeof x)
// 58
// (() => {
//     let x = 10;
// })();
// (() => {
//     var x = 10;
// })();
//console.log(typeof x);
// 59
// let x = 100;
// (() => {
//     var x = 20;
// })();
// console.log(x);
// 60
// console.log(!true - true);//coersion property
// console.log(!true);
// console.log(true + +'10');

//extra question
// function a(){
//     for(var i = 0; i<12; i++){
//         console.log(i);//0 to 11
//     }
//     console.log(i);//12
// }
// a();
// function a(){
//     for(let i = 0; i<12; i++){
//         console.log(i);//0 to 11
//     }
//     console.log(i);
// }
// a();

// const number = [1, 2, 3, 4, 5];
// const res = number.reduce((acc, curr) => {
//     if(curr % 2 === 0){
//         return acc + (curr * curr);
//     }else{
//         return acc;
//     }
// }, 0);
// console.log(res)

// const number = [34, 2, -8, 9, -12, 6];
// const res = number.reduce((acc, curr) => {
//     if(curr<acc){
//         return curr;
//     }else{
//         return acc;
//     }
// }, 0);
// console.log(res);

// const number = [2, 4, 6, 8, 5, 7, 9];
// const res = number.filter(num => num%2 !== 0).map(item => {
//     return item;
// })
// console.log(res)
// const arrowFunc = (...arguments) => arguments.length
// console.log(arrowFunc(1, 2, 3));
// const regularFunc = function() {
//     return arguments.length;
//    };
// console.log(regularFunc(1, 2, 3));

// console.log([0] == false)

// var str = 'sare jaha se acha hindustan hamara';
// var saveStr = str.split(" ").map((word) => {
//     return word.split("").reverse().join("")
// })
// console.log(saveStr.join(" "))
// console.log(str.split(" ").reverse().join(" "));

// function checkArray(elem){
//     // console.log(Array.isArray(elem));
//     return Array.isArray(elem);
// }
// console.log(checkArray([]))
// console.log(checkArray({}))

//how to empty an array in js
// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr);
// arr.length = 0;
// console.log(arr);

//how to check integer
// let a = 20.1;
// console.log(Number.isInteger(a))
// if(a%1 == 0){
//     console.log('true');
// }else{
//     console.log('false');
// }

// make duplicates
// let arr = [1, 2, 3, 4];
// // console.log(arr.concat(arr));
// let resArr = [];
// for(let i=0; i<10; i++){
//     resArr = resArr.concat(arr);
// }
// console.log(resArr);

// make number reverse
// function reverse(num){
//     // return Number(num.toString().split("").reverse().join(""))
//     let rev = 0;
//     while(num>0){
//        rem = num%10;
//        rev = rev * 10 + rem;
//        num = Math.floor(num/10);
//     }
//     return rev;
// }
// console.log(reverse(12345));

//check string is palindrome or not
// function palindromes(str){
//     var reversed = str.split("").reverse().join("");
//     return reversed === str;
// }
// console.log(palindromes('loop'));
// console.log(palindromes("poop"));

//check array is palindrome or not
// function palindromes(arr) {
//    // revArr = arr.slice().reverse();
//     revArr = [...arr].reverse();
//     return JSON.stringify(revArr) === JSON.stringify(arr);
// }
// console.log(palindromes([1, 2, 3, 2, 1]))

// function alphaSort(str){
//     return str.split('').sort((a, b) => a.localeCompare(b)).join('');
//     // return str.split("").sort().join("");
// }
// console.log(alphaSort('gaurav'));

//capitalize 1st word of string
// function capitalize(str){
//     // var capital = str.split(" ").map((words) => {
//     //     return words.charAt(0).toUpperCase() + words.substring(1);
//     // });
//     // return capital.join(" ")
//     return str.split(" ").map((words) => {
//         return words.charAt(0).toUpperCase() + words.substring(1);
//     }).join(" ")
// }
// console.log(capitalize('kiya haal hai gaurav bhai'))

// occurence in a string
// function occurence(str){
//     var occur = {};
//     str.split("").forEach((ele) => {
//         if(occur.hasOwnProperty(ele) === false){
//             occur[ele] = 1;
//         }else{
//             occur[ele]++;
//         }
//     })
//     return occur;
// }
// console.log(occurence('gaurav'))

//add only number 
// var arr = ['hi', 2, 'hello', 5, 'how are you', 9];
// var sum = 0;
// arr.forEach((ele) => {
//     if(typeof ele === 'number'){
//         sum = sum + ele;
//     }
// })
// console.log(sum);

//remove all gender except male gender from array of object
// var arr = [
//     {name: 'gaurav', gender: 'male'},
//     {name: 'gauri', gender: 'female'},
//     {name: 'saurav', gender: 'male'},
//     {name: 'abc', gender: 'trans'},
//     {name: 'gaury', gender: 'female'},
// ]

// var count = 0;
// arr.forEach((elem) => {
//     if(elem.gender !== 'male') count++;
// })

// for(var i=0; i<=count; i++){
//     for(var j=0; j<arr.length; j++){
//         if(arr[j].gender !== 'male'){
//             arr.splice(j, 1);
//         }
//     }
// }
// console.log(arr);

// function type(ele){
//     return typeof ele;
// }
// console.log(type([]));
// console.log(type(12));
// console.log(type('12'));
// console.log(type(true));
// console.log(type(undefined));
// console.log(type(() => {}));

// function retrieve(arr, n=1){
//     if(n <= arr.length){
//         for(var i=0; i<n; i++){
//             console.log(arr[i])
//         }
//     }else{
//         console.log('invalid number')
//     }
// }
// retrieve([1, 2, 3, 4, 5, 6], 5);

//most frequent number
// function freq(arr){
//     var frequency = {};
//     arr.forEach((ele) => {
//         if(frequency.hasOwnProperty(ele)) frequency[ele]++;
//         else frequency[ele] = 1;
//     })
//     // console.log(frequency)
//     return frequency;
// }
// freq([2, 4, 6, 3, 2, 6, 3, 8, 2]);
// console.log(freq([2, 4, 6, 3, 2, 6, 3, 8, 2]));

// function freq(arr){
//     var frequency = arr.reduce((acc, curr) => {
//         if(!acc[curr]){
//             acc[curr] = 1;
//         }else{
//             acc[curr]++;
//         }
//         return acc;
//     }, {});

//     console.log(frequency);
//     var mostFreq = Object.keys(frequency).reduce((acc, curr) => {
//         return frequency[acc] > frequency[curr] ? acc : curr;
//     })
//        var mostFreqValue = frequency[mostFreq];
//        console.log(mostFreq);
//        console.log(mostFreqValue);
//     return mostFreq;
// }
// console.log(freq([2, 4, 6, 3, 2, 6, 3, 2, 2, 3, 3, 3]));

// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }
// console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7]));

// function union(arr1, arr2){
//     return [...new Set(arr1.concat(arr2))];
// }
// console.log(union([1, 2, 3, 4], [3, 4, 5, 6]));

// function intersection(arr1, arr2) {
//     return arr1.filter(item => arr2.includes(item));
// }
// console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));

// const input1 = {a:1, b:2, c:3, d:10, e:12};
// const input2 = {a:2, e:12, f:6, d:10}
// const output = {d:10, e:12};

// function out(input1, input2){
//     let obj = {};
//     for(let i in input1){
//         // console.log(Object.keys(input2)[1]);
//         // console.log(Object.keys(input2));
//         // console.log(Object.values(input2));
//         // console.log(Object.keys(input1));
//         // console.log(input1);
//         // console.log(input1[i]);
//         if(input1[i] == input2[i]){
//             obj[i] = input1[i];
//         }
//     }
//     return obj;
// }
// console.log(out(input1, input2));

// const input = [1, 2, -2, 11, 7, 1];
// const output = 7;
// const input1 = [1, 4, 7, 2, 4, 7];
// const output1 = 4;

// function secLar(input){
//     let arr = [...new Set(input)].sort((a, b) => a-b);
//     return arr[arr.length-2];
// }
// console.log(secLar(input1));
// //another approach
// function secondLargest(input){
//     let arr = input.sort((a, b) => a-b);
//     console.log(arr);
//     let res = arr[arr.length - 1];
//     for(let i = arr.length-2; i>=0; i--){
//         if(res != arr[i]){
//             res = arr[i];
//             break;
//         }
//     }
//     return res;
// }
// console.log(secondLargest(input));
// console.log(secondLargest(input1));

// const input = [2, 7, 11, 4, -2];
// const output = [11, 4, -2, 2, 7];

// function rotate(input){
//     for(let i=0; i<2; i++){
//         let temp = input[0];
//         for(let i=0; i<input.length; i++){
//             input[i] = input[i+1];
//         }
//         input[input.length-1] = temp;
//     }
//     return input;
// }
// console.log(rotate(input));

// const input = [2, 7, 11, 4, -2];
// const output = [20, 15, 11, 18, 24];

// function sum(input){
//     let sum = 0;
//     let newArr = [];
//     for(let i=0; i<input.length; i++){
//         sum = sum + input[i];
//     }
//     for(let i=0; i<input.length; i++){
//         newArr.push(sum - input[i]);
//     }
//     return newArr;
// }
// console.log(sum(input));

// const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     let currentDay = 0;

//     function changeDay() {
//       currentDay = (currentDay + 1) % daysOfWeek.length;
//       document.getElementById('day').textContent = daysOfWeek[currentDay];
//     }

// const colors = ['red', 'green', 'blue', 'orange', 'purple'];
// let currentColor = 0;

// function changeColor() {
//     currentColor = (currentColor + 1) % colors.length;
//     document.getElementById('box').style.backgroundColor = colors[currentColor];
// }

// a = 1;
// alert('a='+a)
// var a;
// "use strict";
// console.log(a);
// var a = 10;
// x = 23;
// console.log(x); // Outputs "undefined" since the initialization of "x" is not hoisted
// var x;

// function hello(){
//     setTimeout(() => console.log(1), 2000);  // Scheduled for 2 seconds later
//     console.log(2);
//     setTimeout(() => console.log(3), 0);    // Scheduled for immediate execution
//     console.log(4);
//   };
//   hello();
// function runFunc(){
//     console.log(typeof ("1" + 1));//11 
// //     console.log(typeof ("2" - 1));
//     console.log(typeof (5 - '1')); 
//     console.log(5 - 'A');
//     console.log(5 + '1');
//     console.log('5' + 1);
//     console.log('5' - 1);
//     console.log(5 - '1');
//     console.log(typeof ("A" - 1));
//     console.log(2 + "-2" + "2");//2-22
//     console.log("Hello" - "World" + 78);//78
//     console.log("Hello" + "World" + 78);//78
//     console.log("Hello"+ "78");//hello78
//     // -: string to Number
//     // +: number to string
//     //kabhi bhi 2 string ko minus nhi karte hai
//   }
//   runFunc();

// var x = 23;

// (function(){
//   var x = 43;
//   (function random(){
//     x++;
//     console.log(x);
//     var x = 21;
//   })();
// })(); 
// let hero = {
//     powerLevel: 99,
//     getPower(){
//       return this.powerLevel;
//     }
// }
// console.log(hero.getPower());
//   let getPower = hero.getPower;

//   let hero2 = {powerLevel:42};
//   console.log(getPower.apply(hero2));

// let ageInterval;

// function calculateAge() {
//     const dobInput = document.getElementById("dob");
//     const tobInput = document.getElementById("tob");
//     const errorDisplay = document.getElementById("error");
//     const ageDisplay = document.getElementById("age-display");

//     const dobValue = dobInput.value;
//     const tobValue = tobInput.value;

//     // Clear any existing error message
//     errorDisplay.textContent = "";

//     // Stop the existing interval if any
//     if (ageInterval) {
//         clearInterval(ageInterval);
//     }

//     // Validate that both date and time are provided
//     if (!dobValue || !tobValue) {
//         errorDisplay.textContent = "Please provide both date and time of birth.";
//         ageDisplay.textContent = "--";
//         return;
//     }

//     // Calculate the user's age
//     const dob = new Date(dobValue + "T" + tobValue + ":00Z");
//     const currentTime = new Date();

//     // Check if the entered date is in the future
//     if (dob > currentTime) {
//         errorDisplay.textContent = "Your entered date/time is in the future. Please enter a valid date/time of birth.";
//         ageDisplay.textContent = "--";
//         return;
//     }

//     ageInterval = setInterval(() => {
//         const currentTime = new Date();
//         const ageInMilliseconds = currentTime - dob;
//         const ageInSeconds = ageInMilliseconds / 1000;
//         const ageInYears = ageInSeconds / 31536000; // Approximately 31,536,000 seconds in a year

//         ageDisplay.textContent = ageInYears.toFixed(9); // Displaying age with millisecond precision
//     }, 1); // Update the age every millisecond
// }
// const recipeList = document.getElementById('recipeList');
//   const recipeReadyInMinutes = document.getElementById('recipeReadyInMinutes');

//   function fetchData() {
//     fetch('https://content.newtonschool.co/v1/pr/64996337e889f331d43f70ba/recipes')
//       .then((response) => response.json())
//       .then((data) => {
//         data.forEach((recipe) => {
//           const listItem = document.createElement('li');
//           listItem.textContent = recipe.title;
//           listItem.addEventListener('click', () => {
//             recipeReadyInMinutes.textContent = `Ready in minutes: ${recipe.readyInMinutes}`;
//           });
//           recipeList.appendChild(listItem);
//         });
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }

//   fetchData();
// function getData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('Data received!');
//     }, 2000);
//   });
// }

// document.getElementById('getDataButton').addEventListener('click', () => {
//   document.getElementById('output').textContent = 'Loading...'; // Display "Loading..." while waiting for data
//   getData().then(data => {
//     document.getElementById('output').textContent = data;
//   });
// });
// javascript code goes here
// document.getElementById('showButton').addEventListener('click', function() {
//   const inputArea = document.getElementById('inputArea');
//   const output = document.getElementById('output');
//   const agesString = inputArea.value;
  
//   // Check if input is empty
//   if (agesString.trim() === '') {
//     output.textContent = 'Please enter ages separated by commas.';
//     return;
//   }
  
//   // Split the input string by commas and convert to an array of integers
//   const ages = agesString.split(',').map(age => parseInt(age.trim()));
  
//   // Filter out any NaN values (non-numeric inputs)
//   const validAges = ages.filter(age => !isNaN(age));
  
//   // Sort the ages in descending order
//   validAges.sort((a, b) => b - a);
  
//   // Display the three largest ages
//   if (validAges.length === 0) {
//     output.textContent = 'No valid ages entered.';
//   } else if (validAges.length <= 3) {
//     output.textContent = 'All ages in descending order: ' + validAges.join(', ');
//   } else {
//     const largestAges = validAges.slice(0, 3);
//     output.textContent = 'Three largest ages: ' + largestAges.join(', ');
//   }
// });

// let obj = { id: "1", name: "user22", age: "26", work: "programmer" };

// // Extract keys and values into separate arrays
// let keysArray = Object.keys(obj);
// let valuesArray = Object.values(obj);

// console.log("Keys:", keysArray);
// console.log("Values:", valuesArray);

// let obj = { id: "1", name: "user22", age: "26", work: "programmer" };

// // Use map to extract keys and values from entries
// let entriesArray = Object.entries(obj);
// console.log(entriesArray)
// let keysArray = entriesArray.map(([key, value]) => key);
// let valuesArray = entriesArray.map(([key, value]) => value);

// console.log("Keys:", keysArray);
// console.log("Values:", valuesArray);

// function func1(){
//     setTimeout(() => {
//         console.log(x);
//         console.log(y);
//     }, 3000);
//     var x = 10;
//     let y = 20;
// }
// func1();
// function func1(){
//     setTimeout(() => {
        // console.log(x);
        // console.log(y);
//     }, 3000);
//     var x = 10;
//     let y = 20;
// }
// func1();

// let obj = { id: "1", name: "user22", age: "26", work: "programmer" };
// let a = [];
// let b = [];
// for(var key in obj){
// var x = a.push(obj[key]);
// var y = b.push(key);
// }
// console.log(a);
// console.log(b);

// let c = { 
//     greeting: 'Good Morning!' 
// };
// let d;

// d = c;
// c.greeting = 'Good Evening';
// console.log(d.greeting);
// console.log(c.greeting);

// for (let i = 1; i < 6; i++) {
//     if (i === 1) {
//        continue;
//     }
//     console.log(i);
//    }

// let a = 10;
// console.log(++a);
// console.log(a);
// console.log(a++);
// console.log(a);

// function greeting() {
//     // return 'hello'
//     throw 'hey'
//    }
   
//    function sayHi() {
//     try {
//       const data = greeting();
//       console.log('It worked!', data);
//     } catch (e) {
//       console.log('Oh no an error:', e);
//     }
//    }
//    sayHi();