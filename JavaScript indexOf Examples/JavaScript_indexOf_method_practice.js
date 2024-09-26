/*
//Example 1 : Using the JavaScript indexOf() method to find the indexes of the given element in the array.
var scores = [10, 20, 30, 10, 40, 20];

console.log(scores.indexOf(10));
console.log(scores.indexOf(30));
console.log(scores.indexOf(50));
console.log(scores.indexOf(20));

console.log(scores.indexOf(20,-1)); // 5 (fromIndex = 6+ (-1) = 5)
console.log(scores.indexOf(20,-5)); // 1 (fromIndex = 6+ (-5) = 1)

console.log(scores.indexOf(10,-3));
*/

/*
//Example 2 : Using the JavaScript indexOf() method in the array of objects
var guests = [
    {name: 'John Doe', age: 30},
    {name: 'Lily Bush', age: 20},
    {name: 'William Gate', age: 25}
];

console.log(guests.indexOf({
    name: 'John Doe',
    age: 30
})); // returns -1
*/

/* 
The following statement returns -1 even though the first element of the guests array and the searchElement
have the same values in the name and ages properties. This is because they are two different objects. 
*/

/*
//Example 3 : Here with the help of find function we are find all occurrences of an element using indexOf method
var scores = [10, 20, 30, 10, 40, 20];

function find(number, score) {
    var result = [];
    var idx = score.indexOf(number);
    while(idx != -1) {
        result.push(idx);
        idx = score.indexOf(number, idx + 1);
    }
    return result;
}

console.log(find(10,scores));
*/

// Example 4 : Using JavaScript lastIndexOf() method to find the last occurrence of an element in the array
var scores = [10, 20, 30, 10, 40, 20];

console.log(scores.lastIndexOf(10));// 3
console.log(scores.lastIndexOf(20));// 5

console.log(scores.lastIndexOf(50));// -1