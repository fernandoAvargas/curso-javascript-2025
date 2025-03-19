"use strict"

const h1 = document.querySelector("h1");

const p = document.querySelector("p"); //Se tiver outros p´s no código vai pegar somente um.

const classP = document.querySelector(".paragrafo");

const idP = document.querySelector("#paragrafo");

const strongP = document.querySelector(".paragrafo strong");

const strongClassP = classP.querySelector("strong");

console.log(h1);

console.log(classP.querySelector("strong"));

console.log(classP);

console.log(strongP);

console.log(strongClassP);

let timer = 0;

const title = document.querySelector("title");

setInterval(() =>{

    title.innerHTML = timer;

    timer ++;

},1000);







