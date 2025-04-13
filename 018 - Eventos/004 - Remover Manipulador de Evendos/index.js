"Use Strict";


const btn = document.querySelector("button");


const acionarAlert = () => {

    alert(123);

    btn.removeEventListener("click",acionarAlert);
}   

    btn.addEventListener("click",acionarAlert);



