// var numbers = [3, 56, 2, 48, 5];


//Map
// function double(x) {
//   return x * 2;
// }

// const newNumbers = numbers.map(double);

// var newNumbers = [];
// numbers.forEach(function double(x) {
//   newNumbers.push(x * 2);
// });

// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// })

// console.log(newNumbers);









//Filter
// const newNumbers = numbers.filter(function(num) {
//   return num > 10
// });

// var newNumbers = [];
// numbers.forEach(function(num) {
//   if (num < 10) {
//     newNumbers.push(num);
//   }
// });

// console.log(newNumbers);










//Reduce
// var newNumber = 0;

// numbers.forEach(function(currentNumber) {
//   newNumber += currentNumber;
// });


// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//   return accumulator * currentNumber;
// });

// console.log(newNumber);














//Find
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// });

// console.log(newNumber);

















//FindIndex
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// });

// console.log(newNumber);


import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0,100);
});

console.log(newEmojipedia);

