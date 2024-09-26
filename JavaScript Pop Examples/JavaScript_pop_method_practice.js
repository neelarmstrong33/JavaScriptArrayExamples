
/*
// Example 1 :  Using the JavaScript array pop() method to remove the last element of an array
const numbers = [10,20,30];
const last = numbers.pop();

console.log(last);
console.log(numbers.length);
*/

/*
//Example 2 : Using the JavaScript array pop() method with an empty array
const numbers = [];
const last = numbers.pop();

console.log(last);
console.log(numbers.length);
*/


//Example 3 : Using JavaScript pop() method with array-like objects
let greetings = {
    0: 'Hi',
    1: 'Hello',
    2: 'Howdy',
    length: 2,
    removelast() {
        return [].pop.call(this);
    },
};

let greeting = greetings.removelast();

console.log(greeting);
console.log(greetings);

