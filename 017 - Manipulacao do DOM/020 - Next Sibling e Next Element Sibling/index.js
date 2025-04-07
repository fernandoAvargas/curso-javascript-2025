"use strict";


const h1 = document.querySelector("h1");

console.log(h1.nextSibling); // pega o próximo irmão que no caso é o texto

console.log(h1.nextElementSibling); // pega o próximo irmão que no caso é a tag <p>

//---------------------------------------

const p = document.querySelector(".paragrafo");

console.log(p.nextSibling);

console.log(p.nextElementSibling);