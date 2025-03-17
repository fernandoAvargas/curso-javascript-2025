const myBooks = [
    {
       title : "The New Life Love",
       totalPages: 200,
       width: 25,
       Height: 20,
       author: "Petterson Garthner",
       publisher: "Amazon Books",
       category: "romance", 
       unityType: "cm",
       isbn: "A-0010-Z"  
    },
    {
        title : "On The Boss",
        totalPages: 500,
        width: 260,
        Height: 190,
        author: "Sarah Nay Debhor",
        publisher: "Uncle Boob",
        category: "business",
        unityType: "mm",
        isbn: "B-0080-S",
     },
     {
        title : "The New Life Love 2",
        totalPages: 220,
        width: 24,
        Height: 21,
        author: "Petterson Garthner / Mary Von Garthner",
        publish: "King James corp", 
        unityType: "cm",
        category: "action",
        isbn: "X-0085-T", 
     },
     {
        title : "Universal War",
        totalPages: 150,
        width: 2.5,
        Height: 2,
        author: "Eduard Nakamotho",
        publish: "Genial Books", 
        unityType: "inch",
        category: "action",
        isbn: "C-0991-A",  
     },
]

myBooks.forEach(item =>{
    console.table(item);
});

console.log("-------------------------------------------------------");

myBooks.forEach((item,index) =>{
    console.log(index,item);
});

console.log("-------------------------------------------------------");

myBooks.forEach((item, index) =>{
    if(item.title === "On The Boss"){
        return console.log("I´m reading this book now");     
    }
    console.log(index,item.isbn);
});

// Atenção: Break não funciona no foreach...Para isso podemos utilizar o return


numeros = [0,1,2,3,4,5,6,7,8,9,10];

total = 0;

function somar(item,indice, array){
   total += item;
   array[indice] = total;
  }

 
numeros.forEach(somar)

console.log(total);


console.log(numeros);

