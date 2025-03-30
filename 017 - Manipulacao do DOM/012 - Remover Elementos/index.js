"use strict"

const h1 = document.querySelector("h1");

const li = document.querySelectorAll("li");

console.log(li);

li[3].remove();
li[2].remove();

h1.remove();