 coloredBox();


 function alertButton() {
     // let genders = document.getElementsByName("gender"),
     //     selected;
     // genders.forEach((button) => { if (button.checked === true) selected = button.value; });
     // alert(selected);
     let yourmom = document.querySelector('input[type="radio"]:checked+label');
     if (yourmom != null) {
         alert(yourmom.innerHTML)
     }

     let element = document.getElementById("whatever");
     element.style.backgroundColor = "pink"
 }

 function buildColor(r, g, b) {
     let retVal = "rgb(" + r + "," + g + "," + b + ")";
     return retVal;
 }

 function coloredBox() {
     let color = document.getElementById("coloredBox");
     let a = Math.floor(Math.random() * 255);
     let b = Math.floor(Math.random() * 255);
     let c = Math.floor(Math.random() * 255);
     let stringColor = buildColor(a, b, c);
     console.log(stringColor);

     color.style.backgroundColor = stringColor;
 }