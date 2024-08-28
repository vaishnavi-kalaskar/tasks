//string

//1.concat
let str = "Hello, Good Morning!";
let Name = "Rahul";
console.log(str + " " + Name);
console.log(str.concat(" ", Name));
console.log(`${str} ${Name}`);

//2. case change
console.log(str.toLowerCase());
console.log(str.toUpperCase());

let msg = "Have a nice day";
console.log(msg.indexOf("e"));
console.log(msg.indexOf("e", 5));
console.log(msg.lastIndexOf("d"));
console.log(msg.includes("nice"));

console.log(msg.replace("nice", "😉"));
console.log(msg.length);
console.log(msg.endsWith("day"));
console.log(msg.endsWith("mew"));
console.log(msg.slice(2, 9));
console.log(msg.substring(2, 6));
console.log(msg.substr(2, 6));
console.log(msg.split(" "));

let word = "    good byyyyyyye     ";
console.log(word);
console.log(word.trimStart());
console.log(word.trim());
console.log(word.trimEnd());

//-------------------------------------------------

//objects:
let person = {
  name: "ganesha",
  age: "25",
  city: "pune",
};
console.log(person);
console.log(person.age);
console.log(person.name);

person.DOB = "7/9/2024";
console.log(person);

console.log("age" in person);

delete person.city;
console.log(person);

person.addr = "pune";

for (let key in person) {
  console.log(person[key]);
}

//----------------------------------------------

let car = {
  brand: "toyota",
  model: "camry",
  year: 2015,
};

let per = {
  name: "ganesha",
  age: "25",
  city: "pune",
  sayBye() {
    confirm.log("bye bye");
  },
};

per.sayHello = function () {
  console.log("hello");
};
console.log();
console.log(per);

//-------------------------------------

let carr = {
  brand: "toyota",
  model: "camry",
  year: 2015,
};

let perr = {
  name: "ganesha",
  age: "25",
  city: "pune",

  data: function () {
    console.log(`${this.name} have a car ${car.model}`);
  },
};
perr.data();

// in person we make object in quotes
// so we cant call with dot like person."hobbies"
//we make like
//"hobbies"=["a","b","c"]=>console.log(person"hobbies")
