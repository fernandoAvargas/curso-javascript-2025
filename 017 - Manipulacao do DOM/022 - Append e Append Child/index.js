"use strict";


const container = document.querySelector(".container");

container.append("---------------------------------");

container.append("Texto criado via AppenChield"); // Não funciona se utilizar tags html...Somente texto

container.append("---------------------------------");

/*

console.log(container.appendChild("Teste do apendChild")); //Assim vai dar erro porque AppendChild só funcioana com texto envolvidos por tags html e criados via document.createElement.
container.appendChild("<p>Teste</p>"); //Assim também não var funcionar

*/


//Uma das formas de fazer funcionar

let newDiv = document.createElement("div");

newDiv.innerText = "Olá pessoal";


container.appendChild(newDiv);

