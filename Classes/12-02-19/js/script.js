var cache = 0;

function button(x) {
    /*
    TWO OPTIONS for finding out that the + was pressed OR not
    1. Get the + button, check its classname and see if it contains the class turnOn
    */
    if (document.getElementById("plus").classList.contains("turnOn")) {

        document.getElementById("plus").classList.remove("turnOn");
        cache = document.getElementById("result").value
        document.getElementById("result").value = "";
    }
    document.getElementById("result").value += x;
}


function reset() {
    document.getElementById("result").value = null;
    cache = 0;
    document.getElementById("plus").classList.remove("turnOn")
}

function plus() {
    var result = Number(document.getElementById("result").value)
    result += Number(cache);
    document.getElementById("result").value = result;
    document.getElementById("plus").classList.add("turnOn");
}

function equal() {

}

// for (i = 0; i < 10; i -= -1) {
//     console.log(i);
// }