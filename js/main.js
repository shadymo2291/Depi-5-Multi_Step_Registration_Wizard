document.getElementById('submit_form').onsubmit = function() {

    // the input values


    var username = document.getElementById('userName').value.trim();
    var email = document.getElementById('mail').value.trim();
    var password = document.getElementById('password').value;
    var passwordConfirmation = document.getElementById('confirmPassword').value;

    var emptyForm = document.getElementById('emptyForm');
    var userNameError = document.getElementById('userNameError');
    var emailError = document.getElementById('mailError');
    var passwordError = document.getElementById('passwordError');



    // Check Empty Form:
    if (username === "" && email === "" && password === "" && passwordConfirmation === "" ) {
        emptyForm.style.display = "flex";
        return false; // Stop the function here
    } else {
        emptyForm.style.display = "none";
    }

    // Check User Name Validation:
    if (username === "") {
        userNameError.innerHTML = "Please enter a username.";
        return false; // Stop the function here
    }else if (username.length < 5 || username.length > 13) {
        userNameError.innerHTML = "Username must be more than 3 chars or less 15 chars .";
        return false; 
    }else {
        userNameError.innerHTML = "";
    }
    
    // Check Email Validation:
    if (email === "") {
        emailError.innerHTML = "Please enter an email address.";
        return false;
    }else if (!email.includes("@")) {
        emailError.innerHTML = "Please enter a valid email address.";
        return false;
    }else {
        emailError.innerHTML = ""
    }
    
    // Check Password Validation:
    if (password === "") {
        passwordError.innerHTML = "Please enter a password.";
        return false;
    }else if (password.length < 6) {
        passwordError.innerHTML = "Password must be at least 6 characters long.";
        return false;
    }else if (password !== passwordConfirmation) {
        passwordError.innerHTML = "Password dose not match.";
        return false;
    } else {
        passwordError.innerHTML = ""
    }

};
