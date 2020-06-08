function execute() {
    var num = document.getElementById("input").value;
    var result = "";
    // if (num == 0) {
    //     result.innerHTML = "none";
    // } else if (num == 1) {
    //     result.innerHTML = "single";
    // } else if (num == 2) {
    //     result.innerHTML = "pair";
    // } else {
    //     result.innerHTML = "many";
    // }
    switch (Number(num)) {
        case 0:
            result = "none";
            break;
        case 1:
            result = "single";
            break;
        case 2:
            result = "pair";
            break;
        default:
            result = "trio";
            break;
    }
    document.getElementById("result").innerHTML = result;
}