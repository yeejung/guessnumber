// Genera un numero casuale tra 1 e 100
const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guessInput = document.getElementById("guessInput");
  const guess = parseInt(guessInput.value);
  const message = document.getElementById("message");

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "Metti un numero tra 1 e 100.";
  } else {
    attempts++;
    if (guess === secretNumber) {
      message.textContent = `Congraturazioni! Hai indovinato il numero in ${attempts} tentativi!`;
      guessInput.setAttribute("disabled", "disabled");
    } else if (guess < secretNumber) {
      message.textContent = "prova un numero piu alto.";
    } else {
      message.textContent = "prova un numero piu basso.";
    }
  }

  guessInput.value = "";
}
