var ask = prompt("Please enter a value for x");

var ask2 = prompt("Please compute x*x +1");

var num = Number(ask);
var num2 = Number(ask2);

var equation = num * num + 1;

if (num2 === equation) {
    console.log("Yay-congrats");
} else {
    console.log("You are a big dumb dumb");
}