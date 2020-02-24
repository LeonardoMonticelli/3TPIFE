function generate() {
    var row = document.getElementById("row").value;
    var column = document.getElementById("column").value;

    var cont = document.getElementById("container");

    var result = "";

    for (let a = 0; a < row; a++) {
        result += "<div class='cell red'>";
        for (let b = 0; b < column; b++) {
            result += "<div class='cell red'></div>";
        }
        result += "</div>";
    }
    cont.innerHTML = result;
}