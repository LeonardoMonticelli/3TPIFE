"use strict";

const GRID_SIZE = 75; // define a grid of 100 x 100 cells
let myContainer = document.getElementById("container");

function buildEmptyMatrix(size) {
    let myMatrix = new Array();
    for (let i = 0; i < size; i++) {
        let myNewRow = new Array();
        for (let j = 0; j < size; j++) {
            myNewRow.push(0);
        }
        myMatrix.push(newRow);
    }
}

for (let i = 0; i < GRID_SIZE; i++) {
    let myNewRow = document.createElement("div");
    for (let j = 0; j < GRID_SIZE; j++) {
        let myNewCell = document.createElement("div");
        myNewCell.classList.add("cell");
        myNewRow.appendChild(myNewCell);
        myNewCell.addEventListener("click", cellClicked);
    }
    myContainer.appendChild(myNewRow);
}

function cellClicked() {
    let myClickedCell = event.srcElement;

    myClickedCell.classList.toggle("aliveCell");
    // if (myClickedCell.classList.contains("aliveCell")) {
    //     myClickedCell.classList.remove("aliveCell");
    // } else {
    //     myClickedCell.classList.add("aliveCell");
    // }
}