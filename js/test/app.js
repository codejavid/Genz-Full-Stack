

// var   → old, unsafe, weird
// let   → modern, changeable
// const → modern, fixed reference


// var age = 15;

// age = 20;


// console.log(age);

// Block scope
// if(true){
//    var city = "Chennai";
//    let city = "Chennai";

//    console.log(city);
// }
// console.log(window);
// console.log(city);


// let age = 5;
// age = 10;

// console.log(age);

// var age = 5;
// var age = 10;

// console.log(age);

// let age = 5;

// let age = 10;

// console.log(age);


// const PI = 3.14;
// const PI= 123;
// console.log(PI);

// const user = {
//     name:"Javid"
// }

// console.log(user.name);

// const user = {};

// const user = "kjsakjdl";

// user.name = "Jagan";

// console.log(user.name);



// console.log(a);
// var a = "aaa";


// console.log(a);

// console.log(a);
// let a = "aaa";

// test();

// function test(){
//     console.log("test");
// }

// test();

// let test = function(){
//     console.log("Test");
// }


// let nums = [1, 2, 3];

// let doubled = nums.map(function(n){
//     return n * 2;
// });

// nums.forEach((number,index,arr) => console.log(number, index, arr));

// console.log(nums);
// console.log(doubled);

// let nums = [1, 2, 3];
// let sum = nums.reduce((total, n) => total + n, 1);


// console.log(sum);

// const arr = [1,2,3];

// const [a,b] = [10,20];

// console.log(a);

// const object = {
//     name:"Javid",
//     age:29
// }

// const {name, age, x} = object;

// console.log(name, age, x);

// const a = [1,2];

// console.log(a);

// const b = [...a,3];
// console.log(b);

// let user = { name: "Javid" };
// let newUser = { ...user, age: 15 };

// console.log(user)
// console.log(newUser)

// const input = document.querySelector("#name");
// const btn = document.querySelector("#btn");

// btn.addEventListener("click", () => {
//   console.log(input.value);
// });


// const li = document.createElement("li");

// li.innerText = "New Item";

// document.body.appendChild(li);

// console.log(document.getElementById("demo").textContent);
// console.log(document.getElementById("demo").innerText);

// console.log("A");
// console.log("B");
// console.log("C");


// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 0);

// console.log("C");


// function sum(...numbers) {

//   console.log(numbers);
  
// }

// sum(1,2,3);

// const name = "Javid";
// // const user = { name: name };
// const user = { name };

// console.log(user);


// let testObj = {
//   name:"test"
// };

// console.log(testObj.age);

// let a = 10;



// function foo() {
//   let b = 20;
//   console.log(a + b);
// }


// foo();

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHi = function () {
//   console.log("Hi " + this.name);
// };

// const p1 = new Person("Javid");
// console.log(p1);
// p1.sayHi();

// By value copy

// let a = "im a";

// console.log(a);

// let b = a;

// console.log(b);

// a = "Hello";

// console.log(a);
// console.log(b);

// By reference

// let c = {
//   name:"Hello"
// }

// let d = c;

// c.name = "Hai";

// console.log(c);
// console.log(d);


// function Person(name) {
//   this.name = name
// }

// Person.prototype.sayHi = function () {
//   console.log("Hi " + this.name);
// };

// const p1 = new Person("Javid");
// const p2 = new Person("Jagan");

// console.log(p1);
// console.log(p2);
// console.log(p1);

// console.log(window);


// this.alert(123);
// window.alert(456);
// alert(789)







