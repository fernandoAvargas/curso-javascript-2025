"use strict";


const container = document.querySelector('.container');

console.log(container.children); // Retorna um html collection e não pode ser iterado

console.log(container.childNodes); // Retorna um nodeList e pode ser iterado, mas retorna espaços vazios do html junto com as informações que inclusive são parecidas com a abordagem anterior.

const children = Array.from(container.children);

console.log(children);

console.log("Iteração da constante children");

children.forEach((element) =>{

    console.log(element);
})