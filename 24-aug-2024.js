let names = ["vaishnavi", "sakshi", "seema", "pragati", "shivani"];
console.log(names);
console.log(names[2]);

names[4] = "ashvini";
console.log(names);

let values = [28, 77, 99, 34, 45, 55];
console.log(values);

values.push(33);
console.log(values);

values.pop();
values.pop();
console.log(values);

values.unshift(23);
console.log(values);

values.shift();
console.log(values);

console.log(names.concat(values));

//----------------------------------------------

let arr = [23, 45, 67, 35, 45, 89, 78, 46];
let barr = [23, 49, 67, 95, 43, 89, 88, 96];

console.log(arr);
console.log(barr);

console.log(barr.sort());
console.log(barr.reverse());
console.log(arr.concat(barr));

arr.splice(2, 5);
console.log(arr);

console.log(arr.indexOf(45));

//-----------------------------------------

let num = [9, 8, 7, 5, 6, 4];
console.log("by using standerd for loop");
console.log(num);
for (i = 0; i < num.length; i++) {
  console.log(num[i]);
}

console.log("by using for of loop");
for (let x of num) {
  console.log(x);
}

console.log("by using for in loop");
for (let x in num) {
  console.log(x);
}

console.log("by using foreach loop");
num.forEach(function (v) {
  console.log(v);
});

console.log("use arrow function");
num.forEach((v) => console.log(v));

//----------------------------------------

//how to create array using constructor
let book = new Array("java", "testing", "operating");
console.log(book);
console.log(book.length);

book.length = 0;
console.log(book);

//--------------------------------------

let newnum = [2, 6, "nitya", 89.8, true];
console.log(newnum);

//---------------------------------------

//multi-dimention array

let books = [
  ["java", 200],
  ["OS", 600],
  ["WT", 800],
  ["Testing", 500],
  [" BT", 200],
];
console.log(books);
console.log(books[1][1]);
books[2][1] = 300;
console.log(books);

console.log(books[2][1]);
