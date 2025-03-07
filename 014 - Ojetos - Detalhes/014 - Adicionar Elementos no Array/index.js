/*

unshift = adiciona elemento no início do array

push = adiciona elementos no final do array

*/

let arrayList = [6,7,8,9,10];

console.log(arrayList);

arrayList[5] = 11; //Existe uma forma melhor de fazer isso sem a necessidade de saber o índice.

console.log(arrayList);

arrayList.push(12); // adicionou 12 no final do array

console.log(arrayList);

arrayList.unshift(5);

console.log(arrayList);