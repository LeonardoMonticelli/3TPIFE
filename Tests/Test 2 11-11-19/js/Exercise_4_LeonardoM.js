var askPrompt = prompt("Please enter a number between 5 and 10");
var ask = Number(askPrompt);

for (var i = 0; i <= 10; i++)
    if (ask < 10 && ask > 5) {
        alert("Congratulations - you know math");
        i = 10;
    } else {
        if (i < 5) {
            var retryPrompt = prompt("Please enter a number between 5 and 10");
            var ask = Number(retryPrompt);
        }
        if (i > 5 && i < 10) {
            var retryPrompt2 = prompt("Seriously, a number between 5 and 10!");
            var ask = Number(retryPrompt2);
        }
        if (i === 10) {
            alert("I give up! You definetly have some problems");
        }
    }