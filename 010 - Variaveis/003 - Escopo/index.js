/*
Escopo: 
Determina quais
são os dados que podem
ser acessados em uma determinada
parte do código
*/

let global = "Essa é uma variável que pode ser acessada globalmente";

TesteDeVariavelGlobal();

function TesteDeVariavelGlobal(){

    let escopo = "Essa é uma variável de escopo, ou seja, só pode ser acessada aqui dentro dessa função"

    console.log(global); //Pode ser acessada dentro de um escopo porque ela foi definida fora e no início do código

    console.log(escopo);
}

function TesteDeVariavelEscopo(){

    console.log(escopo); // Não será possível ser acessada porque ela está dentro da função TesteDeVariavelGlobal e
                         // Se essa função for executada vai o dar erro a seguir.

/*
at Object.<anonymous> (C:\Deliver\Curso JavaScript\curso-javascript-2025\010 - Variaveis\003 - Escopo\index.js:29:1)
    at Module._compile (node:internal/modules/cjs/loader:1550:14)
    at Object..js (node:internal/modules/cjs/loader:1702:10)
    at Module.load (node:internal/modules/cjs/loader:1307:32)
    at Function._load (node:internal/modules/cjs/loader:1121:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:219:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)
    at node:internal/main/run_main_module:36:49
*/


}


if(true){

var atencao = "Evite utilizar o var porque ele pode ser acessado de qualquer parte do código"

console.log(atencao); // Vai funcionar, mas por ser do tipo VAR não vai ficar contida nesse escopo. 
                      // Porque pode ser acessada de qualque parte desse código, ou seja, desse arquivo JavaScript
}

console.log(atencao); //Irá funcionar, mas isso é perigoso porque ela foi declarada dentro de um escopo e 
                      // não deveria ser acessada, ou seja, não deveria funcionar

