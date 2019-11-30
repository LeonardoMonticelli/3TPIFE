var name = prompt("Greetings user, please enter your name.");
var surName = prompt("Please enter your surname.");
var age = prompt("Now, please enter your age.");

var ori = "Welcome " + name + " " + surName + "! I see that next year you will be " + (Number(age) + 1) + " years old. ";
var yoAdult = "You will become an adult!";
var adult = "How's the adult life going?";

if (age == 17) { alert(ori + yoAdult) };

if (age >= 18) { alert(ori + adult) };