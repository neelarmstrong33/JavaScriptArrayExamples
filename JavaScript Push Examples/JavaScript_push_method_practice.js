/*
// Example 1 : Simple Application of push method
let numbers = [10, 20, 30];

const length = numbers.push(40);

console.log(length);
console.log(numbers);
*/

/*
//Example 2 : In this multiple element are pushed using this method
let numbers = [10, 20, 30];

const length = numbers.push(40, 50);

console.log(length);
console.log(numbers);
*/

/*
//Example 3 :  Append Element of an array to another array
let colors = ['red', 'green', 'blue'];
let cmyk = ['cyan', 'magenta', 'yellow', 'back'];

for (const color of cmyk) {
  colors.push(color);
}

console.log(colors);
*/

/*
//Example 4 : Works as same as Example 3 only in this case spread operator is used
let colors = ['red', 'green', 'blue'];
let cmyk = ['cyan', 'magenta', 'yellow', 'back'];

colors.push(...cmyk);

console.log(colors);
*/

/*
//Example 5 : Push method is used with the array like object.
let greetings = {
    0: 'Hi',
    1: 'Hello',
    length : 2,
    append(message) {
        [].push.call(this, message);
    },
};

greetings.append('Howdy');
greetings.append('Bonjour');

console.log(greetings);
*/


//Example 6 : In this example the append method accepts a number of messages.
let greetings = {
    0: 'Hi',
    1: 'Hello',
    length: 2,
    append() {
        [].push.call(this, ...arguments);
    },
};

greetings.append('Howdy', 'Bonjour');
console.log(greetings);