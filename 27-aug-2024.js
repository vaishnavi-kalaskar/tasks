// let box = document.getElementById("box");
// console.log(box);

// box.innerHTML = "hii";

let paras = document.getElementsByClassName("para");
// console.log(paras)
// console.log(paras[0])
// console.log(paras[1])
// console.log(paras[2])
// paras[1].innerHTML="para in div"

// for (let i = 0; i <= paras.length; i++) {
//   paras[i].innerHTML = "hello";
// }
for (let i = 0; i < paras.length; i++) {
  paras[i].innerHTML = "<i>this is para enterd using js<i>";
}
let heads=document.getElementsByTagName("h2");
for(let i=0;i<heads.length;i++){
heads[i].innerText="<i>this is heading using js<i>"
}
