var buttons = document.getElementsByClassName("cell");

var textbox = document.getElementById("textbox");

textbox.innerHTML = 0;

buttons[0].addEventListener("click", increase);
buttons[1].addEventListener("click", decrease);
buttons[2].addEventListener("click", reset);

function increase() {
    textbox.innerHTML = Number(textbox.innerHTML) + 1;
}

function decrease() {
    textbox.innerHTML = Number(textbox.innerHTML) - 1;
}

function reset() {
    textbox.innerHTML = 0;
}