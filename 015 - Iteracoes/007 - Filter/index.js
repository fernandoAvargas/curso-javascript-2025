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

/*

Esse método é necessário quando precisamos filtrar uma lista

*/

const filterDrinks = pedidos.filter((element, index) => {

    return element.bebida === "Melancia"
})

console.table(filterDrinks);