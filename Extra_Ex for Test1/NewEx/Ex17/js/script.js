var promptN = prompt("please enter the value of n");
var n = Number(promptN);

var m = -1;
var pow = 1;
console.log("being that n is = " + n);

for (i = 1; i <= n; i++) {
    pow = pow * m;
    console.log("i is= " + i + "| (-1) to the power of i is = " + pow);
}