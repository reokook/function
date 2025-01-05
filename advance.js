//task1//
function countWords(str) {
  let words = str.trim().split(/\s+/);
  return words.length;
}
console.log(countWords("hello from CodingAcademy!"));


//task2//
function multiplyByLength(array) {
  let length = array.length;
  return array.map(item => item * length);
}
console.log(multiplyByLength([4, 2, 5])); 


//task3//
function checkEnding(str1, str2) {
  return str1.endsWith(str2);
}

console.log(checkEnding("CodingSchool", "Ac")); 
console.log(checkEnding("CodingSchool", "School")); 

//task4//
function doubleChar(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += str[i] + str[i];
  }
  return result;
}
console.log(doubleChar('Coding')); 

//task5//
function findIndex(array, element) {
  return array.indexOf(element);
}
console.log(findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Ali')); 
