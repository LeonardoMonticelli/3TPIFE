var cache = null;

function button(x) {
    /*
    TWO OPTIONS for finding out that the + was pressed OR not
    1. Get the + button, check its classname and see if it contains the class turnOn
    */
    if (document.getElementById("plus").classList.contains("turnOn") ||
        document.getElementById("minus").classList.contains("turnOn")) {

        resetDisplay();
        cache = document.getElementById("result").value;
        document.getElementById("result").value = "";
    }
    document.getElementById("result").value += x;
}

function resetDisplay() {
    document.getElementById("plus").classList.remove("turnOn");
    document.getElementById("minus").classList.remove("turnOn");
}

function reset() {
    document.getElementById("result").value = null;
    cache = null;

    resetDisplay();
}

function plus() {
    var result = Number(document.getElementById("result").value);
    result += Number(cache);
    document.getElementById("result").value = result;

    resetDisplay();
    document.getElementById("plus").classList.add("turnOn");;
}

function minus() {
    if (cache != null) {
        var result = Number(document.getElementById("result").value);
        result = Number(cache) - result;
        document.getElementById("result").value = result;
    }

    resetDisplay();
    document.getElementById("minus").classList.add("turnOn");
}