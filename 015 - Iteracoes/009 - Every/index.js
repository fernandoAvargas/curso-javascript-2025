const pedidos = [
    {
        id: 420,
        nome: "Barbye",
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

O método every() testa se todos os elementos do array passam pelo teste implementado pela função fornecida. 
Este método retorna um valor booleano.

*/

const soTemTamarindo = pedidos.every((element) => {
    return element.bebida === "Tamarindo";
});

console.log(soTemTamarindo);
