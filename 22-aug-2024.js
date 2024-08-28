//recursion//

// 1. sum of  digits

// let n = 15;
// function sum(n) {
//   if (n == 0) {
//     return 0;
//   }
//   if (n == 1) {
//     return 1;
//   }
//   return sum(n - 1) + n;
// }
// let res = sum(n);
// console.log("", res);

//2. sum of factorial

// let n = 5;
// function fact(n) {
//   if (n == 0) {
//     return 1;
//   }
//   if (n == 1) {
//     return 1;
//   }
//   return fact(n - 1) * n;
// }
// let res = fact(n);
// console.log("", res);

//sum of factorial

// let n = 5;
// function fact(n) {
//   if (n <= 1) {
//     return 1;
//   }

//   return fact(n - 1) * n;
// }
// console.log("factorial is:", fact(n));

//3. sum of fibonacci series

// let n = 10;
// function fib(n) {
//   if (n == 1) {
//     return 0;
//   }
//   if (n == 2) {
//     return 1;
//   }
//   return fib(n - 1) + fib(n - 2);
// }
// console.log("", fib(n));

// function fib(n){
//   if(n==0){
//     return;
//   }
//   if(n==1){
//     return 0;
//   }
//   if(n==2){
//     return 1;
//   }
//   return fib(n - 1) + fib(n - 2);
// }
// for(let i=0;i<10;i++){
//   console.log(fib(i));
// }

function fib(n) {
  if (n <= 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}
function printfib(n) {
  for (let i = 0; i < n; i++) {
    console.log("", fib(i));
  }
}
let n = prompt("enter number");
printfib(Number(n));

//-----------------------------------------------

//defination:
// a funcrion thats calla itself in its body,until it reach to its base condition.
//eg.
//  function hello(){
//     console.log("hello");
//     console.log("hii");
//     hello();
//  }
//  hello();
//error:Maximum call stack size exceeded

// function sum(n){
//     let sum=0;
//     return;
// }
// let res =num(0);
// console.log("",res);

//  undefined when function is not return.
// function undefined when value is default.
