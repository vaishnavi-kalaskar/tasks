//anonymous function
//anonymous fun are function that are defined without name.

// 1.
// let newSum = function (a, b) {
//   return a + b;
// };
// console.log(newSum(30, 20));

// 2.
// let multiply = function(x, y) {
//   return x * y;
// };

// console.log(multiply(4, 5));

//3.
// for (let i = 1; i <= 5; i++) {
//   (function(num) {
//       console.log("The square of " + num + " is " + (num * num));
//   })(i);
// }

// 4.
let isPrime = function (num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(7));
console.log(isPrime(10));

// 5.
let swap = function (a, b) {
  let temp = a;
  a = b;
  b = temp;
  return [a, b];
};

let x = 10;
let y = 20;

[x, y] = swap(x, y);

console.log("x:", x);
console.log("y:", y);

//----------------------------------------------------------

//immediate invoked function expression (IIFE)
// func that are defined where call immediately.

// let msg = "hello";
// function syhello() {
//   console.log(msg);
// }
// syhello();

// 6.
// (function () {
//   let msg = "have anice day";
//   console.log(msg);
// })();

// 7.
function add() {
  let sum = 0;
  console.log("length is:", arguments.length);
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
//add(1, 2, 4, 7);
console.log("sum is:", add(1, 2, 4, 7));
console.log("sum is :", add(1, 5, 7, 4, 6));

//8.
(function (a, b) {
  let sum = a + b;
  console.log("The sum is:", sum);
})(5, 7);

//9.
let array = [3, 5, 6, 9];
let sum = (function (arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
})(array);

console.log("Sum of array:", sum);

//10.
(function (a, b) {
  let product = a * b;
  console.log("Product:", product);
})(5, 10);

// function fib(n) {
//   if (n == 0) {
//     return;
//   }
//   if (n == 1) {
//     return 0;
//   }
//   if (n == 2) {
//     return 1;
//   }
//   return fib(n - 1) + fib(n - 2);
// }
// for (let i = 0; i < 10; i++) {
//   console.log(fib(i));
// }
