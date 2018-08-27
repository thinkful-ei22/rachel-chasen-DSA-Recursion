'use strict';

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

// function splitString(str, sep){
//   let idx = str.indexOf(sep);
//   if (idx === -1){
//     return [str];
//   }
//   return [str.slice(0,idx)].concat(splitString(str.slice(idx + sep.length), sep));
// }


//in progress///
// function splitString(str, sep) {
//   console.log(str[1]);
//   if (str.length === 0) {
//     return '';
//   }
//   if (str[1] === sep ) {
//     return [str[0], ...splitString(str.slice(2), sep)];
//   }
//   else {
//     // console.log(str[0]);
//     return [str[0] + splitString(str.slice(1), sep)];
//   }
// }

// console.log(splitString('hello hello hello', ' '));


//Binary//

// const binaryRep = function(input) {
//   //base case
//   if (input<=0) {
//     return '';
//   }
//   const binaryStr = Math.floor(input%2)
//   return binaryRep(Math.floor(input/2)) + binaryStr
// }

// console.log(binaryRep(21))


//fibonacci///

// const fibseq = length => {
//   if (length === 1)
//     return [1];
//   let arr = fibseq(length - 1);
//   arr.push(arr[arr.length - 1] + arr[arr.length - 2] || 1);
//   return arr;
// };

// console.log(fibseq(8));

///factorial/////

// function factorial(num) {
//   if (num === 0) {
//     return 1;
//   } 
//   return num * factorial(num - 1);
// }

// console.log(factorial(3));

