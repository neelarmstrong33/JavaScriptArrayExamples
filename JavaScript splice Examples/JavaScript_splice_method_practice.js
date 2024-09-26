/*
//Example 1 : Deleting Elements using JavaScript Array's splice() method
let scores = [1,2,3,4,5];
let deletedScores = scores.splice(0,3);

console.log(scores);
console.log(deletedScores);
*/

/*
//Example 2 : Inserting One or more Elements using JavaScript Array's splice() method
let colors = ['Red', 'Green', 'Blue'];
colors.splice(2,0,'purple');

console.log(colors);

colors.splice(1, 0, 'yellow', 'pink');
console.log(colors); 
*/

//Example 3 :  Replacing elements using JavaScript Array's splice() method
let languages = ['C', 'C++', 'Java', 'JavaScript'];
languages.splice(1,1,'Python');

console.log(languages);

languages.splice(2,1,'C#','Swift','Go');
console.log(languages);

