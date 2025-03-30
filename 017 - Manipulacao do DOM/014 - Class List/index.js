"use strict";

const h1 = document.querySelector("h1");

h1.classList.add("active", "teste1");

h1.classList.add("active", "teste2");

h1.classList.remove("teste2");

console.log(h1);


if(h1.classList.contains("active")){
    alert("Existe a classe active!...");
}

h1.classList.toggle("teste2");

console.log(h1); //O Toggle adicionou a classe teste2 porque não existia. Se existisse ele iria remover...