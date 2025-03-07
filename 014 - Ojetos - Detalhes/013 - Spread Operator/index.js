const num = [1,2,3,4,5];

console.log(num);

// simulando o spread operator

console.log(num[0],num[1],num[2],num[3],num[4]);

// Não precisa passar indice de todos elemento, basta iniciar com '...'

console.log(...num);

let maiorNumero = Math.max(...num);

console.log(maiorNumero);

//Sem spread operator

console.log(Math.max(num));

// Não foi possível saber qual era o maior número porque o valor passado para a função max foi um array.

