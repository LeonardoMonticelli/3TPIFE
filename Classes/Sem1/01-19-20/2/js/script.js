var counter = document.getElementById("counter");

counter.innerHTML = 0;

function plus() {
    counter.innerHTML = Number(counter.innerHTML) + 1;
}

function minus() {
    counter.innerHTML = Number(counter.innerHTML) - 1;
}

function reset() {
    counter.innerHTML = 0;
}