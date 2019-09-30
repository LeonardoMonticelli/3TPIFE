//9 - prompts

// var species = prompt("What's your species?", "human");
// alert("Your species is " + species);


// part 2

// var question = "What's your species?";
// var answer = "Human";

// prompt("Part 2: " + question, answer);

//----------------------------------------------------------------------------------------------------------------

// 10 - if statements

// var x = prompt("What does Sonic do?")

// if (x == "fly") {
//     alert("Not really...");
// }
// if (x == "go fast" || "run" || "run around at the speed of sound") {
//     alert("Correct!");
// } else {
//     alert("No! you dingus...");
// }

//---------------------------------------------------------------------------------------------

// 13 -

var age = prompt("Please enter your age.");
var diploma = prompt("Do you have a diploma?");

if (age >= 20) {
    if (diploma == "yes") {
        alert("You can become a teacher");
    } else {
        alert("Keep studying")
    }
} else {
    alert("You can NOT become a teacher yet >:(");
}