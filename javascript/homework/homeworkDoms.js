const body = document.body;
const head = document.head;
const title = document.getElementById('title');
let updateName = document.getElementById('dom');
const dateHolder = document.querySelector("h3");
const h4 = document.createElement("h4");
const orderedList = document.createElement("ol");
const listItem1 = document.createElement("li");
const listItem2 = document.createElement("li");
const listItem3 = document.createElement("li");
const button = document.createElement("button");

body.style.backgroundColor = "Coral"



const date = new Date()
console.log(date)
//[jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dec]



h4.innerText = "coding languages i am currently learning"
dateHolder.innerText = `${date.getDate()}/0${date.getMonth()+1}/${date.getFullYear()}`
title.innerText = "Homework 1 is all about document object manipulation"
updateName.innerText = "My name is Osman"



orderedList.append(h4)
listItem1.innerText = "HTML"
orderedList.append(listItem1)
listItem2.innerText = "CSS"
orderedList.append(listItem2)
listItem3.innerText = "JS"
orderedList.append(listItem3)

button.innerText = "Click me"



body.append(orderedList)
body.append(button)


/*body.addEventListener("click", function(){
   alert("Welcome to the website")
   console.log("Welcome to the website")
})*/

alert("Hello")
var response = prompt("How are you today?")

console.log(response)







