function addCity(cityToAdd) {
    let cities = document.getElementById("cities");

    let oneCity = document.createElement("option");
    oneCity.innerHTML = cityToAdd;
    cities.appendChild(oneCity);
}

function countryChange() {
    let country = document.getElementById("country");
    let cities = document.getElementById("cities");

    cities.classList.remove("hidden");

    cities.innerHTML = "";

    let citiesOf = [
        ["Rome", "Naples", "Venice"],
        ["Luxembourg City", "Mersch", "Esch-Sur-Alzette"],
        ["Bucarest", "Arad", "Cluj"],
        ["Caracas", "Valencia", "Merida"]
    ];

    if (country.value == "Italy") {
        for (let x = 0; x < citiesOf[0].length; x++) {
            { addCity(citiesOf[0][x]); }
        }
    }
    if (country.value == "Luxembourg") {
        for (let x = 0; x < citiesOf[1].length; x++) {
            addCity(citiesOf[1][x]);
        }
    }
    if (country.value == "Romania") {
        for (let x = 0; x < citiesOf[2].length; x++) {
            addCity(citiesOf[2][x]);
        }
    }
    if (country.value == "Venezuela") {
        for (let x = 0; x < citiesOf[3].length; x++) {
            addCity(citiesOf[3][x]);
        }
    }
}