
const pedidos = [
    {
        id: 420,
        nome: "Barbye",
        alimento: "Sanduiche Natural",
        bebida: "Acerola",
        preco: 100,
    },
    {
        id: 240,
        nome: "Chaves",
        alimento: "Sanduiche de presunto",
        bebida: "Tamarindo",
        preco: 150,
    },
    {
        id: 130,
        nome: "Magali",
        alimento: "Salada de frutas",
        bebida: "Melancia",
        preco: 80,
    },
    {
        id: 20,
        nome: "Smurf",
        alimento: "Sarsaparilla",
        bebida: "blueberry",
        preco: 200,
    },
    {
        id: 20,
        nome: "Popeye",
        alimento: "Espinafre",
        bebida: "Melancia",
        preco: 170,
    },
]

/*
   A função reduce do JavaScript serve para iterar sobre um array e utilizar o valor de cada item para criar 
um objeto final com base em alguma regra. Como o próprio nome da função sugere, ela “reduz” os itens de um vetor
a um valor único. Por exemplo, podemos utilizá-la para obter a soma ou produto dos itens de um vetor numérico.

*/

const balancete = pedidos.reduce((total,element) =>{
return total + element.preco;
}, 0);

console.log(balancete);
