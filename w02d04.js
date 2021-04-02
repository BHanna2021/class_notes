// Day 04 Functions; Scope; Hoisting; and Literals

//Literals
//They represent values in JS that have been hardcoded

let butlerMascot = 'Bulldog';
let myAge = 30;
let arr = [1, 2, 3, 4];

//Hoisting
/*
- General way of thinking about how code creation and execution works in JS
- JS puts variable declarations and function declarations into memory during compile phase of the code.
  */

//Functions
//to call a function

sayHello();

function sayHello() {
    console.log("This is a function declaration.")
};

//function expression:
let func = function() {
    console.log('This is a function expression')
}

func();

//Scope
//Hierarchy of variables in our code - commonly referred to as global scope, local scope, parent scope, and child scope

let coffeeOrigin = 'Ethiopia'; //global scope

function exampleFunction() {
    let x = 'Local scope - declared inside function'
    console.log(x);

}


//Functions
//block of code designed to perform a particular task