"use strict";

const p = document.getElementById("paragrafo");


console.log(p);

/*

 A função getElementById consegue recuperar um elemento da página apenas pelo ID. 
 Já a função querySelector é muito mais flexível, pois consegue recuperar elementos pelo nome da tag,
  nome da classe e também pelo id.

O mais comum é utilizar o querySelector, mas às vezes você encontrará códigos que utilizam o getElementById.

Obs: Mesmo com dois id´s de nomes iguais da página, o que não é correto e foi só para teste, o getElementById 
considerou somente o primeiro que ele encontrou e exibiu no console.log enquando os demais ele descarta.

*/