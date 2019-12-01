function createImage() {
    var htmlItem = document.getElementById("container");

    var result = "";

    var mapOfImage = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 3, 3, 3, 3, 3, 3, 3, 3, 1],
        [1, 3, 0, 2, 3, 3, 2, 0, 3, 1],
        [1, 3, 0, 2, 3, 3, 2, 0, 3, 1],
        [1, 3, 0, 2, 3, 3, 2, 0, 3, 1],
        [1, 3, 3, 3, 3, 3, 3, 3, 3, 1],
        [1, 3, 3, 2, 3, 3, 2, 3, 3, 1],
        [1, 3, 3, 3, 2, 2, 3, 3, 3, 1],
        [1, 3, 3, 3, 3, 3, 3, 3, 3, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];

    for (rows = 0; rows < mapOfImage.length; rows++) {
        result += "<div>";
        for (columns = 0; columns < mapOfImage[rows].length; columns++) {
            result += "<div class='box ' id=" + 'bead' + mapOfImage[rows][columns] + ">" + "</div>";
        }
        result += "</div>";
    }
    htmlItem.innerHTML = result;
}