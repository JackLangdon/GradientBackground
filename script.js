var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var cssText = document.getElementById('cssText');
var body = document.getElementById('gradient');

function setGradient() {
  body.style.background =
    'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';

  cssText.textContent = body.style.background + ';';
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);

// RANDOMISE THE BACKGROUND

var randomButton = document.getElementById('randomButton');

// Calculate a random number between 0 and 255 inclusive
function randomNum() {
  return Math.floor(Math.random() * 256);
}

// Set the background rgb values to the new random numbers
function setRandomGradient() {
  body.style.background =
    'linear-gradient(to right, rgb(' +
    randomNum() +
    ', ' +
    randomNum() +
    ', ' +
    randomNum() +
    '), rgb(' +
    randomNum() +
    ', ' +
    randomNum() +
    ', ' +
    randomNum() +
    '))';

  cssText.textContent = body.style.background + ';';
}

// Listen for randomButton click
randomButton.addEventListener('click', setRandomGradient);
