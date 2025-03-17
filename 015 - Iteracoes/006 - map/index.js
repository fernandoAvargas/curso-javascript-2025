const pedidos = [
    {
        id: 420,
        nome: "Dener",
        alimento: "Sanduiche Natural",
        bebida: "Acerola",
    },
    {
        id: 240,
        nome: "Chaves",
        alimento: "Sanduiche de presunto",
        bebida: "Tamarindo",
    },
    {
        id: 130,
        nome: "Magali",
        alimento: "Salada de frutas",
        bebida: "Melancia",
    },
    {
        id: 20,
        nome: "Smurf",
        alimento: "Sarsaparilla",
        bebida: "blueberry",
    },
]

/*

O método Map além de iterar todo array ele é muito bom para editar o iterado, ou seja, os dados do array.

*/

pedidos.map((element,index) => { console.log(element, index)});

pedidos.map((element) => {

    if(element.id === 240){
       
      return (element.alimento = "pizza de presunto");
      
    }

});

pedidos.map((element,index) => { console.log(element, index)});