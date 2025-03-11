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

   for(let item of arrayListObjects){
       console.log(item);
   }

   console.log("----------------------------------");

   for(let item of arrayListObjects){
    console.log(item.nome + " " + item.sobreNome);
}

console.log("----------------------------------");

const arrayList = [1,2,3,4,5,6,7,8,9];

for(let numero of arrayList) console.log(numero);

console.log("----------------------------------");

//Decrescente

for(let numero of arrayList.reverse()) console.log(numero);

//Fim

