// Task 1: Array Filtering
function filterNumbers(arr) {
  return arr.filter((item) => typeof item === "number");
}

// Task 2: Array Reversal
function reverseArray(arr) {
  return arr.reverse();
}

// Task 3: Find Maximum in an Array
function findMax(arr) {
  return Math.max(...arr);
}

// Task 4: Remove Duplicates from an Array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Task 5: Flatten a Nested Array
function flattenArray(arr) {
  return arr.flat(Infinity);
}

// Examples
console.log(filterNumbers([1, "a", 3, "b", true, 5])); // Output: [1, 3, 5]
console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
console.log(findMax([1, 3, 7, 2, 9, 4])); // Output: 9
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
console.log(flattenArray([1, [2, [3, [4, 5]]]])); // Output: [1, 2, 3, 4, 5]
