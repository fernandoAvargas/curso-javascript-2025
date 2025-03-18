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
    {
        id: 20,
        nome: "Popeye",
        alimento: "Espinafre",
        bebida: "Melancia",
    },
]


const findById = pedidos.find((element) => {
   return element.id === 20;
});


console.table(findById);


const findByDrink = pedidos.find((element) => {
    return element.bebida === "Melancia";
 });

 // O Find busca o primeiro resultado da busca e só mostra um, meso que tenham outras bebidas iguais.

 console.table(findByDrink);