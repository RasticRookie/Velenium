var continueButton = document.getElementById("Continue");
var reStart = document.getElementById("Restart");
var gameOver = document.getElementById("GameOver");
var button1 = document.getElementById("option1");
var button2 = document.getElementById("option2");
var button3 = document.getElementById("option3");
var button4 = document.getElementById("option4");

reStart.style.display = "none";
gameOver.style.display = "none";
button1.style.display = "none";
button2.style.display = "none";
button3.style.display = "none";
button4.style.display = "none";

let clickCount = 0;

button1.addEventListener("click", redClick);
button2.addEventListener("click", blueClick);
button3.addEventListener("click", cakeClick);
button4.addEventListener("click", headbandClick);
continueButton.addEventListener("click", nextPage);
reStart.addEventListener("click", reStartt);
gameOver.addEventListener("click", gameOverr);



if (clickCount == 0) {
   button1.style.display = "none";
  button2.style.display = "none";
  button3.style.display = "none";
  button4.style.display = "none";
};
