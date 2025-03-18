
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


const TemChaves = pedidos.some((element) => {
   return element.nome === "Chaves";
})

function Autografo(any){

    if(any === true){
        console.log("Pedir autógrafo!...");
    }
}

console.log(TemChaves);

Autografo(TemChaves);