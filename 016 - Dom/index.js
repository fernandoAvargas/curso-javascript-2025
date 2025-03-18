'use strict';

const h1 = document.querySelector("h1");

const title = document.querySelector("title");

const p = document.querySelector("p");

const b = document.querySelector("body");

p.style.textAlign = "text-justify"; 

b.style.fontFamily = "verdana"; 

h1.style.backgroundColor = "#87CEFA";

console.log(h1);

console.log(title);

h1.textContent = "O texto original e a cor de fundo foram alterados";

// Com Java script podemos manipular os elementos do DOM. Estilo, contúdo escrito, tamanho da font etc.

