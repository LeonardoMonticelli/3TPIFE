var t = [1, 2, 3, 7];

console.log(t[0]);

var htmlElem = document.getElementById("container");
var yellowBox = '<div class="bigbox box2"></div>';
var greenBox = '<div class="bigbox box"></div>';



var result = "";
for (var i = 0; i < 4; i++) {
    result += yellowBox + greenBox;
}
htmlElem.innerHTML = result;