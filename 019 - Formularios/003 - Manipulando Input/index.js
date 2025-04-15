"use strict";

const form = document.forms.namedItem("form");

//form.addEventListener("input", (event)=>{

//form.addEventListener("change", (event)=>{

form.addEventListener("submit", (event)=>{
event.preventDefault();

const name = form.name.value;

//const password = form.password.value;

//Quando clicar em submit criar uma div e adcionar esse elemeto na tag div

const newDivElement = document.createElement("div");
newDivElement.innerText = name;
form.nextElementSibling.remove();
form.after(newDivElement);

});