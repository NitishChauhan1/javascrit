// 1. Find the smallest missing positive integer.
// Concept: Hashing, In-place modification.
let arr1 = [3, 4, -1, 1];
for (let i = 0; i < arr1.length; i++) {
  while (
    arr1[i] > 0 &&
    arr1[i] <= arr1.length &&
    arr1[arr1[i] - 1] !== arr1[i]
  ) {
    [arr1[arr1[i] - 1], arr1[i]] = [arr1[i], arr1[arr1[i] - 1]];
  }
}
let missing = arr1.length + 1;
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] !== i + 1) {
    missing = i + 1;
    break;
  }
}
console.log("Smallest missing positive integer:", missing); // Output: 2

// 2. Find the maximum product of any three numbers.
// Concept: Sorting.
let arr2 = [-10, -10, 5, 2];
arr2.sort((a, b) => a - b);
let maxProduct = Math.max(
  arr2[0] * arr2[1] * arr2[arr2.length - 1], // Two smallest (negative) and the largest.
  arr2[arr2.length - 1] * arr2[arr2.length - 2] * arr2[arr2.length - 3] // Three largest.
);
console.log("Maximum product of three numbers:", maxProduct); // Output: 500

// 3. Implement a sliding window to find the maximum sum of `k` consecutive elements.
// Concept: Sliding Window.
let arr3 = [2, 1, 5, 1, 3, 2];
let k = 3;
let windowSum = 0,
  maxSum = 0;
for (let i = 0; i < k; i++) windowSum += arr3[i];
maxSum = windowSum;
for (let i = k; i < arr3.length; i++) {
  windowSum += arr3[i] - arr3[i - k];
  maxSum = Math.max(maxSum, windowSum);
}
console.log("Maximum sum of", k, "consecutive elements:", maxSum); // Output: 9

// 4. Find the subarray with the given sum.
// Concept: Two Pointers.
let arr4 = [1, 2, 3, 7, 5];
let targetSum = 12;
let start = 0,
  currentSum = 0;
let subarray = [];
for (let end = 0; end < arr4.length; end++) {
  currentSum += arr4[end];
  while (currentSum > targetSum) currentSum -= arr4[start++];
  if (currentSum === targetSum) {
    subarray = arr4.slice(start, end + 1);
    break;
  }
}
console.log("Subarray with given sum:", subarray); // Output: [2, 3, 7]

// 5. Find the first repeating element.
// Concept: Hashing.
let arr5 = [10, 5, 3, 4, 3, 5, 6];
let seen = new Set();
let firstRepeating = -1;
for (let num of arr5) {
  if (seen.has(num)) {
    firstRepeating = num;
    break;
  }
  seen.add(num);
}
console.log("First repeating element:", firstRepeating); // Output: 3

// 6. Find the length of the longest subarray with equal 0s and 1s.
// Concept: Hash Map, Prefix Sum.
let arr6 = [0, 0, 1, 0, 1, 1, 0];
let map = new Map();
let maxLength = 0,
  sum = 0;
map.set(0, -1);
for (let i = 0; i < arr6.length; i++) {
  sum += arr6[i] === 0 ? -1 : 1;
  if (map.has(sum)) {
    maxLength = Math.max(maxLength, i - map.get(sum));
  } else {
    map.set(sum, i);
  }
}
console.log("Length of the longest subarray:", maxLength); // Output: 6

// 7. Find the minimum number of swaps to sort an array.
// Concept: Graph Cycle.
let arr7 = [4, 3, 2, 1];
let visited = new Array(arr7.length).fill(false);
let sorted = [...arr7]
  .map((val, index) => [val, index])
  .sort((a, b) => a[0] - b[0]);
let swaps = 0;
for (let i = 0; i < arr7.length; i++) {
  if (visited[i] || sorted[i][1] === i) continue;
  let cycleSize = 0,
    j = i;
  while (!visited[j]) {
    visited[j] = true;
    j = sorted[j][1];
    cycleSize++;
  }
  swaps += cycleSize - 1;
}
console.log("Minimum swaps to sort:", swaps); // Output: 2

// 8. Count the number of subarrays with sum equal to `k`.
// Concept: Hash Map, Prefix Sum.
let arr8 = [1, 1, 1];
let k8 = 2;
let prefixSumCount = new Map();
prefixSumCount.set(0, 1);
let count = 0,
  prefixSum = 0;
for (let num of arr8) {
  prefixSum += num;
  if (prefixSumCount.has(prefixSum - k8))
    count += prefixSumCount.get(prefixSum - k8);
  prefixSumCount.set(prefixSum, (prefixSumCount.get(prefixSum) || 0) + 1);
}
console.log("Count of subarrays with sum", k8, ":", count); // Output: 2

// 9. Find the minimum length of a subarray with sum >= `k`.
// Concept: Sliding Window.
let arr9 = [2, 3, 1, 2, 4, 3];
let k9 = 7;
let minLength = Infinity,
  start9 = 0,
  sum9 = 0;
for (let end9 = 0; end9 < arr9.length; end9++) {
  sum9 += arr9[end9];
  while (sum9 >= k9) {
    minLength = Math.min(minLength, end9 - start9 + 1);
    sum9 -= arr9[start9++];
  }
}
console.log("Minimum length of subarray:", minLength); // Output: 2

// 10. Find the next greater element for each element in an array.
// Concept: Stack.
let arr10 = [4, 5, 2, 10];
let stack = [];
let nextGreater = Array(arr10.length).fill(-1);
for (let i = arr10.length - 1; i >= 0; i--) {
  while (stack.length > 0 && stack[stack.length - 1] <= arr10[i]) stack.pop();
  if (stack.length > 0) nextGreater[i] = stack[stack.length - 1];
  stack.push(arr10[i]);
}
console.log("Next greater elements:", nextGreater); // Output: [5, 10, 10, -1]
