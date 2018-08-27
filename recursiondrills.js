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

// function reverseString(str){
//   if(str===''){
//     return '';
//   }
//   const newChar = str[str.length-1];
//   return newChar + reverseString(str.slice(0, -1));
  
// }

// console.log(reverseString('hello'));