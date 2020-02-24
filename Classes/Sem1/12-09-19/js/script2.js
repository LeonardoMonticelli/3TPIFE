document.getElementById("clickMe2").addEventListener("contextmenu", Click);
document.getElementById("clickMe2").addEventListener("contextmenu", unClick);
//context menu is right click

function Click() {
    event.preventDefault();

    document.getElementById("clickMe2").classList.add("enabledButton");
}

function unClick() {
    if (document.getElementById("clickMe2").classList.contains("enabledButton")) {
        event.preventDefault();

        document.getElementById("clickMe2").classList.remove("enabledButton");
    }
}