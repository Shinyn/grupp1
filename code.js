("use strict");

console.log("hello");

//Dennis
("use strict");
const prompt = require("prompt-sync")();
console.log("hello");
//Hanna is here
console.log("Hello to you too!");
console.log("Hejsan hejsan!");

let kokbok = true;
while ((kokbok === true)) {
  switch (prompt("Välj ett recept: 1, 2, 3, 4, 5, 6. Skriv 'exit' för att gå ur programmet: ")) {
    case "recept 1":
      console.log("Hannas recept:Du har valt recept 1");
      break;

    case "Mattias recept 2":
      break;

    case "Robins recept 3":
      break;

    case "Dennis recept 4":
      break;

    case "Eriks recept 5":
      break;

    case "Linus recept 6":
      break;

    case "exit":
      console.log("Hejdå!");
      kokbok = false; 
      break;
        
    default:
      
      break;
  }
}

//test funktion
function isValidPassword(password, username) {
  if (
    password.length >= 8 &&
    password.indexOf(" ") == -1 &&
    password.indexOf(username) == -1
  ) {
    return true;
  }
  return false;
}
