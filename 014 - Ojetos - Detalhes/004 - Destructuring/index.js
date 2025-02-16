const Sapato1 = {

    tamanho: 43,
    estoque: true,
    marcas: [{nome: "XPTO1"}, {nome: "XPTO2"}],
    codigoBarras: 123456,        
}

const {tamanho,estoque,marcas,codigoBarras} = Sapato1;

console.log(tamanho,estoque,marcas,codigoBarras);



const Sapato2 = {

    tamanho: 43,
    estoque: true,
    marcas: [{nome: "XPTO1"}, {nome: "XPTO2"}],
    codigoBarras: 123456, 
    n: 5,  //Evitar criar variáveis com nomes indecifráveis       
}


const Sapato3 = {
    tamanho: 43,
    estoque: true,
    marcas: [{nome: "XPTO3"}, {nome: "XPTO4"}],
    secret: 123456, 
    n: 5,     
}

const { secret: randoNumber} = Sapato3;
//console.log(secret); - Vai dar erro porque não vai reconhecer como secret, mas como randoNumber porq conta do alias
console.log(randoNumber);


//Além de utilizar o nome da variável normalmente pode se utilizar o alias. Segue exemplo:

const { n: avaliacoes} = Sapato3;
console.log(avaliacoes);


const Sapato4 = {
    tamanho: 43,
    link: {a: "a",b: {c: "c"}},   //Como acessar esses objetos?  
};



const {link} = Sapato4;

console.log(link);

// Exemplo de como acessar

const {
  link: {
    a,
    b: {c}, 
  },
} = Sapato4;

console.log(a);
console.log(c);

// Assim dá pra acessar todos os níveis com destructuring