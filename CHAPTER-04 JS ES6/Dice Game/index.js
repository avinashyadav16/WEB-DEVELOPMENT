var randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "<em>🚩 Player1 Won</em>";
}

else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "<em>Player2 Won 🚩</em>";
}

else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "<em>It's Draw</em>";
}