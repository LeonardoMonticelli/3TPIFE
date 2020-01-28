// var area = 0;
// var r = 1000;
// for (var x = -r; x <= r; x++) {
//     for (var y = -r; y <= r; y++) {
//         var c = Math.sqrt((x * x) + (y * y)); //pitagoras theorem
//         if (c <= r) { //lenght of the hipothenuse and the radius
//             //console.log(x, y);
//             area++;
//         }
//     }
// }
// var pi = area / (r * r)

// console.log("area: " + area);

// var pi = 1 / 1 - 1 / 3 + 1 / 5 - 1 / 7 + 1 / 9;

// Leibniz
var n = 1;
var pi = (1 / n);

for (let a = 0; a <= 5; a++) {
    n = n + 2;
    pi = pi - (1 / n);
    n = n + 2;
    pi = pi + (1 / n);
    n = n + 2;
    pi = pi - (1 / n);
}

pi = pi * 4;

console.log("pi: " + pi);