/*

Precisamos mostrar a tabuada no console de 0 até 10 neste seguinte formato:

multiplicador x numero = resultado
multiplicador x 1 = resultado
multiplicador x 2 = resultado
multiplicador x 3 = resultado
.
.
.
multiplicador x 10 = resultado

Obs.: Não podemos criar varios console.log(multiplicador x 3 = resultado)

*/

console.log("");
console.log("");
console.log("===================================================")
console.log("TABUADA DE UM DETERMINADO NÚMERO. EXEMPLO: SETE (7)")
console.log("===================================================")

const multiplicador = 7;

for(let i = 1; i <= 10; i++){

  console.log(`${multiplicador} x ${i} = ${multiplicador * i}`);

}

// Se quiser todas as tabuadas de 1 x 1 ate 10 x 10

console.log("");
console.log("");
console.log("=====================================================");
console.log("        TABUADA COMPLETA. DE 1 X 1 ATÉ 10 X 10       ");
console.log("=====================================================");


for(let multiplicador = 1; multiplicador <= 10; multiplicador ++){

for(let i = 1; i <= 10; i++){

  console.log(`${multiplicador} x ${i} = ${multiplicador * i}`);

  if(i === 10)
  console.log("");

  }
}