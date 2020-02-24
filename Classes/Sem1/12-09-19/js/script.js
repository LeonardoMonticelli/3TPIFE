document.getElementById("clickMe2").addEventListener("contextmenu", enableClick);
document.getElementById("clickMe2").addEventListener("click", disableClick);
//context menu is right click

function enableClick() {
    event.preventDefault();

    document.getElementById("clickMe").addEventListener("click", startClick);
    document.getElementById("clickMe2").classList.add("enabledButton");
}

function disableClick() {
    event.preventDefault();

    document.getElementById("clickMe").removeEventListener("click", startClick);
    document.getElementById("clickMe2").classList.remove("enabledButton");
}

function startClick() {
    alert("hello");
}