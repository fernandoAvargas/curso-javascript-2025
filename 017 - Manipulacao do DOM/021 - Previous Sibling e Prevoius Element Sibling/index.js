"use strict";

const body = document.querySelector("body");

console.log(body.previousSibling); // Irá mostrar a primeira coisa que encontrar...Espaços vazios, textos ou o elemento em sí.

console.log(body.previousElementSibling); //Exibe a tag head que é o elemento anterior

//--------------------------------------

const h1 = document.querySelector("h1");

console.log(h1.previousSibling); // também irá mostra a premeira coisa que encontrar antes, seja texto, espaços vazios ou um elemento 

console.log(h1.previousElementSibling); //Exibe o elemento anterior...

//--------------------------------------

const p = document.querySelector(".paragrafo");

console.log(p.previousSibling);

console.log(p.previousElementSibling);
