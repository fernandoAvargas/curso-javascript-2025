function Tenis(tamanho,estoque,preco){
  return{


    tamanho: tamanho,
    estoque: estoque,
    preco: preco


  }
}

console.log(Tenis(35,true,"R$100,00"));



function Tenis2(tamanho,estoque,preco){
    return{ 
      tamanho, //short name ou suggar. Assim não há necessidade de passar o nome e os dois pontos da propriedade
      estoque,
      preco: preco  
  
    }
  }
  
  console.log(Tenis2(40,false,"R$0,00"));


  const Tenis3 = {    
      tamanho : 20, 
      estoque : true,
      preco : "R$60,00",
  };

  console.log(Tenis3);

  const Tenis4 = {
    getTamanho(){
      return 45;
    }
  }
  
  console.log("Tamanho = " + Tenis4.getTamanho());