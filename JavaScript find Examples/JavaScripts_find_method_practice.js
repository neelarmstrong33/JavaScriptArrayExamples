/*
//Example 1 : Using JavaScript find() method to find the element in the array
let numbers = [1,2,3,4,5];
console.log(numbers.find(e => e % 2 == 0));
*/

//Example 2 : Suppose that we have a list of customer objects with name and credit properties as follows
let customers = [
    {
        name : 'ABC Inc',
        credit : 100
    },
    {
        name : 'ACME Corp',
        credit : 200
    },
    {
        name : 'IoT AG',
        credit : 300
    }
];

console.log(customers.find( c => c.credit > 100 ));