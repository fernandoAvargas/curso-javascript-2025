"use explict";

const container = document.querySelector(".container");

const paragrafo = container.querySelector(".paragrafo");

const newH2 = document.createElement("h2");

const newH3 = document.createElement("h3");

newH2.innerText = "Novo H2";

newH3.innerHTML = "Novo H3";

container.insertBefore(newH2, paragrafo); // Vai inserir o H2 antes do Primeiro. O que tem a classe paragrafo

//Também é possível com document

const h1 = document.querySelector("h1");

container.insertBefore(newH3,h1)

