
console.log(soma());

console.log(x);

function soma(){
    return 1+1;
}

var x = 10;

 

// ---------------------------
x =undefined;
// O que ocorre é como se ele estivesse invertendo a ordem da chamada e crirando uma variável var x

function soma(){
return 1 + 1;
}

console.log(soma());

var x;
console.log(x);

x = 10;

// É necessário cuidado para não ficar em contexto global e deixar dentro do escopo. Exemplo:


function Teste(){

    function soma(){

        return 1 + 1;
    }
    
    console.log(soma());

    let x;

    x = 10;

    console.log(x);

    
}

Teste();

// Logo, além de deixar dentro de um contexto global, é importante não utilizar VAR e sim LET ou 
// CONST (caso não houver necessidade de alterar o valor da variável)
// É importante evitar de manter uma ordem de sequencia de chamada dos dos métodos e varíaveis para evitar bugs. 
// Exemplo:

function Teste(){

    function soma(){

        return 1 + 1;
    }
    
    console.log(soma());

    let x;    

    console.log(x);

    x = 10; // Se a variável for declarada depois do console irá aparecer undefined
    
}

Teste();




