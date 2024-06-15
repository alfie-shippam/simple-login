document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const loginButton = document.getElementById("login-button");
    const loginErrorMsg = document.getElementById("login-error-msg");

    loginButton.addEventListener("click", (e) => {
        e.preventDefault();
        const username = loginForm.username.value;
        const password = loginForm.password.value;

        if (username === "bigbug" && password === "1234") {
            window.location.href = "success.html";
        } else {
            loginErrorMsg.style.opacity = 1;
        }
    })

});