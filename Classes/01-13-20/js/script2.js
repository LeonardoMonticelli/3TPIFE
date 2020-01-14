"use strict";

const GRID_SIZE = 20; // define a grid of x cells

let matrixData = buildEmptyMatrix(GRID_SIZE);
matrixData[1][1] = 1;
UpdateDisplay(matrixData);

function goNext() {
    let newMatrixData = buildNewState(matrixData);
    matrixData = newMatrixData;
    UpdateDisplay(matrixData);
}

function buildNewState(oldStateData) { //this a state that receives the old data
    let newStateData = buildEmptyMatrix(oldStateData.lenght);

    /*
    Any live cell with two or three neighbors survives.
    Any dead cell with three live neighbors becomes a live cell. 

    IMPLEMENTED BY DEFAULT:
    All other live cells die in the next generation. Similarly, all other dead stay dead.
    */

    return newStateData;
}

function UpdateDisplay(matrixToShow) {

    let myContainer = document.getElementById("container");
    myContainer.innerHTML = "";

    for (let i = 0; i < GRID_SIZE; i++) {
        let newRow = document.createElement("div");
        for (let j = 0; j < GRID_SIZE; j++) {
            let myNewCell = document.createElement("div");
            myNewCell.classList.add("cell");
            myNewCell.rowPos = i;
            myNewCell.colPos = j;
            if (matrixToShow[i][j] == 1) {
                myNewCell.classList.add("aliveCell");
            }
            newRow.appendChild(myNewCell);
            myNewCell.addEventListener("click", cellClicked);
        }
        myContainer.appendChild(newRow);
    }

}

function buildEmptyMatrix(size) {
    let myMatrix = new Array();
    for (let i = 0; i < size; i++) {
        let newRow = new Array();
        for (let j = 0; j < size; j++) {
            newRow.push(0);
        }
        myMatrix.push(newRow);
    }
    return myMatrix;
}

function cellClicked() {
    let myClickedCell = event.srcElement;

    // myClickedCell.classList.toggle("aliveCell");
    if (myClickedCell.classList.contains("aliveCell")) {
        myClickedCell.classList.remove("aliveCell");
        matrixData[myClickedCell.rowPos][myClickedCell.colPos] = 0;
    } else {
        myClickedCell.classList.add("aliveCell");
        matrixData[myClickedCell.rowPos][myClickedCell.colPos] = 1;
    }
}