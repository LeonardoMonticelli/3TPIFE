function calculate(a, b, c) {
    var root = Math.sqrt(b * b - 4 * a * c);
    var xPos = (-b + root) / 2 * a;
    var xNeg = (-b - root) / 2 * a;

    console.log(xPos, xNeg);
}