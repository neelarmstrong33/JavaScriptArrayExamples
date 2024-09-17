/*
const numbers = [1,2,3];
console.log(numbers);

const moreNumbers = new Array('Hi!', 'Welcome');
console.log(moreNumbers);

const another = Array(5);
console.log(another);

const yetMoreNumbers = Array.of(1,2);
console.log(yetMoreNumbers);

const someMoreNumber = Array.from('Hi');
console.log(someMoreNumber);

const listItems = document.querySelectorAll('li');
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

const hobbies = ['Cooking', 'Reading'];
const personData = [30, 'Neel', { moreDetails: []}];

const analyticsData = [[1,1.6], [-5.4,2.1]];
for(const data of analyticsData) {
    for(const dataPoint of data){
        console.log(dataPoint);
    }
}
*/

/*
const hobbies = ['Reading Books', 'Sports'];
hobbies.push('singing'); 
hobbies.unshift('Coding');
const poppedValue = hobbies.pop();
hobbies.shift();
console.log(hobbies);

hobbies[1] = 'Coding';
hobbies[5] = 'Cooking';
console.log(hobbies,hobbies[4]);
*/

/*
const hobbies = ['Cooking', 'Singing'];
hobbies.splice(0, 0, 'Coding');
hobbies.splice(1, 0, 'Reading');
hobbies.splice(0, 1);
hobbies.splice(0); //will delete everything in the array
const removedElements = hobbies.splice(-1,1);
console.log(hobbies);
*/

/*
const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
//const storedResult = testResults.slice();
//const storedResult = testResults.slice(0, 2);
//const storedResult = testResults.slice(3,2);
//const storedResult = testResults.slice(-3,2);
//const storedResult = testResults.slice(-3,-1);
const storedResult = testResults.slice(2);
testResults.push(5.91);
console.log(storedResult, testResults);
*/

/*
const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
const storedResult = testResults.concat([3.99, 2]);
testResults.push(5.91);
console.log(storedResult, testResults);
*/

/*
const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
const storedResult = testResults.concat([3.99, 2]);
testResults.push(5.91);
console.log(testResults.indexOf(1.5));
console.log(testResults.lastIndexOf(1.5));
*/

/*
const personData = [{ name: 'Max'}, {name: 'Manuel'}];
const manuel = personData.find((person, idx, persons) => {
    return person.name === 'Manuel';
});
console.log(manuel);
manuel.name = 'Anna';
console.log(personData);

const maxIndex = personData.findIndex((person, idx, persons) => {
    return person.name === 'Max';
});

console.log(maxIndex);
*/

/*
const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
console.log(testResults.includes(10.99));
*/

const price = [12.99, 5.69, 3.99, 7]
const tax = 0.18;
const taxAdjustedPrices = [];
/*
for (const price of prices) {
    taxAdjustedPrices.push(price * (1 + tax ));
}
*/

price.forEach((prices, idx, price) => {
    const priceObj = { index: idx, taxAdjustedPrices: prices * (1 + tax )}
    taxAdjustedPrices.push(priceObj);
});

console.log(taxAdjustedPrices);

