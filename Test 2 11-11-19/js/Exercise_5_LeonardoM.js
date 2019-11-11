var a = Number(prompt("Please enter the value for a"));

var b = Number(prompt("Please enter the value for b"));

var pow1 = 1;
var pow2 = 1;

for (var i = 0; i !== 2; i++) {
    pow1 = pow1 * a;
    pow2 = pow2 * b;
}
console.log("a squared is= " + pow1 + " | b= " + b + " squared is =");