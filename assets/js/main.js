let firstName = document.getElementById("firstName");








function submitForm() {
    let nameUser = document.getElementById("firstName").value;
    let surnameUser = document.getElementById("lastName").value;
    let colorUser = document.getElementById("favoriteColor").value;
    let numUser = document.getElementById("favoriteNumber").value;

    document.getElementById("pswDiv").innerHTML = nameUser + surnameUser + colorUser + numUser;

}

