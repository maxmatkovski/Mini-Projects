// Guessing Game Mini Project

// Use Let instead of Const because if parseInt() returns NaN then input must be changed

let maximum = parseInt(prompt("Enter your maximum number: "));

while(!maximum){
    maximum = parseInt(prompt("Enter a valid number: "))
}
// Checks for valid number using while loop


const targetNum = Math.floor(Math.random() * maximum)+1

// Generates random number from 1 to our maximum and saves it in the constant targetNum

console.log(targetNum)

let guess = parseInt(prompt("Enter your first guess: "))
let guessTotal = 1;

while(parseInt(guess) !== targetNum){

    if(guess === 'q'){break};

    if(guess > targetNum){
        guess = prompt("Too high! Enter a new number: ")
    } else {
        guess = prompt("Too low! Enter a new number: ")
    }
    guessTotal++;
}

if (guess === 'q') {
    console.log("Game quit by user!")
} else {
console.log(`You guessed the number ${targetNum} correctly! It took you a total of ${guessTotal} guesses!`)}


/* Notes on generating a random number within a prompted range
 
Math.floor(Math.random() * 10)+1
    Generates a random number from 1 - 10 */
