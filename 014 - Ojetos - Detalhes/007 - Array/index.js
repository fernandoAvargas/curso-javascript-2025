const brinquedos = ["bola", "boneca", "dinossauro"];

console.log(brinquedos);

console.log(brinquedos[1]);

console.log(brinquedos.length);

    brinquedos.forEach(async (brinquedo) => {
        console.log(brinquedo)
    });

    for (let i = 0; i < brinquedos.length; i++) {
        console.log(brinquedos[i])
    }

  //-------------------------------------------------------------------------

  //Array de objetos

    let cars = [
        {
        "color": "blue",
        "type": "minivan",
        "registration": new Date('2017-01-03'),
        "capacity": 7
        },
        {
        "color": "red",
        "type": "station wagon",
        "registration": new Date('2018-03-03'),
        "capacity": 5
        }  
    ]
//-------------------------------------------------------------------------

    var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function tabuadaDe2(item) {
        console.log(item*2);
    }

    numeros.forEach(tabuadaDe2)

//-------------------------------------------------------------------------

    let Lanches = [["coxinha","pizza","pastel"],["bolo","rocambolle","quindim"]];

    console.log(Lanches);

    function MinhaFuncao(){
        console.log(Lanches);
    }

   MinhaFuncao();

  //-------------------------------------------------------------------------

  let count = 0, item = 0;
  let MeusLanches = [];
 
 Lanches.forEach(() =>{
    listaLanches(count,Lanches)
   
    count++;
});

  function listaLanches(count,Lanches){
     MeusLanches.push(Lanches[count]);   
  }

  console.log(MeusLanches);

  count = 0
  item = 0;


