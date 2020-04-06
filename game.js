alert(`Shout out to Mozilla MDN on their number guessing game.
  I just made some tweaks using the latest javaScript syntax... please upvote if you like it. Your feedbacks, comments and suggestions are highly welcomed... thanks.`);
const attempts= document.getElementById('attempts');
const remAtt= document.getElementById('remAtt');
const guessField= document.querySelector('#guessField');
const okButton= document.querySelectorAll('button')[0];
const resetButton= document.querySelectorAll('button')[1];
const lowOrHi= document.getElementById('lowOrHi');
const prevGuess= document.getElementById('prevGuess');
const ranShow= document.getElementById('ranShow');
const ran= document.getElementById('ran');

var randomNum= Math.floor((Math.random()*100)+1);
let counter= 0;

let check=()=>{
  if(guessField.value== randomNum){
    passed();
  } 
  else{
    lowOrHi.style.color= 'red';
    lowOrHi.textContent= (guessField.value>randomNum && guessField.value< 100) ? 'Your guess is too high': (guessField.value<randomNum && guessField.value!== '') ? 'Your guess is too low': (guessField.value>100 || guessField.value=== '') ? 'Input a valid guess': '';
    prevGuess.textContent+= (lowOrHi.textContent!== 'Input a valid guess') ? ` ${guessField.value}`: '';
    guessField.value= '';
  }
  guessField.focus();
  if(lowOrHi.textContent!== 'Input a valid guess'){
    counter++;
    }
  else{
    counter;
  }
  attempts.textContent= ` ${counter}`;
  remAtt.textContent= ` ${7-counter}`;
  if(counter==7 && guessField.value!= randomNum){
      failed();
    }
}

let someStyle= ()=>{
  guessField.disabled= 'true';
  okButton.disabled= 'true';
  prevGuess.textContent= 'Reset the game to play again';
  ran.style.visibility= 'visible';
}

let passed= ()=>{
  someStyle();
  lowOrHi.style.color= 'green';
  lowOrHi.textContent= 'You guessed correctly!!!';
  ranShow.textContent= randomNum;
  ran.style.backgroundColor= 'green';
}

let reset= ()=>{
  guessField.disabled= false;
  okButton.disabled= false;
  lowOrHi.textContent= '';
  ran.style.visibility= 'hidden';
  prevGuess.textContent= '';
  counter= 0;
  randomNum= Math.floor((Math.random()*100)+1);
  attempts.textContent= ` ${counter}`;
  remAtt.textContent= ` ${7-counter}`;
  guessField.value= '';
}

let failed= ()=>{
  someStyle();
  lowOrHi.style.color= 'red';
  lowOrHi.textContent= 'You failed!!!';
  ranShow.textContent= randomNum;
  ran.style.backgroundColor= 'red';
}

okButton.addEventListener('click',check);
resetButton.addEventListener('click',reset);