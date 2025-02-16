/*
   Utilizado no paradgma de Orientação a Objetos o construtor cria um objeto a partir da classe. No JavaScript é
   possível simular o paradigma OO através de uma função que assim como no construtor da classe criará o objeto
   em tempo de execução.

   No JvavaScript existem várias funções construtoras como a função Date()...  Aqui iremos criar nossas próprias
   funções contrutoras.

  Obs: Como convenção o nome de uma função inicia com letra maiúscula

*/

console.log(new Date());

function Name(){}

const nome = new Name();

console.log(nome);

// ----------

function Name2(){
    this.name2 = "";
}

const nome2 = new Name2();

console.log(nome2);

// ----------

function Name3(){
    this.name3 = "nome sobrenome";
}

const nome3 = new Name3();

console.log(nome3);

// Agora um teste para acessar dados do objeto 

console.log(nome3.name3);

// Passagem de parâmetros

function NameParametros(name){
this.name = name;
}

const n1 = new NameParametros("Nome1");
const n2 = new NameParametros("Nome2");

console.log(n1);
console.log(n2);



function NomeSobreNome(nome,sobrenome){
    let gender = nome.slice(-1);
    this.name =  gender === "a"? "Sra. " + nome : "Sr. " + nome;
    this.lastName = () =>{
    const fullName = `${this.name} ${sobrenome}`;
    return fullName;
    }
}
    
const nomeCompleto = new NomeSobreNome("Fernando", "Vargas");

console.log(nomeCompleto.lastName());


// Calculadora versão 1


function Calculadora1(num1,num2){
    this.soma = () => {
        return `${num1 + num2}`
    }

    this.subtracao = () => {
        return `${num1 - num2}`
    }
}


const calc1 = new Calculadora1(1,2);

console.log(calc1.soma());

console.log(calc1.subtracao());




// Calculadora versão 2


function Calculadora2(){
    this.soma = (num1,num2) => {
        return `${num1 + num2}`
    }

    this.subtracao = (num1,num2) => {
        return `${num1 - num2}`
    }
}


const calc2 = new Calculadora2();

console.log(calc2.soma(1,2));

console.log(calc2.subtracao(3,6));

console.log(new Calculadora2().soma(10,10)); // Chamada direta de função.