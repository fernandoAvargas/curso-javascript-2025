"use strict";

/*
  textContent => Retorna o text com formatações, mas com os elementos
  innerText => Restorna somente o texto, sem formatações ou elementos
*/

const p = document.querySelector("p");

console.log(p.textContent);

console.log(p.innerText);

p.textContent = "O texto do paragrafo foi alterado";

p.textContent = "O texto do paragrafo foi alterado novamente";

p.innerText = "<i>O texto do paragrafo foi alterado novamente</i>";

p.textContent = "<strong>O texto do paragrafo foi alterado novamente</strong>";

// Ambos não tem como adicionar html dentro deles

