const form = document.getElementById("contact-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const errorInfo = document.getElementById("error-info");
const navBar = document.querySelector(".nav-bar");
const hambar = document.querySelector(".hambar");
const cross = document.querySelector(".cross");
const overlay = document.querySelector(".overlay");

const emailRegx = /^([a-zA-Z0-9\._]+)@([a-zA-Z]+)\.([a-z]+)(\.[a-z]+)?$/;
const nameRegx = /^([A-Za-z0-9]){2,}$/;
const phoneNumberRegx = /^\(?([0-9]){3}\)?[ -]?([0-9]){3}[ -]?([0-9]){4}$/;

const setError = (error) => {
    errorInfo.innerText = error;
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const isValidEmail = emailRegx.test(email.value);
    const isFirstNameValid = nameRegx.test(firstName.value);
    const isLastNameValid = nameRegx.test(lastName.value);
    const isPhoneNumberValid = phoneNumberRegx.test(phone.value);

    if (!isValidEmail) {
        setError("Error: The provided email address is not in a valid format");
        return;
    }
    if (!isFirstNameValid) {
        setError("Error: The provided first name is not valid");
        return;
    }
    if (!isLastNameValid) {
        setError("Error: The provided last name is not valid");
        return;
    }
    if (!isPhoneNumberValid) {
        setError("Error: The provided phone number is not in a valid format");
        return;
    }
    confirm("form submited");
});

hambar.addEventListener("click", () => {
    navBar.classList.add("nav-active");
    overlay.style.display = "block";
    document.documentElement.style.overflow = "hidden";
});

cross.addEventListener("click", () => {
    if (navBar.classList.contains("nav-active")) {
        navBar.classList.remove("nav-active");
        overlay.style.display = "none";
        document.documentElement.style.overflow = "auto";
    }
});
