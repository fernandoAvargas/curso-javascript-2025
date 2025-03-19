"use strict"


const p = document.querySelectorAll("p");

//console.log(p);

p.forEach((element, index) =>{

    console.log(index, element);
});


p.forEach((element, index) =>{

    element.style.padding = "18px";

    if(index === 0){

        element.style.background = "red"; 

        element.style.color = "#F5F5F5";

    }else if(index === 1){

        element.style.background = "blue"; 

        element.style.color = "#FAF0E6";
    }    
})