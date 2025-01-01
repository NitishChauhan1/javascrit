// 1. Can you explain recursion with an example?
function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1); // Function calls itself until base case is reached.
}
console.log(factorial(5)); // Output: 120

// 2. How do closures work in JavaScript? Write an example.
function outer() {
  let count = 0;
  return function inner() {
    return ++count; // Inner function closes over the `count` variable.
  };
}
const counter = outer();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2

// 3. How do you implement a function that takes another function as a parameter and returns a function?
function withLogging(fn) {
  return function (...args) {
    console.log(`Arguments: ${args}`);
    const result = fn(...args);
    console.log(`Result: ${result}`);
    return result;
  };
}
const add = (a, b) => a + b;
const loggedAdd = withLogging(add);
loggedAdd(3, 7); // Logs arguments and result

// 4. How can you use the rest and spread operators together in a function?
function mergeArrays(arr1, ...arr2) {
  return [...arr1, ...arr2]; // Spread operator combines arrays, rest operator collects arguments.
}
console.log(mergeArrays([1, 2], 3, 4, 5)); // Output: [1, 2, 3, 4, 5]

// 5. What is the difference between an asynchronous and a synchronous function? Show with an example.
function syncExample() {
  console.log("Sync Start");
  console.log("Sync End");
}
async function asyncExample() {
  console.log("Async Start");
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulates async delay
  console.log("Async End");
}
syncExample(); // Sync Start, Sync End
asyncExample(); // Async Start, (1s delay), Async End

// 6. How does currying work in JavaScript? Write a function.
function curry(fn) {
  return function curried(...args) {
    return args.length >= fn.length
      ? fn(...args)
      : (...next) => curried(...args, ...next);
  };
}
const multiply = (a, b, c) => a * b * c;
const curriedMultiply = curry(multiply);
console.log(curriedMultiply(2)(3)(4)); // Output: 24

// 7. How can you implement a debounce function?
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}
const log = debounce(() => console.log("Debounced!"), 1000);
log();
log();
log(); // Only the last call executes after 1s

// 8. Can you create a memoized function to optimize repeated calls?
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) return cache[key];
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}
const fib = memoize((n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2)));
console.log(fib(10)); // Output: 55

// 9. How do you dynamically create and invoke a function using the Function constructor?
const dynamicFunc = new Function("a", "b", "return a + b;");
console.log(dynamicFunc(10, 20)); // Output: 30

// 10. How do you use generators to pause and resume function execution?
function* generatorExample() {
  yield "Step 1";
  yield "Step 2";
  return "Done";
}
const gen = generatorExample();
console.log(gen.next().value); // Output: Step 1
console.log(gen.next().value); // Output: Step 2
console.log(gen.next().value); // Output: Done
