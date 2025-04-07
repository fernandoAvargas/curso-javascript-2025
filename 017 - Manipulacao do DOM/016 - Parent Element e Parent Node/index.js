"use strict";

const strong = document.querySelector("strong");

console.log(strong);

console.log(strong.parentElement);

console.log(strong.parentNode);

const p = document.querySelector(".paragrafo");

// Pode se utilizar tanto o parentElement quanto o parentNode
// A diferença entre eles é que um é retorna verdadeiro para documento e outro retorna falso.

console.log(document.documentElement.parentNode === document);

console.log(document.documentElement.parentElement === document);

// Descobrir o pai de p


console.log(p.parentElement);

console.log(p.parentNode);