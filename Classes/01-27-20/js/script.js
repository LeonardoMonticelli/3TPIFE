var area = 0;
for (var x = -10; x < 11; x++) {

    for (var y = -10; y < 11; y++) {
        var c = Math.sqrt((x * x) + (y * y));

        if (c <= 10) {
            console.log(x, y);
            area++;
        }
    }
}
console.log("area: " + area);
// console.log("lenght: " + c);
// console.log("pi: " + pi);