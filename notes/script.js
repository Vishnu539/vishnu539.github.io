console.log("You can check the JS notes in my GitHub repo.")


// alert("Running");

// let arr = ["A", "B", "c", "D"];

// console.log("FOR LOOP");
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i], i);
// }
// ///

// console.log("");
// console.log("FOR OF LOOP");
// for(let n of arr){
//     console.log(n)
// }
// ///

// console.log("");
// console.log("FOR IN LOOP");
// for(let i in arr){
//     console.log(i);
// }

// Practice question 1
// console.log("");
// console.log("Practice question 1");
// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (let i of marks) {
//     sum = sum + i;
// }
// let average = sum / marks.length;
// console.log("Total marks:",sum);
// console.log("Average marks:",average);

// //Practice question 2
// console.log("");
// console.log("Practice question 2");

// let items = [250, 645, 300, 900, 50];

// for(i of items){
//     console.log("Items price:",i);
// }
// for (let i = 0; i < items.length; i++) {
//     let offer = items[i] / 10;
//     items[i] -= offer;
//     console.log("Discounted price:",items[i]);
// }
// console.log("");

///ARRAY Methods
// let a = ['A', 'B', 'C', 'D'];
// console.log(a);

// a.push('E', 'F');
// console.log("Push:",a);

// a.pop();
// console.log("Pop:",a);

// console.log("toString:",a.toString());

// console.log("");

//Practice question 3
// console.log("Practice question 3");

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// console.log("Companies:",companies);
// companies.shift();
// console.log("Companies:",companies);
// companies[1] = "Ola";
// console.log("Companies:",companies);
// companies.push("Amazon");
// console.log("Companies:",companies);
// console.log("")


/// FUNCTIONS
// let a = parseInt(prompt("Enter a number:"));
// let b = parseInt(prompt("Enter another number:"));
// let choice = parseInt(prompt("Enter your choice:"));

// switch(choice){
//     case 1:
//         add(a,b);
//         break;

//     case 2:
//         mul(a,b);
//         break;
// }

// function add(a, b) {
//     let ans = a + b;
//     console.log("Sum:",ans);
// }

// function mul(a, b) {
//     let res = a * b;
//     console.log("Mul:", res);
// };

///Practice question 4
// console.log("Practice question 4")
// let str = prompt("Enter a srting:");
// let res = vowelCount(str);
// console.log("No.of vowels:",res);

// function vowelCount(str) {
//     let count = 0;
//     for (let i of str){
//         if (i == 'a' || i == 'e' || i == 'i' || i == 'o' ||  i == 'u') {
//             console.log(i);
//             count++;
//         }
//     }
//     return count;
// }


///Practice question 5
// console.log("Practice question 5");
// let studentMarks = [99, 80, 93, 90, 77, 95];
// let result = studentMarks.filter(val => val > 90);
// console.log("Student marks:",studentMarks);
// console.log("Filtered list:", result);

// //Pracice question 6
// console.log(" ");
// console.log("Practice question 6");
// let num = parseInt(prompt("Enter a number:"));
// let arrayNums = [];

// for(let i = 1; i <= num; i++) {
//     arrayNums[i - 1] = i;
// }

// console.log(arrayNums);


/// DOM - Document Object Model
/// DOM Manipulation
// let element = document.querySelector("p");
// console.log(element);

// let div = document.querySelectorAll("div");
// console.dir(div);

// let newBtn = document.createElement("button");
// newBtn.innerText = 'click me!';
// newBtn.style.backgroundColor = 'red';
// newBtn.style.color = 'white';

// let body = document.querySelector("body");
// body.prepend(newBtn);

// let para = document.querySelector("p");
// para.setAttribute("class", "newClass");


// EVENTS: The change in the state of an object. //
// Types of events: mouse, keyboard, form and print events.

// let btn = document.querySelector("button");
// let mode = "Light";

// btn.addEventListener("click", () => {
//     if(mode == "Light") {
//         mode = "Dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     }
//     else {
//         mode = "Light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }   
    
//     console.log(mode);
// })


/// Prototypes in JS
// A JavaScript object is an entity having state and behaviour.
// JS objects have a special property called prototype.
// We can set prototype using __proto__
// const car = {
//     start : true,
//     stop : false,
//     color() {
//         console.log("Car is black");
//     },
// };

// const nissan = {
//     start : true,
//     stop : false,
// }

// nissan.__proto__ = car;



/// Classes in JS
// Class is a program code template for creating objects.
// Those objects will have state (variables) & some behaviour (functions)inside it.
// class Car {
//     constructor(brand, color) {
//         this.brand = brand;
//         this.color = color;
//         console.log(brand, color);
//     }

//     start() {
//         console.log("vehicle starts.");
//     }

//     stop() {
//         console.log("vehicle stops.");
//     }

//     color() {
//         console.log("vehicle is white");
//     }
// }

// let toyota = new Car("fortuner", "white");


/// Inheritance in JS
// Passing down properties & methods from parent class to child class.

// class parent {
//     constructor() {
//         console.log("In parent class");
//     }
// }

// class child extends parent {
//      constructor() {
//         super();
//         console.log("In child class");
//      }
// }

// let obj = new child();


/// Practice questions
// PQ - 1
// class User {
//     constructor(name, mail) {
//         this.name = name;
//         this.mail = mail;
//     }

//     viewName() {
//         console.log("Student name: ", this.name);
//     }

//     viewMail() {
//         console.log("Student email: ", this.mail);
//     }

//     viewData () {
//         console.log(this.name, "\n", this.mail);
//     }
// };

// let std = new User("vishnu", "vishnuchilakala444@gmail.com");


/// Error handling (try - catch)
// let a = 10, b = 20;
// console.log(a);
// console.log(b);
// console.log(a + b);
// console.log("Before try block");
// try {
//     console.log(a + c);
// }

// catch (error){
//     // console.log(error);
//     console.log("C is not defined.");
// }
// console.log("After try block");


/// Sync in JS
// Synchronous means the code runs in a particular sequence of instructions given in the program. Each instruction wait for the previous instruction to complete its execution.
// Asynchronous: Due to synchronous programming, sometimes important instructions get blocked due to some previous instructions, which causes a delay in the UI. Asynchronous code execution allows to execute next instructions immediatley and doesn't block the flow.

// setTimeout( () => {
//     console.log("Hello JS ");
// }, 3000);

/// Callback: It is a function passed as an argument to another function.

// function sum(a, b) {
//     console.log("sum: ", a + b);
// };

// function calc(a, b, sumCallBack) {
//     sumCallBack(a, b);
// };

// calc(10, 20, sum); // Here the sum function is passed as an argument to another function called calc.


/// Callback Hell: Nested callbacks stacked below one another froming a pyramid structure (Pyramid of Doom). This style of programming becomes difficult to understand & manage. 

// function getData(dataId, getNextData) {
//     setTimeout( () => {
//         console.log("Data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 1000);
// }

// getData(1, () => {
//     console.log("Getting data 2...");
//     getData(2, () => {
//         console.log("Getting data 3...");
//         getData(3, () => {
//             console.log("Getting data 4...");
//             getData(4);
//         });
//     });
// });


/// Promises: It is for "eventual" completion of task. It is an object in JS. It is a solution to callback hell.
// resolve and reject are callbacks provided by JS.


// const getPromise = () => {
//     let promise = new Promise( (resolve, reject) => {
//         console.log("Promise");
//         resolve("Resolved");
//         reject("Rejected.");
//     });
// };

// let promise = getPromise();
// promise.then( (res) => {
//     console.log("Promise fulfiller ", res);
// });

// promise.catch( (err) => {
//     console.log("Promise rejected ", err);
// });


// function asyncFunction() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             console.log("Data 1 fetched.");
//             resolve("Success");
//         }, 3000);
//     });
// };

// console.log("Fetching data...");
// let p1 = asyncFunction();
// p1.then( (res) => {
//     console.log(res);
// }); 

// Promise chaining (similar to callback hell)

// function asyncFunction2() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             console.log("Data 2 fetched.");
//             resolve("Successful.");
//         }, 3000)
//     });
// };

// console.log("Fetching data 1...");
// asyncFunction().then( (res) => {
//     console.log("Fetching data 2...");
//     asyncFunction2().then( (res) => {});
// });


/// Async - Await
// Async function always returns a promise.
// Await pauses the execution of its surrounding async function untill the promise is settled.

// function api(dataId) {
//     return new Promise( (resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather data: ", dataId);
//             resolve("200");
//         }, 2000);
//     });
// };

// async function getApi() {
//     console.log("Getting weather data 1");
//     await api(1);

//     console.log("Getting weather data 2");
//     await api(2);
// }


/// Callback hell >>> Promise chain >>> Async - Await. 
/// IIFE: Immediately Invoked Function Expression.
// IIFE is a function that is called immediately as soon as it is defined. It is only called once.

// (function disp() {
//     console.log("IIFE running");
// })();


/// API in JS - Application Programming Interface.
// The fetch API provides an interface for fetching (sending/receiving) resources. It uses request and response objects.
// The fetch() method is used to fetch a resource (data).

// const URL = "https://cat-fact.herokuapp.com";
// let prom = fetch(URL);
// console.log(prom);

// const getFacts = async () => {
//     console.log("Getting data...");
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//     console.log(data[0].text);
// };


// AJAX is Asynchronoys JS & XML.
// JSON is JavaScript Object Notation.
// json() method returns a second promise that resolves with the result of parsing the response body text as JSON. (Input is JSON, output is JS object)

// Higher order functions: Functions that accepts another function as arguments or return functions.

// function higherOrder() {
//     abc(); //calling another function.
// }

// function abc() {
//     console.log("Hi JS");
// }

// higherOrder(abc);

// Constructor functions: Functions which are used as templates to create new objects which have their own properties and the properties of the constructor function.

// function Biscuit(shape) {
//     this.shape = shape; // This property varies for each new object accordingly.
//     this.width = 15;
//     this.height = 22;
//     this.taste = "sweet";
// };

// let bis1 = new Biscuit("Rectangle");
// let bis2 = new Biscuit("Circle");

// First class functions: A function is said to be first class function when it is stored as a variable. We can pass it as arguments to other functions.

// const arith = {
//     add: (a, b) => {
//         return a + b;
//     },

//     sub: (a, b) => {
//         return a - b;
//     }
// }

// console.log(arith.add(10, 20));
// console.log(arith.sub(20, 5));


// IIFE: Any variable that is defined in this block will be private by default.

// let ans = (function() {
//     var privateVar = 10;
//     return {
//         getter: function() {
//             console.log(privateVar);
//         },

//         setter: function(val) {
//             privateVar = val;
//         }
//     }
// }) ();

// Prototype: Every object that is created in JS will get a property called Prototype automatically. It contains many helper properties and methods which are used to complete our tasks.

// Prototypal inheritance: Applying inheritance using prototype. We write .__proto__ to apply prototypal inheritance to child object from parent object.

// const parent = {
//     name: "Parent",
//     eyes: 'black',
//     hair: 'brown'
// };

// const child = {
//     name: 'child'
// }

// child.__proto__ = parent;


// Global and local variables

// let a = 10; // global scope

// (function() {
//     console.log("global variable: ", a);

//     let b = 20; // Local scope
//     console.log("Local variable: ", b);
// }) ();

// console.log("A: ", a);
// console.log("B: ", b); // We cannot access b outside the function as it is declared inside the function scope.


// "this" keyword
// console.log("Global scope", this); // this in global scope.

// (function() {
//     console.log("Function scope: ", this); // this in function scope
// }) ();

// var obj = {
//     name: 'vishnu',
//     method: function() {
//         console.log("Method scope: ", this); // this in method scope.
//     }
// }
// obj.method();


// call apply bind
// call: we know that "this" in a function scope, by default, points to window. But we can change the value of "this" in a function by using "call" keyword and point it to a specified object.

// function func() {
//     console.log(this); // Prints window
// }

// let obj2 = {name: 'vishnu'};
// func.call(obj2); // Now "this" of func() points to obj.

// apply: Same as call. But in apply, we should only use two arguments - object and array. The first argument object will point to "this" and all the arguments of the functions will passed in the array.
// function func2(a, b, c) {
//     console.log(this, a, b, c);
// }

// let obj3 = {
//     name: 'harsha'
// }
// func2.apply(obj3, [10, true, 'vishnu']);


// bind: Mostly used in React. Same as call and apply. Bind will not be executed. It "binds" the two functions and will be stored in a variable. This variable can be used elsewhere in the program.
// let binded = func.bind(obj3);
// binded();


// Pure functions: It has 2 features - 1. It should always return same output for same input and 2. It will never change/update the value of a global variable.
let pureVariable = 'I am pure variable';

// function pureFunction(a, b) {
//     let temp = pureVariable;
//     console.log(temp);
//     return a + b;
// }

// let ans1 = pureFunction(10, 20);
// let ans2 = pureFunction(10, 20);

// // Impure functions: Any function which does not follow the features of pure function is an impure function.
// let global = 'I am global variable';

// function impureFunction() {
//     global = 'I became impure variable';
//     console.log(global);
// }



///DOM Practice
// let ab = document.querySelector("h1");
// ab.setAttribute("style", "font-size:30px; color:white");
// ab.addEventListener("click", () => {
//     console.log("Clicked on h1");
// });

// Important topics to learn:

// Dynamic heading size
// Flexible cards
// SVG icons: fontawesome
// Snap scrolling
// Scale up or down