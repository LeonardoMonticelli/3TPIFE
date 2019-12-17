let x = Math.floor(Math.random() * 3);
var color = document.getElementsByClassName("box");
color[x].classList.add("red");
let seconds = 3;

color[x].addEventListener("click", clickTurnOff);

function turnOff() {
    let grabColor = document.getElementsByClassName("red");
    if (seconds > 0) {
        seconds = seconds - 1;
        console.log(seconds);
        setTimeout(turnOff, 1000);
    }
    if (seconds == 0) {
        if (grabColor.length > 0) {
            grabColor[0].classList.remove("red");
        }
    }
}

function clickTurnOff() {
    document.getElementsByClassName("red")[0].classList.remove("red");
    seconds = 0;
}

setTimeout(turnOff, 1000);