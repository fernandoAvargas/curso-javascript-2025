/*
  O que é uma função?
  É um conjunto de instruções que executa uma tarefa ou calcula um valor.
*/

// 1 - Funções declaration 

function isValidDeclaration(){
    const soma = 1 + 2;

    if(soma === 3){

        return true;

        console.log("Teste"); // Se soma === 3, ou seja, se a condição for verdadeira essa parte não irá ser executada porque aconteceu um return antes
                             
    }

    return false; // Se for verdadeiro essa parte também não vai acontecer
}

console.log(isValidDeclaration());

// 2 - Funções expression 

const isValidExpression = function(){
   
    return false; 
}

console.log(isValidExpression());

// 3 - Arrow functions 

const isValidArrow = () => {

    const multiplicacao = 2 * 2;
   
    return multiplicacao; 
}

console.log(isValidArrow());