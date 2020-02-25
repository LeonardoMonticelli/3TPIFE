var potato = document.getElementById("cars");

var addOp = document.createElement("option");
addOp.value = "dacia";
addOp.innerHTML = "Dacia";

potato.appendChild(addOp);

function addCar() {
    let input = document.getElementById("inp");
    let addOp = document.createElement("option");

    if (input.value !== "") {
        addOp.value = input.value;
        addOp.innerHTML = input.value;

        potato.appendChild(addOp);
    }
}

function selectChanged() {
    let mySelect = document.getElementById("colors");
    let myBox = document.getElementById("box");
    console.log("You have changed colour " + mySelect.value);

    myBox.classList.remove("yellow");
    myBox.classList.remove("red");
    myBox.classList.remove("blue");
    if (mySelect.selectedIndex == 1) {
        myBox.classList.add("red")
    }
    if (mySelect.selectedIndex == 2) {
        myBox.classList.add("blue")
    }
    if (mySelect.selectedIndex == 3) {
        myBox.classList.add("yellow")
    }
}