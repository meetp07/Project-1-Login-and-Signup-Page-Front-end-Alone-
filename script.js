const formOpenBtn = document.querySelector("#form-open"),
    home = document.querySelector(".home"),
    formContainer = document.querySelector(".form_container"),
    formCloseBtn = document.querySelector(".form_close"),
    signupBtn = document.querySelector("#signup"),
    loginBtn = document.querySelector("#login"),
    pwShowHide = document.querySelectorAll(".pw_hide");

// Password Validation

function validate(){
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    let alertElement = document.getElementById("alert");
    alertElement.innerText = "";
    if(password.length < 8 || confirmPassword.length < 8){
        alertElement.innerText = "Password must be at least 8 characters.";
        return false;
    }
    else if(password!=confirmPassword){
        alertElement.innerText = "Passwords do not match.";
        return false;
    }
    else if(!/[a-z]/.test(password)){
        alertElement.innerText = "Password must contain at least one lowercase letter.";
        return false;
    }
    else if(!/[A-Z]/.test(password)){
        alertElement.innerText = "Password must contain at least one uppercase letter.";
        return false;
    }
    else if(!/[^a-zA-Z0-9]/.test(password)){
        alertElement.innerText = "Password must contain at least one special character.";
        return false;
    }
    return true;
}

//password validation ends here

// Open the form

formOpenBtn.addEventListener("click", () => {
    home.classList.add("show");
    formContainer.classList.remove("active");
});
formCloseBtn.addEventListener("click", () => {
    home.classList.remove("show");
});
// Open the form ends

// Login and sign up page after click

signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});

// Login and sign up page after click ends

// Password show and hide buttons
pwShowHide.forEach((icon) => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if(getPwInput) {
            if (getPwInput.type === "password") {
                getPwInput.type = "text";
                icon.classList.replace("bx-hide", "bx-show");
            }else{
                getPwInput.type = "password";
                icon.classList.replace("bx-show", "bx-hide");
            }
        }
    });
});

// Password show and hide buttons ends

// Password Validation
function Validation(){
    let getPwInput = document.querySelector("input[type=password]");
    
}
