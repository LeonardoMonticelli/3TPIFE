"use strict"; //only allows to write compplete commands, no simplifications like "i=1"

for (let i = 0; i < 2; i++) { // let command, oly can be used inside a certain block of code, so the console.log doesn't work
    console.log(i);
}

function changeClock() {
    let divElement = document.getElementById("myClock"); // get the DIV element
    let secondsCount = Number(divElement.innerHTML); // get the contents and transform them to a NUMBER
    secondsCount--; // decrease the seconds
    divElement.innerHTML = secondsCount;
    if (secondsCount > 50) { // the limit for the decrease in the number
        setTimeout(changeClock, 1000); // Timeout is set in milliseconds
    }
}

setTimeout(changeClock, 1000);