/*
1 - Nome de função
2 - Retorno
3 - Não tem Hoinsting
4 - Arguments
*/

// 1 - Nome de função

function nomeFunction(){

return "nome e sobrenome";

}

console.log(nomeFunction());

const nomeFuncArrow = () => { return "nome e sobrenome";}

console.log(nomeFuncArrow());

// 2 - Retorno sem return

const nomeFunctionArrowReturn = () => "nome Sobrenome";


console.log(nomeFunctionArrowReturn());


// 3 - Não tem Hoinsting

// Quando é ArrowFunctions não aceita hosting porque as arrowFunctions sá executam na ordem correta.

// Se for chamar a função antes da criação vai dar erro porque ainda não existe.


// console.log(FunctionArrowHoisting1());

// const FunctionArrowHoisting1 = () => {

//     return "nome e sobrenome";
// }

//Se inverter a ordem vai funcionar

const FunctionArrowHoisting2 = () => {

    return "nome e sobrenome";
}

console.log(FunctionArrowHoisting2());

// Agora, se for function que não é arrow function o Hoisting vai funcionar


console.log(FunctionHoisting()); // Chamando uma função que ainda será criada

function FunctionHoisting(){

    return "Ocorreu Hoisting";
}


// 4 - Arguments

function FunctionArguments(){

 return arguments;

}

console.log(FunctionArguments("Teste"));


// Curiosidade: Dá para executar arrowfunctions sem o parênteses. Funciona quando só existe um parametro

const FunctionArrowParams = param => param;

console.log(FunctionArrowParams("Teste"));




//5 - Arrows Functions Não podem ser invocadas como New porque ela não tem um construtor já as functions tem isso.


class newFunc{
   constructor(nome){
    this.nome = nome;
   }
}

function newFunction(){

    return 123;
}

console.log(new newFunction());

const a = new newFunc("Sao Paulo");
console.log(a.nome);




/*
6 - Contexto 
Arrow functions possuem this léxico equanto o modelo normal possui this dinâmico




Isso significa que Arrow Functions herdam o contexto local de onde foi declarado,
enquanto o modelo normal possui o contexto associado ao objeto que ele está vinculado
ao momento da chamada

Se ele não estiver associado a ninguém na chamada, ele assumirá this automáticamente
como o contexto global, que no caso dos navegadores é window

*/

const lanches = {
    cardapio:[
     {nome: "Hanburguer", preco: "R$ 25"},
     {nome: "Croassaint", preco: "R$ 23"}    
    ],

    meuPedidoFunc: function(select){

        return console.log(this.cardapio[select]);
    },

    meuPedidoFuncTimeOut: function(){
        setTimeOut(
           function(){
            console.log(this.cardapio);
            console.log(this);
           }.bind(this),
           10000

        )},

    meuPedidoArrowFunc: (select) => { 
      this.cardapio = [{
            nome: "Hamburguer", preco: "R$ 25",
            nome: "Croassaint", preco: "R$ 23"
         }
      ];

      return console.log(this.cardapio[select]);

    },

};

 lanches.meuPedidoFunc(1);
 lanches.meuPedidoArrowFunc(1)
 lanches.meuPedidoFuncTimeOut()    


/*

7 - Construtor 
Arrow functions não podem ser constructors, então não é possível usar operador new com a mesma

*/


