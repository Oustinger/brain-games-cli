import readlineSync from "readline-sync"
import 'source-map-support/register'
import {howManyQuestions, exitScripts} from '../bin/brain-games.js'
import randomNumber from '../math-operations/random.js'
import {gcd} from '../math-operations/gcd.js'

const greating = `It's a Gcd-Game!\n
You need to answer for three questions.
Where you will find the greatest common factor of two given numbers.
And you will have only three attempts for each!
Good luck! :)`;


const gcdGame = (amountQuestions, a = randomNumber(1, 500), b = randomNumber(1, 500), i = 1) => {
	if (amountQuestions === 0) {
    return exitScripts('PE')('gcd');
  }

	const realAnswer = gcd(a, b);

  const answer = readlineSync.questionInt(`\nThe greatest common factor of ${a} and ${b} is `);

  if (answer === realAnswer) {
    if (amountQuestions > 1) {
			console.log('\nAll right!\n\nNext question:');
      return gcdGame(amountQuestions - 1);
    }
		return exitScripts('PER')('gcd');
  }

  if (i < 3) {
    if (amountQuestions > 1) {
		return exitScripts('TNPE')('gcd', amountQuestions, a, b, i);
    }
		return exitScripts('TPE')('gcd', amountQuestions, a, b, i);
  }

  if (i === 3) {
		return exitScripts('PEF')('gcd');
  } 
};

const gcdGameAgain = () => {
  gcdGame(howManyQuestions());
};

const gcdGameDefault = () => {
  console.log(greating);

  gcdGame(howManyQuestions());
};

export { gcdGameDefault, gcdGameAgain, gcdGame };
