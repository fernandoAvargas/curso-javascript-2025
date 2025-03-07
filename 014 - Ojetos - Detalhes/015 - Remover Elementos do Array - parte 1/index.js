
/*
 shift => remove o primeiro elemento do array e retorna esse elemento

 pop => remove o ultimo elemento do array e retorna esse elemento

*/


let arrayList = [1,2,3,4,5];

console.log(arrayList);

console.table(arrayList);

arrayList.shift();

console.log(arrayList);

console.table(arrayList);

console.log("shift => ",arrayList.shift()) //Também é possível remover direto

console.table(arrayList);

console.log(arrayList);

console.table(arrayList);

arrayList.pop(); //Assim removerá o último elemento

console.log("pop => ", arrayList.pop());

console.table(arrayList);
