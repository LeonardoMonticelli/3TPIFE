var a = 1;
var b = 1;

console.log(a);

console.log(b);

for (x = 0; x != 121; x++) {
    var c = a + b;

    a = b;

    b = c

    console.log(c);
}