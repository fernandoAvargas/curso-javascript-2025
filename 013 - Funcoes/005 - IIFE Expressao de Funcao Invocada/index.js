// IIFE - Immediately Invoked Function Expression

// IIFE - Expressão de função invocada imediatamente


// (function(){})();


(function(){
    console.log("Teste");
})();



function consol(con){
    return console.log(con);
}

consol("Nome Sobrenome");


(function(num1, num2){
    const calc = num1 + num2;
    console.log(calc);
})(1,2);


(function(num1, num2){})(1,2);

    const calc = 1 + 2;
    console.log(calc);


    (() => { console.log(123);
    })();

// No caso abaixo não vai funcionar

/*

((win, doc) => {
    console.log(win);
    console.log(doc);
})(window, document);

*/

// Var não vai funcionar em contexto global nesse caso

/*

(() => {
    var teste = "Teste";
})();

console.log(teste); // Não consegue acessar a var teste

**/

// Já nesse caso var será acessado em qualquer parte do código

var teste2 = "teste2";

(() => {
    var teste = "teste1";
    console.log(teste2);
})();


(() => {
    var teste = "teste2";
    console.log(teste2);
})();