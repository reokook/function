//task1//
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(8)); 

//task2//
 
function numbersOnly(array) {
  return array.filter(item => typeof item === 'number');
}

let originalArray = ['Ayham', 3, 7, 'Alaa', 13, 'coding'];
let filteredArray = numbersOnly(originalArray);

console.log(filteredArray);
//task3//
function sumToRoot(n) {
  let sum = 0;
  for (let i = n; i >= 0; i--) {
    sum += i;
  }
  return sum;
}

console.log(sumToRoot(6)); // المفروض يطلع 21

//task4//
function minMaxLengthAverage(array) {
  let minElement = Math.min(...array);
  let average = array.reduce((sum, num) => sum + num, 0) / arrayLength; 

  return [minElement, maxElement, arrayLength, average]; 
}
console.log(minMaxLengthAverage([7, 13, 3, 77, 100])); 

//task5//

const romanNumerals = [
  { value: 1000, symbol: "M" },
  { value: 900, symbol: "CM" },
  { value: 500, symbol: "D" },
  { value: 400, symbol: "CD" },
  { value: 100, symbol: "C" },
  { value: 90, symbol: "XC" },
  { value: 50, symbol: "L" },
  { value: 40, symbol: "XL" },
  { value: 10, symbol: "X" },
  { value: 9, symbol: "IX" },
  { value: 5, symbol: "V" },
  { value: 4, symbol: "IV" },
  { value: 1, symbol: "I" },
];

function toRoman(num) {
  let result = "";
  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      result += romanNumerals[i].symbol;
      num -= romanNumerals[i].value;
    }
  }
  return result;
}

const number = 1989;
console.log(toRoman(number)); 