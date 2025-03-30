"use strict";

/*
  
A interface do DocumentFragment representa um objeto de documento mínimo que não possui pai. Ela é utilizada como uma 
versão leve de Document (DOM) para armazenar fragmentos bem formados ou fragments potencialmente mal formados de XML.

Vários outros métodos podem usar um document fragment como argumento (ex. qualquer interface de Node como Node.appendChild 
e Node.insertBefore) em casos em que os filhos do fragment são acrescentados ou inseridos, e não o próprio fragment.

Essa interface também é excelente para ser usada com Web components: elementos <template> contém um DocumentFragment 
na propriedade HTMLTemplateElement.content deles.

Um DocumentFragment pode ser criado usando o método document.createDocumentFragment ou o construtor.

*/

/*

DOM [principal]
fragmentDom [secundario, ou seja, fora do DOM principal]

Ajuda muito do desempenho

*/


const ul = document.querySelector("ul");

const fragment = document.createDocumentFragment();

const lanches = ["Lanche 1","Lanche 2","Lanche 3","Lanche 4"]

lanches.forEach((element) => {
  const li = document.createElement("li");  
  li.textContent = element;
  fragment.append(li);
});

ul.append(fragment);

