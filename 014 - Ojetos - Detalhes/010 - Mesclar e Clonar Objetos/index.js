let Calcado = {
  cor: 'preta',
  tamanho: 45,
  estoque: 10
};

let Link = {Link: {a: "A", b: { c: "C"}}};

let clone1 = Calcado;

console.log(clone1);

let mesclar1 =  Object.assign(Calcado , Link);

console.log(mesclar1);

let mesclar2 = {...Calcado, ...Link};

console.log(mesclar2);


// Inicição de entendimento ocm objetos rasos e objetos profundos

clone1.estoque = false;
mesclar1.Link.a = "ABC";

console.log(mesclar1);
console.log(mesclar2);
console.log(Calcado);

// Em objetos rasos o mesclar e clonar funcionam normalmente, porém em objetos 
// mais a fundo ele começa a afetar a referência de outros objetos 