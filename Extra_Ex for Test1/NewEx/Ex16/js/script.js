//S1
// var promptS1 = prompt("please enter the value of n");
// var n = Number(promptS1);

// var sum = 0;
// var int = 1;

// for (var i = int; i <= n; i++) {
//     sum += i
//     console.log(i);
// }
// console.log("The sum of the numbers from " + int + " to " + n + " is = " + sum);

//S2
// var promptS2 = prompt("please enter the value of n for S2");
// var n = Number(promptS2);

// var sum = 0;
// var int = 1;

// for (var i = int; i <= n; i++) {
//     sum += (i * i)
//     console.log("value of i= " + i);
// }
// console.log("The sum of the numbers from " + int + " to " + n + " is = " + sum);

// //S3
// var promptS3 = prompt("please enter the value of n for S3");
// var n = Number(promptS3);

// var sum = 0;
// var int = 1;

// for (var i = int; i <= n; i++) {
//     sum += 3 * i * (i - 1)
//     console.log("value of i= " + i);
// }
// console.log("The sum of the numbers from " + int + " to " + n + " is = " + sum);

//S4
var promptS4 = prompt("please enter the value of n for S4");
var n = Number(promptS4);

var sum = 0;
var int = 1;
var i = int;

var mint = 2;

var pow = 1;

for (var another = 1; another <= i; another++) {
    pow = pow * mint;
    console.log("The product of " + mint + " to the power of i= " + i + " is " + pow)
}

for (i; i <= n; i++) {
    sum += (1 / pow)
        //console.log("value of i= " + i);
}
console.log("The sum of the numbers from " + int + " to " + n + " is = " + sum);


// var Pm = prompt("give me m");
// var Pn = prompt("give me n");

// var m = Number(Pm);
// var n = Number(Pn);

// var result = 0;
// for (i = m + 1; i < n; i++) {
//     result += i;
// }

// console.log(result);