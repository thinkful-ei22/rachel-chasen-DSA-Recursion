'use strict'

// //Counting Sheep
// function countingSheep(totalSheep) {

//   if (totalSheep === 0) {
//     return '';
//   } else {
//       console.log(`${totalSheep} Another sheep jump over the fence`)
//     countingSheep(totalSheep - 1)
//     }

//   }

// let totalSheep = 7;
// countingSheep(7);

// //Array Double

// function double(arr) {
//   if (arr.length === 0) {
//     return [];
//   } else {
//     const doubledNum = (arr[0] * 2)
//     return [doubledNum, ...double(arr.slice(1))]
//   }
// }
// let input = [2,5,10]
// console.log(double(input))
// // [4,10,20]

////REVERSE STRING//

// function reverseString(str){
//   if(str===''){
//     return '';
//   }
//   const newChar = str[str.length-1];
//   return newChar + reverseString(str.slice(0, -1));
  
// }

// console.log(reverseString('hello'));


// //nth Triangular Number////

// function nTriangle(num){
//   if(num===1){
//     return 1;
//   }
//   return num + nTriangle(num-1);
// }

// console.log(nTriangle(7));

//Split String

function splitString(str, sep) {

  if (str.length === 0) {
    return '';
  }
  if (str[1] === sep ) {
    return [str[0], ...splitString(str.slice(2))]
  }
  else return [str[0] + splitString(str.slice(1))]

};

console.log(splitString('this is a split string', "s"))