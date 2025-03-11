//O For In é utilizado para casos específicos. É mais indicado para trabalhar com um array de objetos

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

//Vai listar o índice dos objetos 

for(let item in arrayListObjects){

    console.log(item);
}

console.log("-------------------------------");

for(let item in arrayListObjects){

    console.log(arrayListObjects[item]);
}

console.log("-------------------------------");

for(let item in arrayListObjects){

    console.log(arrayListObjects[item].nome);
}

console.log("-------------------------------");

const arrayList = [1,2,3,4,5,6,7,8,9];

//Muito cuidado ao utilizar o For In. Aqui nesse exemplo ele só listou o índice e não o conteúdo de cada índice do array

for(let item in arrayList){

    console.log(item);
}

console.log("-------------------------------");

// Se quiser acessar o conteúdo do array com For IN terá que fazer isso:

for(let item in arrayList){

    console.log(arrayList[item]);
}