function Start() {
    document.getElementById("myTable");

    for (var r = 0; r !== 5; r++) {
        var tbl = "<tr>";
        for (var c = 0; c !== 8; c++) {
            var u = r * c;
            var cell = "<td>" + u.toString + "</td>";
        }
        tbl += "</tr>";
    }
}