var cache = null;
var lastOperation = null;

function button(x) {
    /*
    TWO OPTIONS for finding out that the + was pressed OR not
    1. Get the + button, check its classname and see if it contains the class turnOn
    */
    if (
        document.getElementById("plus").classList.contains("turnOn") ||
        document.getElementById("minus").classList.contains("turnOn")
    ) {
        if (document.getElementById("plus").classList.contains("turnOn")) {
            lastOperation = "plus";
        }
        if (document.getElementById("minus").classList.contains("turnOn")) {
            lastOperation = "minus";
        }

        resetDisplay();
        cache = Number(document.getElementById("result").value);
        document.getElementById("result").value = "";
    }
    document.getElementById("result").value += x;
}

function reset() {
    document.getElementById("result").value = null;
    cache = null;
}

function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function nothing(a, b) {
    return a;
}

function makeOperation(objectId, whatToDo) {
    if (cache != null) {

        if (objectId == "equal") {
            switch (lastOperation) {
                case "plus":
                    whatToDo = plus;
                    break;
                case "minus":
                    whatToDo = minus;
                    break;
                default:
                    whatToDo = nothing;
            }
        }
        var result = Number(document.getElementById("result").value);
        result = whatToDo(cache, result);
        document.getElementById("result").value = result;
        cache = null;
        lastOperation = objectId;
    }

    resetDisplay();
    document.getElementById("minus").classList.add("turnOn");
}

function resetDisplay() {
    document.getElementById("equal").classList.remove("turnOn");
    document.getElementById("plus").classList.remove("turnOn");
    document.getElementById("minus").classList.remove("turnOn");
}