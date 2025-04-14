"Use strict";

const link = document.querySelector("a");

link.addEventListener("click",(event) => {

    event.preventDefault();
    console.log("Evento bloqueado");
})
