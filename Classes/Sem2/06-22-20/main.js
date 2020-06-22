let drawing = false;
var canvas;
var ctx;
var startDrawingPoint = { x: 0, y: 0 };
let arrOfLines = [];
let pickedColor = "black";

function finishedLoadingPage() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    let myPickedColorElement = document.getElementById(pickedColor);
    myPickedColorElement.classList.add("selectedColor");
}

function colorChange() {
    let previousPickedColor = document.getElementById(pickedColor);
    previousPickedColor.classList.remove()
}

function startDrawing(e) {
    drawing = true;
    console.log("Start drawing");
    console.log(e);
}

function stopDrawing(e) {
    drawing = false;
    console.log("Stop drawing");
    console.log(e);
}