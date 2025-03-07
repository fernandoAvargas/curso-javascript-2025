/*

slice = pega os dados dentro de um range sem quebrar o array
splice = remove os dados do array original dentro de um range

*/

let arrayList = [
    {produto: "relógio", valor: "€300.00"},
    {produto: "celular", valor: "€800.00"},
    {produto: "televisor", valor: "€2000.00"},
    {produto: "teclado", valor: "€95.00"},
    {produto: "mouse", valor: "€50.00"},
    {produto: "Smart watch", valor: "€950.00"},
    {produto: "tablet", valor: "€1880.00"},
    {produto: "computador", valor: "€300.00"},
    {produto: "monitor", valor: "€1000.00"},
    {produto: "PlayStation", valor: "€1500.00"},
];

console.table(arrayList);

//Agora será feita uma cópia de perte de arrayList, mas sem alteração do arry original

const sliceArrayList = arrayList.slice(1,3);

console.table(sliceArrayList);

const spliceArrayList = arrayList.splice(0,2);

console.table("Alterou o arrayList");

console.table(arrayList);

console.table("Cópia de arrayList, que foi modificado, gerou o spliceArrayList");

console.table(spliceArrayList);

//Para remover somente um elemento com splice basta pegar o indice seguido de vírgula e o número 1

console.table(arrayList.splice(3,1));

console.table(arrayList); //Removeu o smart watch e ainda organizou o arrayList

