/*
//Example 1 : Using the JavaScript array shift() method Example
const numbers = [10,20,30];
let number = numbers.shift();

console.log({number});
console.log({numbers});
console.log({length : numbers.length});
*/

/*
//Example 2  : Using the JavaScript array shift() method with while loop
const numbers = [10,20,30];
let number;

while((number = numbers.shift()) != undefined) {
    console.log(number);
    console.log({length : numbers.length});
}
*/

//Example 3 : Using the JavaScript array shift method with array-like object by using call and apply method
let greetings = {
    0: 'Hi',
    1: 'Hello',
    2: 'Howdy',
    length: 3,
    removeFirst() {
        return [].shift.call(this);
    },
};

const greeting = greetings.removeFirst();

console.log(greeting);
console.log(greetings);