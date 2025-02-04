/*

Mostar quantas quatas letras repetidas aparecem em uma palavra

Exemplo: Abacate = { a: 3, b: 1, c: 1, t: 1, e: 1}

*/

const palavra = "Abacate".toUpperCase();
let = i = 0;
let letras = {};

for(i; i < palavra.length; i++){

    if(letras[palavra[i]]){
      letras[palavra[i]]++;
    }else{
        letras[palavra[i]]=1;  
    }
}

console.log(letras);



