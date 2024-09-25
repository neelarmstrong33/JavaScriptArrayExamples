/*
//Example 1: JavaScript Array unshift method prepend an element at an array
let numbers = [30, 40];

const length = numbers.unshift(20);

console.log({ length });
console.log({ numbers });
*/

/*
//Example 2 : JavaScript unshift method prepend multiple elements at an array
let numbers = [30, 40];

const length = numbers.unshift(10, 20);

console.log({ length });
console.log({ numbers });
*/

/*
//Example 3 : JavaScript array unshift method to add elements of an array to another array.
let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
let weekends = ['Sat', 'Sun'];

for (const weekend of weekends) {
  days.unshift(weekend);
}

console.log(days);
*/

/*
//Example 4 : JavaScript array unshift method used the spread operator in the Example 3 code.
let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
let weekends = ['Sat', 'Sun'];

days.unshift(...weekends);

console.log(days);
*/


//Example 5 : JavaScript Array Unshift() method with array like object.
let greetings = {
    0: 'Hi',
    1: 'Hello',
    2: 'Howdy',
    length: 3,
    prepend(message) {
        [].unshift.call(this, message);
        return this.length;
    },
};

greetings.prepend('Good day');

console.log(greetings);