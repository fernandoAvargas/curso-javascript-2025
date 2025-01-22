console.log('Aqui vai uma string com aspas simples');

console.log("Aqui vai uma string com aspas duplas");

console.log(`Aqui vai uma string com crases`);

console.log('"Texto com aspas duplas"');


console.log(`"''""''`); //Aqui é possível utilizar asps simples e duplas no texto. Basta envolver com crases

console.log('"Texto com aspas duplas tem que envolver com aspas simples ou crases"');

console.log("'Texto com aspas simples tem que envolver com aspas duplas ou crases'");

console.log('"Aqui o texto é envolvido externamente com aspas simples e internamente começa com aspas duplas, mas não termina. \n Neese caso não dá erro porque as aspas ali é reonhecida como parte do texto');

console.log('Linha 1 \n Linha 2 \n Linha 3 \n Linha n...');

console.log('Linha 1\ Linha 2\ Linha 3\ Linha n...');


let minhaString = "Esta é uma\nstring que se estende por\r\nvárias linhas.";
let linhas = minhaString.split(/\r?\n/);
console.log(linhas);

console.log(String(123456));
