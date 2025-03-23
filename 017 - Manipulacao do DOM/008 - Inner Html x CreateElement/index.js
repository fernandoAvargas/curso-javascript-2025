"use strict";


/*

innerHtml => Retorna o texto, com fromatações e com elementos html

createElement => Cria um elemento html

*/

const div = document.querySelector("div");

console.log(1,div);

div.innerHTML = "<strong>Esse é o texto alterado</strong></p>"


// Ou

div.innerHTML += "<strong>Esse é o texto alterado</strong></p>";

// Ou também 

div.innerHTML = `${div.innerHTML} <strong>Esse é meu texto alterado</strong>`

console.log(2,div);

const elementUl = document.createElement("ul");

console.log(elementUl);

[1,2,3].forEach((element)=>{

    const elementLi = document.createElement("li");  

    elementLi.innerText = element;

    elementUl.appendChild(elementLi); 

});

div.appendChild(elementUl);

console.log(elementUl);

// Segundo análise foi detectado que o creatElement é mais performático,
// porém o innerHtml permite deixar o código mais apresentável e com mais recursos como as variáveis diretamente no texto. 