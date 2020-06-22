// console.log("test");

// var a = [123, 233, 544, 2];
// var x = 234;

// for (var i = 0; i < a.length; i++) {
//     if (a[i] === x) {
//         console.log("x is not in the array");
//     } else {
//         console.log("x is in the array");
//         break;
//     }
// }

click = 0;

function potato() {
    var theDoc = document.getElementById("counter");
    click++;
    theDoc.innerHTML = "oil x" + click;
}