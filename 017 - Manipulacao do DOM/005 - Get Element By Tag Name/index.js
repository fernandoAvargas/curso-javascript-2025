"use strict";

const p1 = document.getElementsByTagName("p");

const p2 = document.getElementsByTagName(".paragrafo");

const p3 = document.getElementsByTagName("#paragrafo");

const h1 = document.getElementsByTagName("h1");


console.log(p1); // Funciona

console.log(p2); // Não funciona porque só reconhece tag´s html e não pelo classe

console.log(p3); // Não funciona porque só reconhece tag´s html e não pelo id

console.log(h1); // Funciona

// Como ele devolve um HTML Collection não funcionará com foreach. Apenas com for

for (let element of p1){

    console.log(element);
}


