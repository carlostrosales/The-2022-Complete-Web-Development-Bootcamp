var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

if (randomNumber1 == 1) {
    document.querySelector("img").setAttribute("src","images/dice1.png");
} else if (randomNumber1 == 2) {
    document.querySelector("img").setAttribute("src","images/dice2.png");
} else if (randomNumber1 == 3) {
    document.querySelector("img").setAttribute("src","images/dice3.png");
} else if (randomNumber1 == 4) {
    document.querySelector("img").setAttribute("src","images/dice4.png");
} else if (randomNumber1 == 5) {
    document.querySelector("img").setAttribute("src","images/dice5.png");
} else {
    document.querySelector("img").setAttribute("src","images/dice6.png");
}

if (randomNumber2 == 1) {
    document.getElementsByTagName("img")[1].setAttribute("src","images/dice1.png");
} else if (randomNumber2 == 2) {
    document.getElementsByTagName("img")[1].setAttribute("src","images/dice2.png");
} else if (randomNumber2 == 3) {
    document.getElementsByTagName("img")[1].setAttribute("src","images/dice3.png");
} else if (randomNumber2 == 4) {
    document.getElementsByTagName("img")[1].setAttribute("src","images/dice4.png");
} else if (randomNumber2 == 5) {
    document.getElementsByTagName("img")[1].setAttribute("src","images/dice5.png");
} else {
    document.getElementsByTagName("img")[1].setAttribute("src","images/dice6.png");
}

if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = ("PLAYER 2 WINS");
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = ("PLAYER 1 WINS");
} else {
    document.querySelector("h1").innerHTML = ("DRAW");
}