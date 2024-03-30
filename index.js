var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

var randomDiceImage1 = `images/dice${randomNumber1}.png`;
var randomDiceImage2 = `images/dice${randomNumber2}.png`;

image1.setAttribute("src", randomDiceImage1);
image2.setAttribute("src", randomDiceImage2);
