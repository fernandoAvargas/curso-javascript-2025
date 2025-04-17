"use strict";

var submit = document.querySelector("#submit");

var change = document.querySelector("#change");

const form = document.forms.namedItem("select-radio");

form.addEventListener("submit", (event) =>{

    event.preventDefault();

    const radio = form.radio; //Dessa fora peg o nome do radio button presente no html

    console.log(radio); //Exibe um radio node list e node list pode ser iterado

    console.log("---------------------------------------------");

    console.log(radio.value);

    console.log("---------------------------------------------");

    radio.forEach((res) =>{

       console.log(res);

    });

    console.log("---------------------------------------------");

    radio.forEach((res) =>{

        if(res.checked){
            console.log(res);
        } 
     });

     console.log("---------------------------------------------");

     
     submit.innerHTML = radio.value;


});



form.radio.forEach((res) =>{
  res.addEventListener("change", (event) =>{
     const {target} = event; //Tecnica da desetruturação
    if(target.checked){    
          console.clear();    
          console.log(target.value);
    }
   });
});



form.radio.forEach((res) =>{
    res.addEventListener("change", (event) =>{
       const {target} = event; //Tecnica da desetruturação
      if(target.checked){   
           
            change.innerHTML = target.value;
      }
     });
  });