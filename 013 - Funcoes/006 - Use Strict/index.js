/*
O Strict Mode elimina alguns erros silenciosos que passariam batido do JavaScript e os faz emitir erros.

Além disso, essa forma corrige alguns erros que tornam o JavaScript difícil de ser otimizado, então algumas
vezes os códigos no modo estrito rodam mais otimizados e velozes do que os códigos no 'modo normal'. 

https://www.geeksforgeeks.org/use-strict-in-javascript/

*/

"use strict";

(() => {
    let teste = "Teste";
    console.log(teste);
})();

// Não vai funcionar porque não consegue ter acesso a variável de escopo let teste

/*

(() => {
    let teste = "Teste";  
})();

console.log(teste);

*/



(() => {
    teste = "Esse teste ocasionará hoisting";  
})();

console.log(teste);


(() => {
    teste = "Esse teste usa use strict";  
})();

console.log(teste);

// Vai dar esse erro:  teste is not defined



var arguments; // Vai dar erro porque no uso estrito não permite utilizar palavras reservadas para nome de variáveis

(() => { teste = "teste";
})();

console.log(teste);



