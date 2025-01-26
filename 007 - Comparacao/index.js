/*
Comparações:

== , === , != , !==, >, < , >= , <=

*/

console.log(1 == 1);

console.log("1" == 1); // Cuidado

console.log("1" === 1);

console.log(String(1) == Number(1)); // Cuidado

console.log(String(1) === Number(1)); 

console.log(1 != 2); 

console.log(1 != "1"); // Cuidado

console.log(1 !== "1"); 

console.log(2 > "1"); // Cuidado

console.log("1" < "3"); // Cuidado

console.log(1>=1);

console.log(1<=1);

console.log(String(1)>=1); // Cuidado

console.log(1<=String(4)); // Cuidado

// Obs: O operador >== ou <== não existe em JavaScript