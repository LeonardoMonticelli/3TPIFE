function calculate() {
    var a = Number(document.getElementById("cell1").value);
    var b = Number(document.getElementById("cell2").value);
    var result = document.getElementsByClassName("result");
    result[0].innerHTML = a + b;
    result[1].innerHTML = a - b;
    result[2].innerHTML = a * b;
    result[3].innerHTML = a / b;
}