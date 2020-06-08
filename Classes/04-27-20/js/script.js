var xDim = 80;
var yDim = 40;

var yDim2 = 80;
var space = 20;

function create(startX, startY) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    ctx.moveTo(startX, startY);
    ctx.lineTo(startX, startY + yDim);
    ctx.lineTo(startX + xDim, startY + yDim);
    ctx.lineTo(startX + xDim, startY);
    ctx.lineTo(startX, startY);

    ctx.lineTo(startX + xDim, startY + yDim);

    ctx.moveTo(startX + xDim, startY);
    ctx.lineTo(startX, startY + yDim);
    ctx.stroke();
}

function createLine(startX, startY) {
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX, startY + yDim2);
    ctx.stroke();
}


function createmany() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    for (let i = 0; i < 7; i++) {
        //createLine(50 + space * i, 40)
        ctx.moveTo(50 + space * i, 40);
        ctx.lineTo(50 + space * i, 40 + yDim2);

        if (i != 6) {
            ctx.moveTo(50 + space * i, 40);
            ctx.lineTo(70 + space * i, 40 + yDim2);
        }
    }
    ctx.stroke();
}