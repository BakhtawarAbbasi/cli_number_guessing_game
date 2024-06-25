#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 20 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a Number between 1 -20",
    },
]);

if(answer.userGuessNumber === randomNumber){
    console.log("Congrulation You Guess Right Number");
}

else{
    console.log("You Guess Wrong Number");
}