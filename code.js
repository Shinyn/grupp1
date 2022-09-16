const { dennisRecept } = require("./dennisRecept.js");
const prompt = require("prompt-sync")();
("use strict");

console.log("Välkommen till vår kokbok!");
let kokbok = true;
while (kokbok === true) {
  switch (
    prompt(
      "Välj ett recept: 1, 2, 3, 4, 5, 6. Skriv 'exit' för att gå ur programmet: "
    )
  ) {
    case "1":
      console.log("Hannas recept: Pannkaka");
      const pancakes = function (factor) {
        const ingredient = function (amount, unit, name) {
          let ingredientAmount = amount * factor;
          console.log(`${ingredientAmount} ${unit} ${name}`);
        };
        ingredient(1.5, "dl", "vetemjöl");
        ingredient(0.25, "tsk", "salt");
        ingredient(3, "dl", "mjölk");
        ingredient(1.5, "knäckta", "ägg");
        ingredient(1.25, "msk", "matfett");
      };
      let amount = prompt("Hur många portioner vill du göra? ");
      pancakes(amount);
      console.log("Blanda alla ingredienser och stek på medelvärme");
      break;

    case "2":
      console.log("Mattias recept:Du har valt recept 2");
      break;

    case "3":
      console.log("Robin recept:Du har valt recept 2");
      break;

    case "4":
      dennisRecept();
      break;

    case "5":
      console.log("\nEriks recept: Kladdkaka\n");
      console.log("Ingredienser:");
      console.log("100 g smör")
      console.log("2,5 dl strösocker")
      console.log("2 ägg")
      console.log("1,5 dl vetemjöl")
      console.log("3 msk kakao")
      console.log("1 tsk vaniljsocker")
      console.log("florsocker, till garnering\n")
      console.log("Sätt ugnen på 175°. Smält smöret och låt det svalna.\nRör samman ägg och socker." + 
      "\nBlanda vetemjöl, kakao och vaniljsocker och rör ner blandningen i äggsmeten.\nRör till sist ner det smälta smöret.")
      console.log("Grädda kakan i ca 25 minuter.\nDen ska bli låg och ha en hård yta men vara kladdig i mitten.")
      console.log("Låt kakan svalna, pudra över florsocker och skär den i snibbar.\n")
      console.log("Servera med vispad grädde\n")
      break;

    case "6":
      console.log("Linus recept:Du har valt recept 2");
      break;

    case "exit":
      console.log("Hejdå!");
      kokbok = false;
      break;

    default:
      break;
  }
}
