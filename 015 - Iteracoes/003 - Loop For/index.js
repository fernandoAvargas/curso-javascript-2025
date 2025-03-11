const arrayList = [1,2,3,4,5,6,7,8,9];

// for ([inicialização]; [condição]; [expressão final]) 

for(let i = 0; i <10; i++){
    console.log(i);
}

console.log("----------------------------------");

// Iteração decrescente

for(i = arrayList.length; i>=0; i--){
    console.log(i);
}

console.log("----------------------------------");

// Iterando o arrayList

for(let i = 0; i < 9; i++){
    console.log(arrayList[i]);
}

console.log("----------------------------------");

// Ou

for(let i = 0; i < arrayList.length; i++){
    console.log(arrayList[i]);
}

console.log("----------------------------------");

//Iterar um array de objetos

const arrayListObjects = [
 {
    nome: "nome1",
    sobreNome: "sobreNome1"
 },
 {
    nome: "nome2",
    sobreNome: "sobreNome2"
 },
 {
    nome: "nome3",
    sobreNome: "sobreNome3"
 } 
]

for(count = 0; count < arrayListObjects.length; count++){

    console.log(arrayListObjects[count]);
}

console.log("----------------------------------");

//Iterar um array de objetos e listar as propriedades

for(count = 0; count < arrayListObjects.length; count++){

    console.log("Nome completo: " + arrayListObjects[count].nome + " " + arrayListObjects[count].sobreNome);
}




