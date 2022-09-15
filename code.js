const { dennisRecept } = require("./dennisRecept.js");
console.log(dennisRecept);
const prompt = require("prompt-sync")();
("use strict");

let kokbok = true;
while (kokbok === true) {
  switch (prompt("Välj ett recept:")) {
    case "recept 1":
      console.log("Hannas recept:Du har valt recept 1");
      break;

    case "Mattias recept 2":
      break;

    case "Robins recept 3":
      break;

    case "Dennis recept":
      dennisRecept();
      break;

    case "Eriks recept 5":
      break;

    case "Linus recept 6":
      break;

    case "exit":
      kokbok = false;
      break;

    default:
      break;
  }
}
