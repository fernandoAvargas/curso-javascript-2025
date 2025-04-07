"use strict";


const container = document.querySelector(".container");

console.log(container.lastChild); //mostra a ultima coisa que aparecer, seja espaço, texto ou tag html do elemento container

console.log(container.lastElementChild); // Mostra somente a ultima tag html do elemento container.

const p = document.querySelector(".paragrafo");

console.log(p.lastChild);

console.log(p.lastElementChild);

