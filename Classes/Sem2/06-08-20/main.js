function addtask() {
    var newTask = document.getElementById("input").value;
    var theList = document.getElementById("list");
    var listItem = document.createElement("li");
    listItem.innerHTML = newTask;

    var potato = document.createElement("button");
    potato.innerHTML = "Remove";
    potato.onclick = function() {
        potato.remove();
        listItem.remove();
    }
    theList.appendChild(listItem);
    theList.appendChild(potato);
}