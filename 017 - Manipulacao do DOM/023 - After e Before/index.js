"use strict";


const container = document.querySelector(".container");

container.after("TESTE DE ICLUSÃO DE TEXTO DEPOIS DO CONTAINER");

//Ele não aceita tags html junto com o texto. Se colocar a tag vai aparecer como texto também

//Pra conseguir adicionar elemento com ele será preciso utilizar document.createElement

const newStronP1 = document.createElement("p");

newStronP1.innerHTML = "<strong>TESTE DE INCLUSÃO DE TEXTO COM TAG DEPOIS DO CONTAINER</strong>"

newStronP1.style.color="red";

container.after(newStronP1); // Assim dá certo... Um texto dentro de um elemento com tag strong e colorido

const newStronP2 = document.createElement("p");

newStronP2.innerHTML = "<strong>TESTE DE INCLUSÃO DE TEXTO COM TAG ANTES DO CONTAINER</strong>"

newStronP2.style.color="blue";

container.before(newStronP2);



