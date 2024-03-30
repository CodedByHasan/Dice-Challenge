const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

const image1 = document.querySelectorAll("img")[0];
const image2 = document.querySelectorAll("img")[1];

const randomDiceImage1 = `images/dice${randomNumber1}.png`;
const randomDiceImage2 = `images/dice${randomNumber2}.png`;

image1.setAttribute("src", randomDiceImage1);
image2.setAttribute("src", randomDiceImage2);

const heading = document.querySelector("h1");

if (randomDiceImage1 > randomDiceImage2) {
  heading.textContent = "🚩Player 1 Wins!";
}

if (randomDiceImage1 < randomDiceImage2) {
  heading.textContent = "Player 2 Wins! 🚩";
}

if (randomDiceImage1 == randomDiceImage2) {
  heading.textContent = "Draw";
}
