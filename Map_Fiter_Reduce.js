// const users = [
//     { firstName: 'gaurav', lastName: 'garg', age: '27' },
//     { firstName: 'dheeraj', lastName: 'garg', age: '25' },
//     { firstName: 'yogesh', lastName: 'garg', age: '29' },
//     { firstName: 'sonal', lastName: 'garg', age: '29' },
// ];

// users.map((user) => {
//     console.log(user.firstName + " " + user.lastName);
// });
// users.filter((user) => user.age > 25).map((data) => {
//     console.log(data.firstName + " " + data.lastName);
// })


//  const outputs = users.reduce((acc, curr) => {
//     if (curr.age < 29) {
//         acc.push(curr.firstName)
//     }
//     return acc;
// }, [])
// console.log(outputs);

//  const output = users.reduce((acc, curr) =>  {
//         if(acc[curr.age]){
//             acc[curr.age] += acc[curr.age];
//         }else{
//             acc[curr.age] = 1
//         }
//         return acc;
//     }, {})
//     console.log(output);
  
// function x(){
//     for(var i = 1; i<5; i++){
//         setTimeout(function y(){
//             console.log(i)
//         }, 0);
//     } 
//     console.log("hello")
// }
// x();

// function y(){
//     for(let i = 1; i<5; i++){
//         setTimeout(function y(){
//             console.log(i)
//         }, 0);
//     } 
//     console.log("hello")
// }
// y();

// array = [10, 20, 30, 40];
// value >= 15
// o/p => [15,20]

// const array =  [10, 20, 30, 40];
// const output = array.map((item)=> {
//     return item / 2}
//     );
//     console.log(output)
//    const devidedBy2= output.filter((data)=> data >=15)
//    console.log(devidedBy2)

// const arr=[1,2,3,4,5];
// const output = arr.map((e)=> {return e*2})
// console.log(output);
// const odd = arr.filter((e)=> e % 2  && e > 4)
// console.log(odd);
// const sum=arr.reduce((acc,curr)=>{
//     acc+=curr;
//     return acc;
// })
// console.log(sum);

// const users=[
//     {firstName:"john",lastName:"Biden",age:26},
//     {firstName:"jimmy",lastName:"cob",age:75},
//     {firstName:"sam",lastName:"lewis",age:50},
//     {firstName:"Ronald",lastName:"Mathew",age:26},  
//   ];
//   const output = users.reduce((acc,curr)=>{
//     if(acc[curr.age]){
//         acc[curr.age]++;
//     }
//     else{
//         acc[curr.age]=1;
//     }
//     return acc;
//   },{})
//   console.log(output);
// const greater = users.filter((x)=>x.age>30).map((e)=>e.age);
// console.log(greater);

// const people = [
//   { name: "John", age: 30 },
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 35 },
// ];
// const sortedNames = people
//   .map(item => item.name) // Extract the names
//   .sort((a, b) => a.localeCompare(b)); // Sort the names
// console.log(sortedNames);

//  const nameSort = people
//  .map(item => ({ ...item })) // Create a shallow copy of the objects
//  .sort((a, b) => a.name.localeCompare(b.name)) // Sort based on the name property
//   console.log(nameSort);

// const nameSort = people.sort((a, b) => {
//   // Convert names to lowercase for case-insensitive sorting
//   const nameA = a.name.toLowerCase();
//   const nameB = b.name.toLowerCase();
  
//   if (nameA < nameB) return -1;
//   if (nameA > nameB) return 1;
//   return 0;
// });
// console.log(nameSort);


// people = [
//      { name: "John", age: 30 },
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 35 },
//   ];
//  const b= people.map((item)=>item.age).sort((a,b)=>b-a);
//  console.log(b)

  // const numbers = [5, 3, 9, 1, 8];
  // const ans=numbers.reduce((acc,curr)=>{
  //   if(curr > acc){
  //     return curr;
  //   }else{
  //     return acc;
  //   }
  // });
  // console.log(ans);

//   let a=25;
// const output = Number.isInteger(a);
// console.log(output);
//   if(a % 1 == 0){
//     console.log("true");
//   }else{
//     console.log("false");
//   }

  // var str = 'sare jaha se acha hindustan hamara';
  // const output=str.split(" ").map((e)=>e.split("").reverse().join("")).join(" ");
  // console.log(output);

  // var a = {};
  // var b = [];
  // console.log( Array.isArray(a),Array.isArray(b));

  // let arr = [1,2,3,4,5];
  //  arr.length=0;
  // console.log(arr);

  // let arr = [1,2,3,4,5];
  // let res=[];
  // for(let i=0;i<=10;i++){
  //   res = res.concat(arr)
  // }
  // console.log(res);

  // let a = 12345;
  // let b=a.toString().split("").reverse().join("");
  // console.log(Number(b));

//   function reverse(num){
//     // return Number(num.toString().split("").reverse().join(""))
//     let rev = 0;
//     while(num!=0){
//        rem = num%10;
//        rev = rev * 10 + rem;
//        num = Math.floor(num/10);
//     }
//     return rev;
// }
// console.log(reverse(12345));

// let arr = [1,2,3,2,1];
// let a=arr.slice();
// let b=a.reverse();
// if(JSON.stringify(arr) == JSON.stringify(b)){
//   console.log("isPalindrome!!!!")
//    }else{
//    console.log("Not Palindrome!!")
//   }

// function fun(a){
//   return a.split("").sort().join("");
// }
// console.log(fun("divya"))

//  let num = "divya";
//  const b=num.split("").sort((a,b)=> a.localeCompare(b)).join("");
//  console.log(b)

// var str = 'sare jaha se acha hindustan hamara';
// let output= str.split(" ").map((e)=> e.charAt(0).toUpperCase() + e.substring(1)).join(" ");
// console.log(output);

// var str = "gaurav";
// var b=str.split("").reduce((acc,curr)=>{
//   if(acc[curr]){
//     acc[curr]++;
//   }else{
//     acc[curr]=1;
//   }
//   return acc;
// },{});
// console.log(b);

// function occurence(str){
//       var occur = {};
//       str.split("").forEach((ele) => {
//           if(occur.hasOwnProperty(ele) === false){
//               occur[ele] = 1;
//           }else{
//               occur[ele]++;
//           }
//       })
//       return occur;
//   }
//   console.log(occurence('gaurav'))

// function occurrence(str) {
//   return str.split("").reduce((acc, curr) => {
//     // acc[curr] = (acc[curr] || 0) + 1;
//     if(acc[curr]){
//       acc[curr]++;
//     }else{
//       acc[curr]=1;
//     }
//     return acc;
//   }, {});
// }
// console.log(occurrence('gaurav'));

// var arr = ['hi', 2, 'hello', 5, 'how are you', 9];
// let sum="";
// for(let i=0;i<arr.length;i++){
//   if(typeof arr[i] === "string"){
//     sum = sum.concat(arr[i]);
//   }
// }
// console.log(sum);

// var arr = [
//     {name: 'gaurav', gender: 'male'},
//     {name: 'gauri', gender: 'female'},
//     {name: 'saurav', gender: 'male'},
//     {name: 'abc', gender: 'trans'},
//     {name: 'gaury', gender: 'female'},
// ]

// var output=arr.reduce((acc,curr)=>{
//   if (curr.gender === 'male') {
//     // acc++;
//     acc.push({ name: curr.name, gender: curr.gender });
//   }
//   return acc;
// },[]);

// console.log(output)