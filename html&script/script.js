function validateForm() {

    // RESET ERRORS
    document.getElementById("fnameError").innerHTML = "";
    document.getElementById("bdateError").innerHTML = "";
    document.getElementById("mailError").innerHTML = "";
    document.getElementById("sxError").innerHTML = "";
    document.getElementById("qtwoError").innerHTML = "";
    document.getElementById("animalsError").innerHTML = "";
    document.getElementById("bodywaterError").innerHTML = "";
    document.getElementById("successMessage").innerHTML = "";

    let isValid = true;



    // NAME
    let inputN = document.getElementById("fname").value.trim();

    if (inputN.length < 2) { // checking the length of the inputted name !!!!
        document.getElementById("fnameError").innerHTML =
            "Minimum of TWO characters.";
        isValid = false; // if the website checks and finds nothing, this would be stored nd outputted at the bottom once the form is submitted.
          // This is to inform users on what they missed to properly sign up. The previous and following
    }



    // BIRTHDATE
    let bday = document.getElementById("bdate").value;

    if (bday === "") {
        document.getElementById("bdateError").innerHTML =
            "Birthdate is a required field.";
        isValid = false;
    } else {
        let today = new Date();
        let birth = new Date(bday);

        let age = today.getFullYear() - birth.getFullYear(); // calculating how old user is ..
        let monthDiff = today.getMonth() - birth.getMonth(); // finding if birthday occured this year ...

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        } // if birthday hasn't happened , we subtract 1 from age 

        if (age < 13) {
            document.getElementById("bdateError").innerHTML =
                "Minimum of 13 years old.";
            isValid = false;
        } // checking if user is 13 or more years old
    }



    // EMAIL
    let mail = document.getElementById("mail").value.trim();

    if (mail === "") {
        document.getElementById("mailError").innerHTML =
            "Email is required.";
        isValid = false;
    } else {

        let hasAt = false;
        let hasDot = false;

        let atIndex = mail.indexOf("@");

        for (let i = 0; i < mail.length; i++) {
            if (mail[i] === "@") {
                hasAt = true; //
            }
        }

        if (atIndex !== -1) {
            for (let i = atIndex + 1; i < mail.length; i++) {
                if (mail[i] === ".") {
                    hasDot = true;
                }
            }
        }

        if (!hasAt || !hasDot) {
            document.getElementById("mailError").innerHTML =
                "Email must contain '@' and a '.' after it.";
            isValid = false;
        }
    }



    // SEX
    let sex = document.getElementsByName("sx");
    let sxSelected = false;

    for (let i = 0; i < sex.length; i++) {
        if (sex[i].checked) {
            sxSelected = true;
        }
    }

    if (!sxSelected) {
        document.getElementById("sxError").innerHTML =
            "Please select sex.";
        isValid = false;
    }



    // QUESTION 2
    let qtwo = document.getElementsByName("qtwo");
    let qtwoSelected = false;

    for (let i = 0; i < qtwo.length; i++) {
        if (qtwo[i].checked) {
            qtwoSelected = true;
        }
    }

    if (!qtwoSelected) {
        document.getElementById("qtwoError").innerHTML =
            "Please answer question 2.";
        isValid = false; 
    }



    // DROPDOWN
    let bodywater = document.getElementById("bodywater").value;

    if (bodywater === "") {
        document.getElementById("bodywaterError").innerHTML =
            "Please select an answer.";
        isValid = false;
    }



    // CHECKBOXES
    let animals = document.getElementsByName("animals");
    let animalSelected = false;

    for (let i = 0; i < animals.length; i++) {
        if (animals[i].checked) {
            animalSelected = true;
        }
    }

    if (!animalSelected) {
        document.getElementById("animalsError").innerHTML =
            "Select at least one animal.";
        isValid = false;
    }



    // ===== SUCCESS =====
    if (isValid) {
        document.getElementById("successMessage").innerHTML =
            "Form submitted successfully!";
    }

    return isValid;
}