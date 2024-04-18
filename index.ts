#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random()* 6 + 1);

const answers = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Guess a number between 1 and 6: ",
  },
]);

if (answers.userGuessedNumber === randomNumber) {
  console.log("Congratulations !, you guessed the number.");
} else {
  console.log("Sorry, you guessed the wrong number.");
}
