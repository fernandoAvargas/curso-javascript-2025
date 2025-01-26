console.log(1 - 1); //Ok

console.log("1" - 1); //Nok

console.log("1" - String(1)); //Nok

console.log(Number("1") - String(1)); //Nok

console.log(Number("1") - 1); //Ok