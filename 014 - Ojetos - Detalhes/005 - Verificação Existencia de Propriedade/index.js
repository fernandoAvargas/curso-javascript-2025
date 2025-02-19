const Produto = {

    peso: 20,
    unidadeMedida: "kg",
    ativo: true,
    cores: [{cor: "branca"},{cor:"preta"}],
    codigoBarras: 123456,
    t: 8,
    link: {a: "letra a", b: { c: "letra c"}},
};

//hasOwnProperty | propertyName in Produto

console.log(Produto.hasOwnProperty("teste"));

// Com isso é possível fazer validações

if(Produto.hasOwnProperty("peso")){
    console.log("A propriedade tamanho existe em Produto");
}else{
    console.log("Não existe em Produto A propriedade tamanho");
}

// Também é possivel validar da seguinte forma

console.log(Produto.hasOwnProperty("unidadeMedida"));

console.log("unidadeMedida" in Produto);


