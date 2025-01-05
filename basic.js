//task1//
function findMinValue(array) {
  return array.reduce(
    (min, current) => (current < min ? current : min),
    array[0]
  );
}

let array = [30, 45, 60, 7];
let minValue = findMinValue(array);

console.log(`: ${minValue}`);

//task2//
function sortStringAlphabetically(str) {
  let charArray = str.split("");
  charArray.sort();
  return charArray.join("");
}

let word = "hello";
let sortedWord = sortStringAlphabetically(word);

console.log(`: ${sortedWord}`);

//task3//

function oddOrEven(number) {
  if (number % 2 === 0) {
    return "Doubles";
  } else {
    return "Odd ";
  }
}

let result = oddOrEven(9);
console.log(`num 9 is: ${result}`);
//task4//
function filterEvenNumbers(array) {
  return array.filter((number) => number % 2 === 0);
}

let originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenNumbersArray = filterEvenNumbers(originalArray);

console.log(`: [${evenNumbersArray}]`);

//task5//

function sumAbsoluteValues(array) {
  return array.reduce((sum, num) => sum + Math.abs(num), 0);
}

let array2 = [-1, -3, -5, -4, -10, 0];
let totalSum = sumAbsoluteValues(array2);

console.log(`: ${totalSum}`);



