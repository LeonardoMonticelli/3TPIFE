// Exercise 1

/* for (i = 200; i <= 250; i++) {
    if (i % 2 === 1) {
        console.log(i + " is an odd number")
    }
} */

// Exercise 2

/*for (i = 200; i <= 250; i++) {
    if (i % 5 === 0) {
        console.log("Here is a fiver: " + i)
    } else {
        console.log(i);
    }
}*/

//Exercise 3
/*
for (i = 200; i <= 250; i++) {
    var myStr = "";
    if (i % 8 !== 0) {
        myStr = myStr + " Non 8er: ";
    }

    if (i % 5 === 0) {
        myStr = myStr + " Here is a fiver: ";
    }

    myStr = myStr + i;

    console.log(myStr);

} */

//Exercise 4
/*var a = 1;
var b = 1;

console.log(a, b);

for (fi = 3; fi <= 20; fi++) {
    var c = a + b;

    a = b;
    b = c;
    console.log(b);
}*/

//Exercise 5
/*var a = 1;
var b = 1;
var c = 0;

console.log(a, b);

for (fi = 0; c < 1000000; fi++) {
    c = a + b;

    a = b;
    b = c;
    console.log(b);
}
console.log("This programm has looped: " + fi + " times."); */

//Exercise 6
/*var a = 1;
var b = 1;
var c = 0;

console.log(a, b);

for (fi = 0; c < 1000000; fi++) {
    c = a + b;

    a = b;
    b = c;
    if (c % 2 === 0) {
        console.log(c + " is an Even number")
    } else {
        console.log(b);
    }
}
console.log("This programm has looped: " + fi + " times.");*/

//Exercise 7
function startCode() {
    document.getElementById('myTable');
    for (var i = 0; i < 5; i++) {
        // loop for rows !        
        var STR = ""; // start an empty row
        if (i % 2 == 0) {
            STR += "<tr>" // start row tag
        } else {
            STR += "<tr class = 'yellowCells'>" // start row tag
        }
        for (var x = 0; x < 8; x++) {
            var u = i * x;
            if (x % 2 === 0) {
                STR += "<td class='redCells'>" + u.toString() + "</td>"; // ADD A TD tag, inside the TR
            } else {
                STR += "<td>" + u.toString() + "</td>";
            }
        } // end loop for columns
        STR += "</tr>"; // end row tag -> FINISH the TR
        document.getElementById("myTable").innerHTML += STR;
    } // end loop for rows
}