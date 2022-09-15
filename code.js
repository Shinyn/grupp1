"use strict";
const prompt = require('prompt-sync')();
console.log("hello");
//Hanna is here
console.log("Hello to you too!");

let kokbok = true
while(kokbok = true)
{
switch (prompt("Välj ett recept:"))
{
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
        kokbok = false;
        break;
    default:
break;
        
}
}

//test funktion
function isValidPassword(password, username){
    if(password.length >= 8 && password.indexOf(' ') == -1 && password.indexOf(username) == -1){
      return true;
    }
    return false;
  }