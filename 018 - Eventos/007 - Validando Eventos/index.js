"use strict";

const menu = document.querySelector("#menu");

console.log(menu);

//Pode se validar se existe o id menu colocando um ponto de interrogação ou com if

menu?.addEventListener("click", (event) => {

    const {target} = event;

    const body = document.querySelector("body");

    switch (target.getAttribute("class")){   
      case "home":
      body.style.background = "blue";
      break;

      case "sobre":
      body.style.background = "red";
      break;

      case "contato":
      body.style.background = "white";
      break;
    }
});

if(menu){
menu.addEventListener("click", (event) => {

  const {target} = event;

  const body = document.querySelector("body");

  switch (target.getAttribute("class")){   
    case "home":
    body.style.background = "blue";
    break;

    case "sobre":
    body.style.background = "red";
    break;

    case "contato":
    body.style.background = "white";
    break;
  }
})
};