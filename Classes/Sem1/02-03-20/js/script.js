var myMatrix = [
    [1, 0, 1, 1, 1],
    [0, 1, 1, 0, 1],
    [0, 0, 1, 1, 0],
    [1, 1, 1, 0, 1]
]

//make a programn that searchs three "1"s in a line inside the matrix

//every 3 ones inside an array add 1 to the var
var has_3 = 0;
for (var r = 0; r < myMatrix.length; r++) {
    let counter = 0;
    for (var c = 0; c < myMatrix.length; c++) {
        if (myMatrix[r][c] == 1) {
            counter++;
        }
    }
    if (counter == 3) {
        has_3++;
    }
}

console.log(has_3);