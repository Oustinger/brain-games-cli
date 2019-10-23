#!/usr/bin/env node

import 'source-map-support/register';
var readlineSync = require("readline-sync");
import {gcdGameDefault, gcdGameAgain, gcdGame} from '../games/gcd-game.js'


console.log("\nWelcome to the Brain Games!");

const userName = readlineSync.question(`\nWhat is your name? `);
console.log(`\nHello, ${userName}!`);



const gamesMenu = () => {
  console.log(`\nGames menu`);

  var readlineSync = require('readline-sync'),
    games = ['gcd'],
    index = readlineSync.keyInSelect(games, `Please, choose the game`);

  switch (games[index]) {
    case `gcd`:
      console.log('\nLets play gcd! :)');
      return gcdGameDefault();
    case `0`:
    default:
      return console.log(`\nWe will be glad to see you again, ${userName}!`);
  }
};



const howManyQuestions = () => {
  const amountQuestions = readlineSync.questionInt('\nHow many raunds do you want to play? ');

  if (amountQuestions < 0) {
    console.log('It must be a positive number. Please, try again:\n');
    return howManyQuestions();
  }

  return amountQuestions;
};



const exitScripts = (script) => (gameName, amountQuestions = 0, a = 0, b = 0, i = 0) => {
	switch (script) {
    case 'PE':
      console.log(`\n\n0 rounds\nWhat do you want to do now?`);
      var readlineSync = require('readline-sync'),
        scripts = ['Play the game again', 'Go to the game menu'],
        index = readlineSync.keyInSelect(scripts);
        break;
		case 'PER':
      console.log(`\n\nAll right!\nWhat do you want to do now?`);
      var readlineSync = require('readline-sync'),
        scripts = ['Play the game again', 'Go to the game menu'],
        index = readlineSync.keyInSelect(scripts);
        break;
		case 'PEF':
      console.log(`\n\nYou are failed.\nWhat do you want to do now?`);
      var readlineSync = require('readline-sync'),
        scripts = ['Play the game again', 'Go to the game menu'],
        index = readlineSync.keyInSelect(scripts);
        break;
    case 'TPE':
      console.log(`\n\nYou are failed.\nWhat do you want to do now?`);
      var readlineSync = require('readline-sync'),
        scripts = ['Try ones more', 'Play the game again', 'Go to the game menu'],
        index = readlineSync.keyInSelect(scripts);
      break;
    case 'TNPE':
      console.log(`\n\nYou are failed.\nWhat do you want to do now?`);
      var readlineSync = require('readline-sync'),
        scripts = ['Try ones more', 'Next question', 'Play the game again', 'Go to the game menu'],
        index = readlineSync.keyInSelect(scripts);
      break;
  }

  switch (gameName) {
		case 'gcd':

			switch (scripts[index]) {
				case 'Try ones more':
					return gcdGame(amountQuestions, a, b, i + 1);
				case 'Next question':
					return gcdGame(amountQuestions - 1);
			};

		default:

			switch (scripts[index]) {
				case 'Play the game again':
					return gcdGameAgain();
				case 'Go to the game menu':
					return gamesMenu();
				default: return console.log(`\nWe will be glad to see you again, ${userName}!`);
		}
  }
};

gamesMenu();

export { gamesMenu, howManyQuestions, exitScripts };
