"use strict";

const h1 = document.querySelector("h1");

let p = document.querySelector("p");


console.log(h1.className);


console.log(p.className);

const pList = document.querySelectorAll("p");

pList.forEach((element) => {
    console.log(element.className);
})

