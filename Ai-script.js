// ---------------------
// ELEMENTS
// ---------------------
const continueButton = document.getElementById("Continue");
const reStart = document.getElementById("Restart");
const gameOver = document.getElementById("GameOver");
const button1 = document.getElementById("option1");
const button2 = document.getElementById("option2");
const button3 = document.getElementById("option3");
const button4 = document.getElementById("option4");

const img = document.getElementById("imag3");
const textBox = document.getElementById("firstxt");

// ---------------------
// INITIAL STATE
// ---------------------
let clickCount = 0;

hideAllOptions();
reStart.style.display = "none";
gameOver.style.display = "none";

// ---------------------
// EVENT LISTENERS (added ONCE)
// ---------------------
continueButton.addEventListener("click", handleContinue);
button1.addEventListener("click", redClick);
button2.addEventListener("click", blueClick);
button3.addEventListener("click", cakeClick);
button4.addEventListener("click", headbandClick);
reStart.addEventListener("click", reStartt);
gameOver.addEventListener("click", gameOverr);

// ---------------------
// HELPERS
// ---------------------
function hideAllOptions() {
  button1.style.display = "none";
  button2.style.display = "none";
  button3.style.display = "none";
  button4.style.display = "none";
}

function showOptions(...buttons) {
  hideAllOptions();
  buttons.forEach(btn => btn.style.display = "");
}

// ---------------------
// PAGE LOGIC
// ---------------------

function handleContinue() {
  clickCount++;

  if (clickCount === 1) {
    // PAGE 1
    textBox.innerHTML = "She hates chocolate, yellow, and impoliteness. She loves shoujo manga, fruit, and jokes. Ready to have fun?";
    continueButton.style.display = "";
  } 
  
  else if (clickCount === 2) {
    // PAGE 2 — yogurt choices
    continueButton.style.display = "none";
    img.src = "pics/img2.png";
    textBox.innerHTML =
      "Today, Velenium wanted to get something sweet. She got two cups of frozen yogurt... She came back with a blue cup with sprinkles/chocolate yogurt and a red cup with vanilla + blueberries.";

    showOptions(button1, button2); // red / blue options
  }
}

// ---------------------
// OPTION BRANCHES — PAGE 2
// ---------------------

function redClick() {
  img.src = "pics/imgred.png";
  textBox.innerHTML =
    "She looks at you, feeling betrayed. Velenium can't believe how little you know her...";

  hideAllOptions();
  gameOver.style.display = "";
}

function blueClick() {
  img.src = "pics/imgblue.png";
  textBox.innerHTML =
    "Velenium loves your thoughtfulness. She feels like she made the right choice.";

  hideAllOptions();
  continueButton.style.display = "";

  // After picking blue, next press goes to page 3
  continueButton.onclick = secondPage;
}

// ---------------------
// PAGE 3 — birthday decision
// ---------------------

function secondPage() {
  continueButton.onclick = handleContinue; // reset behavior

  img.src = "pics/img2.png";
  textBox.innerHTML =
    "Velenium's birthday is tomorrow... Will you get her a daisy headband or a strawberry cake?";

  continueButton.style.display = "none";
  showOptions(button3, button4); // cake / headband
}

// ---------------------
// PAGE 3 OPTIONS
// ---------------------

function cakeClick() {
  img.src = "pics/imgcake.png";
  textBox.innerHTML =
    "It's...so perfect! She stares at the birthday gift. Everything is perfect.";

  hideAllOptions();
  continueButton.style.display = "";
  continueButton.onclick = thirdPage;
}

function headbandClick() {
  img.src = "pics/imgheadband.png";
  textBox.innerHTML =
    "Velenium looks at you with disgust. She's not a fan of pink...";

  hideAllOptions();
  gameOver.style.display = "";
}

// ---------------------
// PAGE 4 — ending
// ---------------------

function thirdPage() {
  document.body.style.backgroundColor = '#4091ce';
  continueButton.style.display = "none";

  textBox.innerHTML =
    "You did it! You saved Velenium! And...your life...";

  reStart.style.display = "";
}

// ---------------------
// RESTART & GAME OVER
// ---------------------

function reStartt() {
  resetGame();
}

function gameOverr() {
  resetGame();
  gameOver.style.display = "none";
}

function resetGame() {
  img.src = "pics/img1.png";
  textBox.innerHTML = "Velenium is a zombie. She wants to feel normal again and needs your help.";

  clickCount = 0;

  document.body.style.backgroundColor = '#ffd3f5';

  reStart.style.display = "none";
  continueButton.style.display = "";
  gameOver.style.display = "none";

  hideAllOptions();

  // Reset continue behavior
  continueButton.onclick = handleContinue;
}

