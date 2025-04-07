"use strict";

const container = document.querySelector('.container');

console.log(container.firstChild); // Retorna a primeira informação que houver. Seja texto, estpaço vazio ou eo elemento(tag html).

console.log(container.firstElementChild); // Retorna o primeiro elemeto, ou seja, a tag html

//---------------------------------------------------------

const p = document.querySelector('.paragrafo');

console.log(p.firstChild);

console.log(p.firstElementChild);