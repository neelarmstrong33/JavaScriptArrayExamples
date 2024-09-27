/*
//Example 1  : Using the Array findIndex() method with a simple array example
let ranks = [1,5,7,8,10,7];
let index = ranks.findIndex( rank => rank === 7 );
console.log(index);
*/

/*
//Example 2 : Using the Array findIndex() method with a more complex condition
let ranks = [1,5,7,8,10,7];

let index = ranks.findIndex(
    (rank, index) => rank === 7 && index > 2
);

console.log(index);
*/

//Example 3 : Using the Array findIndex() method with an array of objects
const products = [
    { name: 'Phone', price: 999 },
    { name: 'Computer', price: 1999 },
    { name: 'Tablet', price: 995 },
];
  
  const index = products.findIndex(product => product.price > 1000);
  
  console.log(index); // 1