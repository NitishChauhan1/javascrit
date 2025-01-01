// let add = 0;
// let i = 1;
// while (i<=5) {
//     add= add+1;   //if we change 1 with i then the answer is different
//     i++
// }
// // console.log(sum);


// //5-----1
// let countdown =[]
// let j = 5;
// while(j>0)
// {
//     countdown.push(j);
//     j--;
// }
// // console.log(countdown);


// //do while loop use 

// let teacollection =[]
// let tea
// do {
//    tea = prompt("Enter your fav tea")
//    if(tea!="stop")//work in browser inspect part
//    {
//     teacollection.push(tea)
//    }
// } while (tea!="stop");

// 1. Find the sum of all elements in an array.
let arr1 = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr1.length; i++) {
  sum += arr1[i];
}
console.log("Sum of all elements:", sum); // Output: 15

// 2. Count how many times a specific element appears in an array.
let arr2 = [1, 2, 3, 4, 1, 2, 1, 1];
let target = 1;
let count = 0;
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] === target) {
    count++;
  }
}
console.log(`The number ${target} appears ${count} times.`); // Output: 4

// 3. Find the largest number in an array.
let arr3 = [10, 20, 30, 5, 50, 40];
let largest = arr3[0];
for (let i = 1; i < arr3.length; i++) {
  if (arr3[i] > largest) {
    largest = arr3[i];
  }
}
console.log("Largest number:", largest); // Output: 50

// 4. Reverse an array.
let arr4 = [1, 2, 3, 4, 5];
let reversed = [];
for (let i = arr4.length - 1; i >= 0; i--) {
  reversed.push(arr4[i]);
}
console.log("Reversed array:", reversed); // Output: [5, 4, 3, 2, 1]

// 5. Check if an array is a palindrome.
let arr5 = [1, 2, 3, 2, 1];
let isPalindrome = true;
for (let i = 0; i < arr5.length / 2; i++) {
  if (arr5[i] !== arr5[arr5.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}
console.log("Is the array a palindrome?", isPalindrome); // Output: true

// 6. Remove duplicate elements from an array.
let arr6 = [1, 2, 3, 4, 2, 1, 5];
let unique = [];
for (let i = 0; i < arr6.length; i++) {
  if (!unique.includes(arr6[i])) {
    unique.push(arr6[i]);
  }
}
console.log("Array without duplicates:", unique); // Output: [1, 2, 3, 4, 5]


