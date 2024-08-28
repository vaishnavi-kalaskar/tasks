// document.getElementById
let heroElem = document.getElementById("hero");
console.log(heroElem);
heroElem.innerText = "new text";

// getElementsByClassName:
let elements = document.getElementsByClassName("elem");
console.log(elements);
for (let i = 0; i < elements.length; i++) {
  console.log(elements[i]);
}

// getElementByTagName:
let listelem = document.getElementsByTagName("li");
console.log(listelem);
for (let i = 0; i < listelem.length; i++) {
  console.log(listelem[i]);
}

// querySelector
let heroElement = document.querySelector("#hero");
console.log(heroElement);
console.log(heroElement.innerText);

// querSelectorAll

let listElements = document.querySelectorAll(".elem");
console.log(listElements);

//node traversal
let item1 = document.querySelector("#hero");
console.log(item1);

let item2 = item1.nextElementSibling;
console.log(item2);

let item3 = item1.previousElementSibling;
console.log(item3);

let parent = item1.parentElement;
console.log(parent);

let p2 = parent.nextElementSibling;
console.log(p2);

let listFirstChild = p2.firstElementChild;
console.log(listFirstChild);

let listLastChild = p2.lastElementChild;
console.log(listLastChild);

let childs = p2.children;
