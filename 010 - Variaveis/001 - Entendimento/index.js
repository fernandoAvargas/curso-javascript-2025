/*

var  É utilizado globalmente e pode ser acessado de 
     mesmo se estiver dentro de um escopo, ou seja, deve ser evitado e utilizado em situações específicas

let  É gerado dentro de um escopo, mas pode ser utilizado globalmente se declarado logo no início do código

const  É gerado dentro de um escopo porém só pode ser armazenado somente uma vez e depois disso torna-se imutável.
       Também pode ser acessado globalmente se declarado no início do código

*/

// Quando for criar as varáveis não utilize palavras reservas exemplo: Break, Else, String etc;
// Sempre tente segui um padrão para criação de nomes de variáveis que começam com número, caracteres especiais, 
// separados por traço ou espaços em branco
// Sempre pense em criar variáveis com nome que façam sentido com o que você está desenvolvendo n momento Ex: nomeSobrenome

var cachorro = "titico";
console.log(cachorro);

cachorro = "teca";
console.log(cachorro);

let lanche = "bolo de chocolate";
console.log(lanche);

lanche = "rocambole";
console.log(lanche);

nome = "Fernando";
console.log(nome);

sobreNome = "Assis";

console.log(sobreNome);

let nomeCompleto = nome + " " + sobreNome;

console.log(nomeCompleto);

const PERCENTUAL_DESCONTO = 10;

// PERCENTUAL_DESCONTO = 15; (Vai dar erro proque só poder receber um valor e depois não é possível fazer alteração)






