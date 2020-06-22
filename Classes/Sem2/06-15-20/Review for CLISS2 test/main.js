// function potato() {
//     var theDoc = document.getElementById("counter");
//     click++;
//     theDoc.innerHTML = "oil x" + click;
// }

var ingredient = {
    oil: 0,
    flour: 0,
    salt: 0,
    water: 0
}

function addIngredient(x) {
    ingredient[x]++;
    var list = document.getElementById("list");
    if (ingredient[x] == 1) {
        let bulletPoint = document.createElement("li");
        bulletPoint.innerHTML = ingredient[x] + "x " + x;
        bulletPoint.id = x;
        list.appendChild(bulletPoint);
    } else {
        let bulletPoint2 = document.getElementById(x);
        bulletPoint2.innerHTML = ingredient[x] + "x " + x;
    }
}

function clearValues() {
    // for (let i; i < ingredient; i++) {
    //     ingredient[i] = 0;
    // }
    for (let i in ingredient) ingredient[i] = 0;
    list.innerHTML = "";
}