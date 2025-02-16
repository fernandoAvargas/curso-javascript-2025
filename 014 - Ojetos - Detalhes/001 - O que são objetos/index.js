/*

Objeto: Tenis (propriedade) "cadarço", palmilha

Objeto: Celular (propriedade)

Objeto: Drone (propriedade)

Propriedades / Atributos / Funcionalidades

*/

let Tenis = {
  tipo: "Tênis de corrida",
  corCadarco : "Azul",
  estoque: 0,
  ativo: true,
  tamanhos:{
    palmilha: 40,
    Tenis: 42,
    caixa: {
      altura: 35,
      largura: 40,
      profundidade: 10
    },
  },
  marcaArrayValores: ["Nike","Adidas","Olimpkus"],
  marcaArrayObj: [{nome:"Nike",},{nome:"Adidas",},{nome:"Olimpkus",},
  ],
  getMarcaArrayValores: function(param){
    return this.marcaArrayObj[param];
  },
  getMarcaArrayObj: function(param){
    return this.marcaArrayObj[param].nome;
  },
};

console.log(Tenis);

console.log(Tenis.tamanhos.palmilha);

console.log(Tenis.ativo);