function calc() {
    var hours = Number(document.getElementById("hours").value);
    var Hms = hours * 3600000;

    var minutes = Number(document.getElementById("minutes").value);
    var Mms = minutes * 60000;

    var seconds = Number(document.getElementById("seconds").value);
    var Sms = seconds * 1000;

    var calculation = Hms + Mms + Sms;
    var result = document.getElementById("result");
    result.innerHTML = calculation;
}