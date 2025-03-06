let Tenis = {
    cor: 'azul',
    tamanho: 45,
    estoque: 10
  };


let link = {link: {a: "a", b: {c: "c"}}};

let clone1 = Tenis;
console.log(1, clone1);
console.log(2, Tenis);

let mesclar1 = Object.assign(Tenis, link);

let mesclar2 = {...Tenis, ...link };

clone1.estoque = false;
mesclar1.link.a = "ABC";

console.log(3,clone1);
console.log(4,Tenis);
console.log(5,mesclar1);
console.log(6,mesclar2);


// Aqui Vemos qie ele fez alterções onde não deveria fazer porque ele fez um clone "raso"

/*

1 { cor: 'azul', tamanho: 45, estoque: 10 }
2 { cor: 'azul', tamanho: 45, estoque: 10 }
3 {
  cor: 'azul',
  tamanho: 45,
  estoque: false,
  link: { a: 'ABC', b: { c: 'c' } }
}
4 {
  cor: 'azul',
  tamanho: 45,
  estoque: false,
  link: { a: 'ABC', b: { c: 'c' } }
}
5 {
  cor: 'azul',
  tamanho: 45,
  estoque: false,
  link: { a: 'ABC', b: { c: 'c' } }
}
6 {
  cor: 'azul',
  tamanho: 45,
  estoque: 10,
  link: { a: 'ABC', b: { c: 'c' } }
}

*/

// Uma das soluções é utilizar o Json Stringfy e depois converter em objeto...
// Alguns não fostam desta solução por argumentar que não é perfomática

console.log("-------------------------------------------------------------------------------");

let cloneProfundo = JSON.stringify(Tenis);

console.log(cloneProfundo);

console.log(cloneProfundo.tamanho); //Vai dar undefined porque não é mais um objeto

console.log(typeof(cloneProfundo));

//Para transformar em objeto é possível converter para Json

let clone = JSON.parse(cloneProfundo);

console.log(typeof(clone));

console.log(clone.tamanho);

//Agora se alterar algo do objeto clone não vai alterar as referências dos outros objetos

clone.estoque = 2;

console.log(cloneProfundo,clone);

// Agora vemos que o tamanho = 2 só foi alterado em clone e em cloneProfundo permanece tamanho = 10

// É possivel reduzir facilitar as conversões do objeto assim:

let cloneObjeto = JSON.parse(JSON.stringify(cloneProfundo));

console.log(typeof(cloneObjeto));

console.log(cloneObjeto.estoque);

console.log("-------------------------------------------------------------------------------");

// É possivel criar um método facilitar as conversões do objeto 

function CloneObjeto(obj){
   return JSON.parse(JSON.stringify(obj));
}

console.log("-------------------------------------------------------------------------------");


console.log(typeof(CloneObjeto(cloneProfundo)));






