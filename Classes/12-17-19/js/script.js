var color = document.getElementsByClassName("box");
color[2].classList.add("red");
let seconds = 5;

function turnOff() {
    let grabColor = document.getElementsByClassName("red");
    seconds = seconds - 1;
    console.log(seconds);
    if (seconds > 0) {
        setTimeout(turnOff, 1000);
    }
    if (seconds == 0) {
        grabColor[0].classList.remove("red");
    }
}

setTimeout(turnOff, 1000);