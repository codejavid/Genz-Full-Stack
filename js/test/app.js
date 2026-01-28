

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

let nums = [1, 2, 3];
let sum = nums.reduce((total, n) => total + n, 1);


console.log(sum);
