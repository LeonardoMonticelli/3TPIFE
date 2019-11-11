// Exercise number 1

var promptA = prompt("Please insert a value for A");

var promptB = prompt("Please insert a value for B");

var A = Number(promptA);
var B = Number(promptB);

if (A < B) {
    console.log("A is SMALLER than B | " + A + " is A, and " + B + " is B");
    for (; A <= B; A++) {
        console.log(A);
    }
} else {
    console.log("A is BIGGER than B | " + A + " is A, and " + B + " is B");
    for (; B <= A; B++) {
        console.log(B);
    }
}