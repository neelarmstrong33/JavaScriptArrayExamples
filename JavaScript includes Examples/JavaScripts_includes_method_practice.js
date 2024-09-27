/*
//Example 1 : Using the JavaScript includes method to see whether the element lies in an array or not.
console.log([1,2,3].includes(2)); // true
console.log([1,2,3].includes(4)); // false
console.log([1,2,3].includes(1,1)); // false
*/

/*
//Example 2 : Unlike the indexOf() method, the includes() method works perfectly fine with the NaN: 
console.log([NaN].includes(NaN)); // true
*/

/*
//Example 3 :  the includes() doesn’t distinguish between +0 and -0 as shown in the following example:
console.log([-0].includes(+0)); // true
*/


//Example 4 : The following example demonstrates how to use the includes() method to check if an object is in an array.
let bmw = {name: 'BMW' }, 
    toyota = { name: 'Toyota'},
    ford = {name: 'Ford'}

let cars = [ford, toyota];

console.log(cars.includes(ford)); // true
console.log(cars.includes(bmw)); // false
