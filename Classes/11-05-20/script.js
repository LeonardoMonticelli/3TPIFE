var hiddenWord = "ROME";

var fail = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png"];
var failCount = 0;

function underlinedVersion() {
    var wordWithUnderlines = ""

    for (let i = 0; i < hiddenWord.length; i++) {
        wordWithUnderlines += "_";
    }
    return wordWithUnderlines;
}

let displayedWordElement = document.getElementById("underline");
displayedWordElement.innerHTML = underlinedVersion();

function buttonPressed(theLetter) {
    let displayedWordElement = document.getElementById("underline");
    let currentGameState = displayedWordElement.innerHTML;
    let oldGameState = currentGameState;
    for (let i = 0; i < hiddenWord.length; i++) {
        if (hiddenWord[i] == theLetter) {
            currentGameState = replaceCharacterInString(currentGameState, i, theLetter);
        }
    }
    if (oldGameState == currentGameState) {
        alert("wrong guess");
        failCount++;
        let pictureElement = document.getElementById("fail");
        pictureElement.src = fail[failCount]
    }
    document.getElementById("underline").innerHTML = currentGameState;
}

function replaceCharacterInString(givenString, position, replacemenent) {
    let myReturnString = "";
    for (let i = 0; i < givenString.length; i++) {
        if (i != position) {
            myReturnString += givenString[i];
        } else {
            myReturnString += replacemenent;
        }
    }
    return myReturnString; // it should be "Dan"
}