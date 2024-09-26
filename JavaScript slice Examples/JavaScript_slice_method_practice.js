/*
//Example 1 : Clone the given array using javaScript slice method.
var numbers = [1,2,3,4,5];
var newNumbers = numbers.slice();

console.log(newNumbers);
*/

/*
//Example 2 : Copy a portion of an array using the javaScript slice method
var colors = ['red','green','blue','yellow','purple'];
var rgb = colors.slice(0,3);
console.log(rgb);
*/

/*
//Example 3 : Covert array-like objects into arrays
function toArray() {
    return Array.prototype.slice.call(arguments);
}

var classification = toArray('A','B','C');

console.log(classification);
*/


 /*
 Example 4 : Converting a NodeList into an array using javaScript slice() method */

var p = document.querySelectorAll('p');
var list = Array.prototype.slice.call(p);

/*
In this example, first, we used the document.querySelectorAll() to get all p nodes of the HTML
document. The result of this method is a NodeList object, which is an array-like object. Then,
we called the slice() method to convert the NodeList object into an array.
*/

/* Sometimes, you see the following syntax: */

var list = [].slice.call(document.querySelectorAll('p'));

/*
In this example, we instantiated an empty array [] and indirectly accessed the slice() method
of the Array.prototype method through the empty array. The effect is the same as the one that
uses the Array.prototype directly.
*/