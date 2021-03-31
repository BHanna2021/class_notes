// Conditional statements - if, if else/else if, switch, ternary

//IF STATEMENTS
//checks for a boolean value, if something is true it is truthy(a truthy statement), or falsy
//Truthy, if condition is or can be true
//Falsy, if condition is false or can be false
//Some falsy expressions are: null, NaN(not a number), 0, an empty string(" "), undefined

//If a condition is true, them JS will execute(perform) the code block
//If checks one, singular, condition

//Declare a variable
let isOpen = false;

if (isOpen === true) {
    console.log('The door is open.');
};

if (isOpen) {
    console.log('The door is open.');
};

//can test false values
if (isOpen === false) {
    console.log('The door is closed.');
};

if (isOpen === true) {
    console.log('The door is open.');
} else {
    console.log('The door is closed.');
};

//IF ELSE
//If else is used to check a condition, but run a code block for either the met condition or a separate code block if it does not meet the condition.

let isOpen = true;

if (isOpen === true) {
    console.log('Go on in!');
} else {
    console.log('Please knock.');
};

let temp = 50;

if (temp >= 65) {
    console.log('Go outside and enjoy the weather!');
} else {
    console.log('Might as well stay inside with hot cocoa.');
};

// ELSE IF
//Else if is used to allow us to check more than two conditions
//Examples: Day 2 Challenge, Fizz Buzz Challenge

let temp = 15;

if (temp >= 80) {
    console.log('I need to put shorts on.');
} else if (temp >= 65) {
    console.log('Go outside and enjoy the weather!');
} else if (temp >= 50) {
    console.log('Brrr, need a jacket.')
} else {
    console.log('Might as well stay inside with hot cocoa.');
};

let userName = "myUsername";
let password = "myPassword";

if (userName === "myUsername" && password === "myPassword") {
    console.log(`Welcome back, ${userName}!`);
} else if (userName === "myUsername") {
    console.log('The password entered is incorrect.');
} else {
    console.log('You are not in our database, would you like to sign up?');
}

//SWITCH STATEMENTS
//Switch statements execute a block of code depending on the 'cases'; condition met? check against cases
//use case (condition): starts code block
//break - to end code block
//Example: Fizz Buzz
//Default - code to be run if no cases met, good practice to have

let favColor = 'pink';

switch (favColor) {
    case 'blue':
        console.log('Blue like the sky.');
        break;
    case 'green':
        console.log('Green like the grass.');
        break;
    case 'pink':
        console.log('Pink like bubblegum.');
        break;
    default:
        console.log(`${favColor} is beautiful too.`);
};

let doYouLikePizza = 'maybe';

switch (doYouLikePizza) {
    case 'yes':
    case 'yeah':
    case 'duh':
        console.log('Me too! I love pizza!');
        break;
    case 'no':
    case 'nope':
    case 'nah':
        console.log('More for me!');
        break;
    default:
        console.log('Do you need me to repeat the question?');
}

//TERNARY
//Concise way to check two (or more) conditions using the syntax of the ? and :
/*Structure:
(condition) ? (codeToRunIfTrue/Truthy) : (codeToRunIffalse/Falsy)
*/

let temp = 70;

//Ternary
(temp > 75) ? console.log('Indiana summer temps'): console.log('Indiana spring temps');

//If else
if (temp > 75) {
    console.log('Indiana summer temps');
} else {
    console.log('Indiana spring temps');
};

let num = 0;
(num > 0) ? console.log('Positive number'):
    (num < 0) ? console.log('Negative number') :
    console.log('Number is 0, neutral');


// LOOPS
//For loop - a quick and easy way to iterate or 'loop' over something, to do it repeatedly
// Infinite loops are possible(best to avoid): ctrl + C or close VS Code
/* Loops take in three parameters, each separated by a semicolon:
1. Initial expression
2. Condition
3. Increment(or decrement) expression
*/

for (i = 0; i <= 10; i++) {
    console.log(i);
};

for (i = 10; i >= 0; i--) {
    console.log(i);
};

//Challenge: use a for loop to count to 20 by 2s

for (i = 0; i <= 20; i += 2) {
    console.log(i);
};

//Printing each letter with a loop

let word = "Fantastic";

for (let i = 0; i < word.length; i++) {
    //console.log(i);  //this retrieves the index of the string not the value
    console.log(word[i]); //this is use to get the letter/value
}