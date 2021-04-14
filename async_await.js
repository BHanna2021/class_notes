// // Asynchronous JS Functions
// /*
//     - async returns a Promise
//     - await makes function wait for a Promise
// */

// function standardFunction() {
//     return console.log("1 This is a standard function.")
// }

// standardFunction();

// async function asyncFunction() {
//     return console.log("2 This returns a promise.")
// }

// asyncFunction();

// // async function asyncFunction() {
// //     return Promise.reject("This is resolved")
// // }

// async function asyncAction() {
//     setTimeout(() => {
//         return console.log("3 Async finally hit ya!")
//     }, 3000);
// }
// asyncAction();

//Promise
/*
Commit to something
    - completed -> resolved
    - rejected
*/

// let p = new Promise((resolve, reject) => {
//     //Promise object with one function with resolve & reject parameters
//     let a = 1 + 2
//     if (a === 2) {
//         resolve("Promise successful and Resolved")
//     } else {
//         reject("Promise rejected")
//     }
// });

// p.then((message) => {
//     //anything inside .then is a resolve. Takes a function w/a single param
//     console.log(`this is the then ${message}`)
// }).catch((message) => {
//     console.log(`This is the .catch ${message}`)
// })

// try {
//     //tests a block of code
//     callingPretendFunction()
//     console.log("Start of the try....ing my patience")
// } catch (err) {
//     //handles the error
//     console.log("Oops, we screwed up")
// } finally {
//     //executes the code after try/catch regardless of result
//     console.log("Finally always runs, just like I run out of patience")
// }

// let json = '{"age": 30}'

// try{
//     let user = JSON.parse(json)
//     if (!user.name){
//         throw new SyntaxError("Incomplete data: no name")
//     }
// }catch(e){
//     console.log(`JSON Error: ${e}`)
// }

// function upperCase(name){
//     if(typeof name != 'string'){
//         throw TypeError("Name must be a string")
//     } 
//     return name.toUpperCase();
// }

// console.log(upperCase());