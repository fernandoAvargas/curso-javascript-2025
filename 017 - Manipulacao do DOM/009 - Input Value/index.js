"use strict";

const input = document.querySelector("#name");

console.log(input.innerText);  // Não deu certo pegar os dados do input com innerText

console.log(input.value);


setTimeout(() => {

    input.value = "Me nome é XPTO";

    console.log(input.value);

},3000);

const teste = "Texto originário de variável..."

setTimeout(() => {

    input.value = teste;

    console.log(input.value);
    
},8000);

// Para pegar os valores de formulário é diferente.




