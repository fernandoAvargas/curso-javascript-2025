"use strict";

const div = document.querySelector("div");

div.setAttribute("id","teste");

div.setAttribute("class","active");

console.log(div);

//Para atributos de mesmo tipo se for incluir um novo, como uma nova classe por exemplo, o que tinha anteriormente será excluído.

div.setAttribute("class","Background");

console.log(div);

//  O que tinha antes, active, não aparece mais pois foi substituido pela classe Backgound.

//  Atenção: Se você alterar um valor de atributo ele irá alterar para toda a página. Perdendo o valor que tinha antes

//  Veja que na linha a classe Backgroud já aparese no console antes mesmo de acontecer a manipulação, ou seja, linha 15.

//  Para resolver esse problema é pegar o valor do atributo e armazenar em uma varável ou pegar o valor antes de alterar.

//  Como o exemplo abaixo:

console.log(div);

console.log(div.getAttribute("id"));

const atributoAnterior = div.getAttribute("class");

console.log(atributoAnterior);

//Ou fazer direto assim para incluir mais de uma classe:

div.setAttribute("class",`${div.getAttribute("class")} Form`)

console.log(div);

// Também dá para fazer assim:
div.setAttribute("class",`${div.getAttribute("class")} Active`);

console.log(div);

//Se quizer remover um atributo


div.removeAttribute("class");   

console.log(div);
