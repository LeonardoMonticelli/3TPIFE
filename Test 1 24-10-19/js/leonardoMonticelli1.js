console.log("a.");

var m = 4; //base
var pow = 1;
var n = 2 // exp

for (i = 0; i !== n; i++) {
    pow = pow * m;
}

console.log(m + " raised to the power of " + n + " is " + pow);

console.log("b.");

var m2 = 3; //base
var pow2 = 1;
var n2 = -1; // exp

if (n2 < 0) {
    var neg = -n2;
    for (i2 = 0; i2 !== neg; i2++) {
        pow2 = pow2 * m2;
    }
    pow2 = 1 / pow2;
} else {
    for (i2 = 0; i2 !== n2; i2++) {
        pow2 = (pow2 * m2);
    }
}
console.log(m2 + " raised to the power of " + n2 + " is " + pow2);