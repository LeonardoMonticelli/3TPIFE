var mString = prompt("Please enter the value of m");
var nString = prompt("please enter the value of n");

var m = Number(mString);
var n = Number(nString);

if (m > n) {
    for (; n <= m; n++) {
        console.log("The values between 'm' and 'n' are: " + n);
    }
} else if (m < n) {
    for (; m <= n; m++) {
        console.log("The values between 'm' and 'n' are: " + m);
    }
} else if (m = n) {
    console.log("The values of 'm' and 'n' are equal");
}