var myHtmlItem = document.getElementById("container");

// var myYellowBox = '<div id="myBox_R-C" class="box yellowBox"></div>';
var myGreenBox = '<div id="myBox_R-C" class="box greenBox"></div>';

var result = "";

for (lines = 0; lines < 8; lines++) {
    result = result + "<div>";
    for (i = 0; i < 8; i++) {
        if (lines % 2 === 1) {
            if (i % 2 === 1) {
                result = result + BuildBox(lines, i, "greenBox");
            } else {
                result = result + BuildBox(lines, i, "yellowBox");
            }
        } else {
            if (i % 2 === 1) {
                result = result + BuildBox(lines, i, "yellowBox");
            } else {
                result = result + BuildBox(lines, i, "greenBox");
            }
        }
    }
    result = result + "</div>";
}
myHtmlItem.innerHTML = result;

function BuildBox(line, col, color) {
    var result = '<div id="myBox_' + line + '-' + col + '" class="box ' + color + '"></div>';
    return result;
}