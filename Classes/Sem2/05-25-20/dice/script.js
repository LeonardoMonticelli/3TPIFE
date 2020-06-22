function dice() {
    var dice = Math.floor(Math.random() * 6) + 1;

    switch (dice) {
        case 1:
        case 3:
        case 5:
            alert(dice + " dice was odd");
            break;
        case 2:
        case 4:
        case 6:
            alert(dice + " dice was even");
            break;
    }
}