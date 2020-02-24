var potato = document.getElementById("cars");

var addOp = document.createElement("option");
addOp.value = "dacia";
addOp.innerHTML = "Dacia";

potato.appendChild(addOp);

function addCar() {
    let input = document.getElementById("inp");
    let addOp = document.createElement("option");
    addOp.value = input.value;
    addOp.innerHTML = input.value;

    potato.appendChild(addOp);
}