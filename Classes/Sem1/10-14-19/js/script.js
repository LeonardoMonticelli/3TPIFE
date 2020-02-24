// var i = 0;
// var sum = 0;
// var n = 10;

// console.log("The value of n is " + n)
// console.log("---------------------------------------");

// for (i; i <= n; i++) {

//     sum = sum + i;
//     console.log(sum);
// }



//-----------------------------------------------------------------------------------------------------

var a = 1;
var b = 1;

console.log(a, b);

document.getElementById("id");
for (c = 0; c < 100; c++) {

    var c = a + b;

    a = b;

    b = c;

    console.log("Fibo number " + a);

    for (j = a + 1; j < b && j < 100; j++) {
        console.log(j);

    }
}