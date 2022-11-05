// // console.log(document); all html code dikhega
// console.dir(document); // all property and method jo use kiya jayega wo sab show hoga yaha
// console.log(document.domain); //logo host wo show karega

// console.log(document.URL); // index ka jo v URL hoga wo show karega

// console.log(document.title); // title ko show kar sakte hai

// document.title = "Sanjay gupta"; ///title yaha se change kar sakte hai

// console.log(document.doctype); // show the doctype of html

// console.log(document.head);// show the head of html

// console.log(document.body);// show the body of html

// console.log(document.all);// show the all of html
// console.log(document.all[10]);// show the index of html

// // document.all[10].textContent = "Sanjay" //change aishe kar sakte bas check karne ke liye but website me aishe nahi karte

// // console.log(document.forms[0]) // show the form of html

// getElementById property

// var headeritem = document.getElementById("main-header");
var header = document.getElementById("main-header");

// console.log(headeritem);

// // headeritem.innerText = "sanjay"
// // headeritem.textContent ="guptaji"

header.style.borderBottom = "solid 3px #000";
header.style.borderTop = "solid 3px #000";
// var items = document.getElementById("items")

// console.log(items)

// items.color = "red"

var item = document.getElementById("main");

main.style.borderTop = "solid 3px #000";
main.style.borderBottom = "solid 3px #000";
main.style.borderLeft = "solid 3px #000";
main.style.borderRight = "solid 3px #000";
// *
// *
// *
// *
// *
// *
// *
// *
// getElmentClass property

var items = document.getElementsByClassName("list-group-item");

console.log(items);

items[0].textContent = "SANJAY";
items[0].style.backgroundColor = "black";
items[0].style.color = "white";

items[1].textContent = " KANHAIYA GUPTA";
items[1].style.backgroundColor = "yellow";
items[1].style.color = "black";

items[2].textContent = "GUPTA JI";
items[2].style.backgroundColor = "GREEN";
items[2].style.color = "white";

items[3].textContent = "GUPTA JI";
items[3].style.backgroundColor = "red";
items[3].style.color = "black";
