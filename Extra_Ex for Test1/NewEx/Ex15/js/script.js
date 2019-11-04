var m = 2;
var n = 4;

var pow = 1;

for (var i = 1; i <= n; i++) {
    pow = pow * m;
    console.log("The product of " + m + " to the power of " + n + " is " + pow)
}

//the pow variable will increment with each loop, having the console log inside the loop turns the power into a product