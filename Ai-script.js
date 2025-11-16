// Cleaned and safer version of your script.js

// Elements (grab once)
const continueButton = document.getElementById("Continue");
const reStartBtn = document.getElementById("Restart");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const firstxt = document.getElementById("firstxt");
const imag3 = document.getElementById("imag3");

// State
let clickCount = 0;
let currentState = "playing"; // 'playing' | 'gameover'

// Ensure initial visibility
function show(el) { el.style.display = "inline-block"; }
function hide(el) { el.style.display = "none"; }
function hideAllOptions() {
  hide(option1);
  hide(option2);
  hide(option3);
  hide(option4);
}

// Create / setup gameOver button once
const gameOverBtn = document.createElement("button");
gameOverBtn.innerText = "GAME OVER";
gameOverBtn.id = "gameOver";
hide(gameOverBtn);
document.body.appendChild(gameOverBtn);

// Centralized game over handler
function gameOverr() {
  currentState = "gameover";
  // Reset the scene text & image to intro
  firstxt.innerHTML = "Velenium is a zombie. She wants to feel normal again and needs your help.";
  imag3.src = "pics/img1.png";
  clickCount = 0;

  // Hide interactive options & continue, show restart
  hideAllOptions();
  hide(gameOverBtn);
  hide(continueButton);
  show(reStartBtn);
  document.body.style.backgroundColor = '#ffd3f5';
}

// Centralized restart handler
function reStartt() {
  currentState = "playing";
  // Set intro text/image
  firstxt.innerHTML = "Velenium is a zombie. She wants to feel normal again and needs your help.";
  imag3.src = "pics/img1.png";
  clickCount = 0;

  // Hide options / gameOver and show continue
  hideAllOptions();
  hide(gameOverBtn);
  show(continueButton);
  hide(reStartBtn);
  document.body.style.backgroundColor = '#ffd3f5';
}

// Small helper functions for option outcomes
function onRedChoice() {
  // Game over path
  imag3.src = "pics/imgred.png";
  firstxt.innerHTML = "She looks at you, feeling betrayed. Velenium can't believe how little you know her...";
  hideAllOptions();
  show(gameOverBtn);
  hide(continueButton);
  // note: gameOver listener attached once in setup
}

function onBlueChoice() {
  imag3.src = "pics/imgblue.png";
  firstxt.innerHTML = "Velenium loves your thoughtfulness. She feels like she made the right choice.";
  hideAllOptions();
  show(continueButton);
}

// Flow pages
function firstPage() {
  firstxt.innerHTML = "She hates chocolate, yellow, and impoliteness. She loves shoujo manga, fruit, and jokes. Ready to have fun?";
}

function secondPage() {
  firstxt.innerHTML = "Velenium's birthday is tomorrow. Will you get her a headband with daisies or a strawberry cake?";
  imag3.src = "pics/img2.png";
  hide(continueButton);

  // Show options 3/4 and leave their listeners attached once (setup)
  show(option3);
  show(option4);
}

function thirdPage() {
  document.body.style.backgroundColor = '#4091ce';
  hide(continueButton);
  firstxt.innerHTML = "You did it! You saved Velenium! And...your life...";
  show(reStartBtn);
}

// Specific option handlers
function cakeClick() {
  imag3.src = "pics/imgcake.png";
  firstxt.innerHTML = "It's...so perfect! She can barely contain herself as she stares at the birthday gift...";
  hide(option3);
  hide(option4);
  show(continueButton);
}

function headbandClick() {
  imag3.src = "pics/imgheadband.png";
  firstxt.innerHTML = "Velenium looks at you with disgust. She's not a fan of pink...";
  hideAllOptions();
  show(gameOverBtn);
  hide(continueButton);
}

// Setup: attach listeners once
function setup() {
  // initial UI state
  show(continueButton);
  hide(reStartBtn);
  hideAllOptions();
  hide(gameOverBtn);

  // Continue button: single listener
  continueButton.addEventListener("click", () => {
    if (currentState === "gameover") return; // ignore while game over
    clickCount++;
    if (clickCount === 1) {
      firstPage();
    } else if (clickCount === 2) {
      // move to choices between red/blue
      firstxt.innerHTML = "Today, Velenium wanted to get something sweet. She got two cups of frozen yogurt...";
      hide(continueButton);
      show(option1);
      show(option2);
    } else {
      // keep safe default
      hideAllOptions();
    }
  });

  // Option buttons for first choice
  option1.addEventListener("click", () => {
    onRedChoice();
  });
  option2.addEventListener("click", () => {
    onBlueChoice();
  });

  // Option buttons for second choice (cake/headband)
  option3.addEventListener("click", () => {
    cakeClick();
    // move to next page when user hits continue
    // ensure the continue listener for thirdPage is attached once
    // we attach a one-time handler to move to thirdPage after cake
    const contOnce = function () {
      thirdPage();
      continueButton.removeEventListener("click", contOnce);
    };
    // only add the one-time handler if continue is visible
    continueButton.addEventListener("click", contOnce);
  });
  option4.addEventListener("click", () => {
    headbandClick();
  });

  // Game over and restart listeners (attached once)
  gameOverBtn.addEventListener("click", gameOverr);
  reStartBtn.addEventListener("click", reStartt);
}

setup();
