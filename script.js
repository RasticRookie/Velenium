var continueButton = document.getElementById("Continue");

var reStart = document.getElementById("Restart");
reStart.style.display = "none";

var clickCount = 0;

var button1 = document.getElementById("option1");
button1.style.display = "none";

var button2 = document.getElementById("option2");
button2.style.display = "none";

var button3 = document.getElementById("option3");
button1.style.display = "none";

var button4 = document.getElementById("option4");
button2.style.display = "none";

if (clickCount == 0) {
  button3.style.display = "none";
  button4.style.display = "none";
};

var gameOver = document.createElement("button");
gameOver.innerHTML = "GAME OVER";
gameOver.id = "gameOver";
gameOver.style.display = "none";
document.body.appendChild(gameOver);

function redClick() {
  document.getElementById("imag3").src = "pics/imgred.png";
  document.getElementById("firstxt").innerHTML = "She looks at you, feeling betrayed. Velenium can't beleive how little you know her. She thought you were her friend. But you're just like the rest of them. All of you are the same...";

  button1.style.display = "none";
  button2.style.display = "none";

  gameOver.style.display = "";
    gameOver.addEventListener("click", gameOverr);
};

function blueClick() {
  document.getElementById("imag3").src = "pics/imgblue.png";
  document.getElementById("firstxt").innerHTML = "Velenium loves your thoughtfulness. She feels like she made the right choice. Hopefully you can stay her friend...forever...";

  button1.style.display = "none";
  button2.style.display = "none";

  continueButton.style.display = "";

  continueButton.addEventListener("click", secondPage);
};
continueButton.addEventListener("click", function () {
    clickCount++;
    firstPage();

  function firstPage() {

    document.getElementById("firstxt").innerHTML = "She hates chocolate, yellow, and impoliteness. She loves shoujo manga, fruit, and jokes. Ready to have fun?";

  if (clickCount == 2) {
    continueButton.style.display = "none";

    document.getElementById("firstxt").innerHTML = "Today, Velenium wanted to get something sweet. She got two cups of frozen yogurt while you waited at the table. It confused you on how she got them, seeing as there was no...cashier...but you decided not to dwell on that fact. She came back with a blue cup that has sprinkles and chocolate yogurt and a red cup that has vanilla yogurt with blueberries.";

  button1.style.display = "";
  button2.style.display = "";


    button1.addEventListener("click", redClick);
    button2.addEventListener("click", blueClick);
   }
 }
});
function gameOverr() {
  document.getElementById("firstxt").innerHTML = "Velenium is a zombie. She wants to feel normal again and needs your help.";
  continueButton.style.display = "";
  document.getElementById("imag3").src = "pics/img1.png";
  clickCount = 0;
  gameOver.style.display = "none";
  };
function reStartt() {
  document.getElementById("firstxt").innerHTML = "Velenium is a zombie. She wants to feel normal again and needs your help.";
  continueButton.style.display = "";
  document.getElementById("imag3").src = "pics/img1.png";
  clickCount = 0;
   document.body.style.backgroundColor = '#ffd3f5';
  reStart.style.display = "none";
  };

var button3 = document.getElementById("option3");
button3.style.display = "none";

var button4 = document.getElementById("option4");
button4.style.display = "none";

function secondPage() {
  document.getElementById("firstxt").innerHTML = "Velenium's birthday is tommorow. She hasen't gotten a present in a long time and is hoping you get her something. Will you get her a headband with daisies on it or a strawberry cake?";
  continueButton.style.display = "none";
  document.getElementById("imag3").src = "pics/img2.png";

  button3.style.display = "";
  button4.style.display = "";

  button3.addEventListener("click", cakeClick);
  button4.addEventListener("click", headbandClick);  
}
function cakeClick() {
  document.getElementById("imag3").src = "pics/imgcake.png";
  document.getElementById("firstxt").innerHTML = "It's...so perfect! She can barely contain herself as she stares at the birthday gift. Everything is perfect. You...are perfect. Finally, she found someone worth saving. A kind angel such as yourself will never leave her sight again.";

  button3.style.display = "none";
  button4.style.display = "none";

  continueButton.style.display = "";

  continueButton.addEventListener("click", thirdPage);
}
function headbandClick() {
  document.getElementById("imag3").src = "pics/imgheadband.png";
  document.getElementById("firstxt").innerHTML = "Velenium looks at you with disgust. She's not a fan of pink. She never has been. It's like you aren't even trying. She's not even a fan of you. What a waste...";
  document.getElementById("option3").style.display = "none";
  document.getElementById("option4").style.display = "none";

  gameOver.style.display = "";

    gameOver.addEventListener("click", gameOverr);

}
function thirdPage() {
   document.body.style.backgroundColor = '#4091ce';
  continueButton.style.display = "none";
  document.getElementById("firstxt").innerHTML = "You did it! You saved Velenium! And...your life...";
  reStart.style.display = "";

reStart.addEventListener("click", reStartt);
}