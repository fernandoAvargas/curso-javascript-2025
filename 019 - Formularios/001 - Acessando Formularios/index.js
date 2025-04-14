"use strict";

const form = document.forms.namedItem("form");

form.addEventListener("submit", (event) => {event.preventDefault();

    const name = form.name.value;
    const passaword = form.password.value;

    console.log("Nome:" + name + " " + "Password:" + passaword);
});