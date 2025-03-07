let Passagem = {

    tipo: "Aérea",
    preco: 5000,
    moeda: "Reais",
    destino: "Toronto",
    pais: "Canadá",
    escala: "Sem escala"
}

console.log(Passagem);

Passagem.preco = 5800;

Passagem.moeda = "BRL";

console.log(Passagem);


//Também podemos adicionar assim:

Passagem["desconto"] = "15%";

console.log(Passagem);

// E para acessar

console.log(Passagem["desconto"]);