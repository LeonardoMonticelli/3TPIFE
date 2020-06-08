var n = 1777;

console.log("The value of N is: " + n);
console.log("----------");

for (a = 0; n !== 1; a++) {
    if (n % 2 === 0) {
        n = n / 2;
    } else {
        n = (n * 3) + 1;
    }
    console.log(n);
}
console.log("The number of steps taken are: " + a);