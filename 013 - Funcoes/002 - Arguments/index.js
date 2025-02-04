function soma(num1, num2){

    if(typeof num1 === "number" && typeof num2 === "number"){
  
       return num1 + num2;
    }
  
    return "Você passou dados diferentes!";  
  }
  
  console.log(soma(5,5));
  
  // --------------------------------------------
  
  function subtracao(){
    return arguments;
  };
  
   console.log(subtracao(1,2,"Abc")); // Arguments não funciona com Arrow Functions
  
  // Exemplo de subtração com Arrow Functions retornando argumentos
  
  const subtracaoArrow1 = (num1 = 0, num2 = 0) => {
  
      return num1 - num2;
  };
  
  console.log(subtracao(1,2));
  
  const subtracaoArrow2 = (num1 = NaN, num2 = NaN) => {
      if(typeof num1 === "number" && typeof num2 === "number"){
          return num1 - num2;
      }
      
      return "Você passou dados diferentes!";
  };
  
  console.log(subtracao(4,3));
  
  