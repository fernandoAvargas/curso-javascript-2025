/*
  Uma closure ocorre normalmente quando uma função
  é declarada dentro do corpo de outra, e a função interior
  referencia vairáveis locais da função exterior.
*/


function QualSeuNome(nome){

    const msg = `O meu nome é:`;
    function SeuNome(){
        return `${msg} ${nome}`
    }

    return SeuNome();
}

console.log(QualSeuNome("Fernando"));

// console.log(QualSeuNome("Fernando").SeuNome()); 

// Não vai funcionar porque não é possível acessar.

console.log(QualSeuNome("Fernando").SeuNome); // Retornará undefined porque não é possível ter acesso a função SeuNome()

// Calculadora versão 1

function Calculadora1(num1,num2){
   
const soma = () => {
   return `${num1 + num2}`
}
const subtracao = () => {
    return `${num1 - num2}`
 }
 const multiplicacao = () => {
    return `${num1 * num2}`
 }
 const divisao = () => {
    return `${num1 / num2}`
 }
 
return{
    soma,
    subtracao,
    multiplicacao,
    divisao
   }
}

console.log(Calculadora1(1,2).soma());



// Calculadora versão 2

function Calculadora2(num1,num2){
   
    let msg = "Resultado:"
     
    const soma = () => {
       return `${msg} ${num1 + num2}`
    }
    const subtracao = () => {
        return `${msg} ${num1 - num2}`
     }
     const multiplicacao = () => {
        return `${msg} ${num1 * num2}`
     }
     const divisao = () => {
        return `${msg} ${num1 / num2}`
     }
     
    return{
        soma: soma(),
        subtracao: subtracao(),
        multiplicacao: multiplicacao(),
        divisao: divisao()
       };
    }
    
    console.log(Calculadora2(8,2).divisao);