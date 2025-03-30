"use strict"


const h1 = document.querySelector("h1");


h1.style.color ="blue";


const p = document.querySelectorAll("p");

p.forEach((element,indice) =>{

    element.style.fontFamily = "verdana";

    console.log(indice);    
})


p.forEach((element,indice) =>{

    if( indice % 2 === 0){

        console.log(element);

        element.style.color = "gray";
    }else{

        element.style.color = "black";
    }
    
})

const li = document.querySelectorAll("li");

console.log(li);

function primo(num){

    if(num <= 1) return false;

    for(let count = 2; count <= Math.sqrt(num); count++){
      
        if(num % count === 0) return false;
    }

    return true;
}

li.forEach((element,indice) =>{

    if(primo(indice)){

        console.log(element);      

        element.style.color = "green";

    }else{

        element.style.color = "orange";

        element.style.fontWeight = "bold";


        console.log(indice);
    }  
})