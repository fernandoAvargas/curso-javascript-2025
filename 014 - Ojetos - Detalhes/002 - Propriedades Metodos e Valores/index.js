function Tenis1(tamanho,estoque, preco){

    return{
      tamanho: tamanho,
      estoque: estoque,
      preco: preco,
    };
}

console.log(Tenis1(35,true,"R$35,00"));

//Padrão suggar ou short name



function Tenis2(tamanho,estoque, preco){

    return{
      tamanho,
      estoque,
      preco,
    };
}

console.log(Tenis2(35,true,"R$35,00"));


//--------------------------------------------


const tamanho = 35;
const estoque = true;
const preco = "R$35,00";

const Tenis3 = {
    tamanho,
    estoque,
    preco,
};

console.log(Tenis3);


// Métodos ou funções

const Tenis4 = {

    getTamanho(){

        return 35;
    },
};


console.log(Tenis4.getTamanho());


