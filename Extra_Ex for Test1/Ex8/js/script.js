// function startCode() {
//     var m = -50;
//     //write the code here

//     document.getElementById("dataHere").innerHTML += "M is= " + m + "<br>";
//     for (; m !== 0;) {
//         if (m > 0) {
//             document.getElementById("dataHere").innerHTML += m + "<br>";
//             m--
//         } else {
//             document.getElementById("dataHere").innerHTML += m + "<br>";
//             m++
//         }
//     }
// }


function startCode() {
    m = -50;

    document.getElementById("dataHere").innerHTML += "M is= " + m + "<br>";
    for (; m !== 0;) {

        if (m > 0) {
            document.getElementById("dataHere").innerHTML += m + "<br>";
            m--;
        } else {
            document.getElementById("dataHere").innerHTML += m + "<br>";
            m++;
        }
    }
}