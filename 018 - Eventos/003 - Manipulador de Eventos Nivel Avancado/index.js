"use strict";


const button = document.querySelector('button');


button.addEventListener('click',(event) => {
    console.log(event);
    console.log(event.clientX, event.clientY)
});

//No nível básico não é possível excutar mais de uma função, inline, ao mesmo tempo. No n´vel avançado isso é possível


button.addEventListener('click',() => {
    console.log(1);    
});

button.addEventListener('click',() => {
    console.log(2);    
});


button.addEventListener('mouseover',() => {
    console.log(3);    
});

const body = document.querySelector("body");

button.addEventListener('click',() => {
    
    body.style.background = "orange";
});

button.addEventListener('mouseover',() => {
    
    body.style.background = "gray";
});



    
