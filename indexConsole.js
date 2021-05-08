//https://github.com/rhildred/nodeAsyncGameBot
//https://github.com/rhildred/es6-twilio-chatbot
const input=require('readline-sync'); 
const Game= require('./Game.js'); //Game into project class Game 
const oGame = new Game();

while (!oGame.isDone()){                                   
    const sInput= input.question(oGame.prompt());
    console.log(oGame.takeATurn(sInput));

}