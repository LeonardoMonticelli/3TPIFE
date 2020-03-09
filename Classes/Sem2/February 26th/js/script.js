function alertButton() {
    // let genders = document.getElementsByName("gender"),
    //     selected;
    // genders.forEach((button) => { if (button.checked === true) selected = button.value; });
    // alert(selected);

    //


    let yourmom = document.querySelector('input[type="radio"]:checked+label');
    alert(yourmom.innerHTML)
}