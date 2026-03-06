/* SIGNUP */
function signupUser() {
    let name = document.getElementById("signup-name").value;
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    let user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem("chilliUser", JSON.stringify(user));
    alert("Signup successful! Please login.");
    window.location.href = "login.html";
}

/* LOGIN */
function loginUser() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    let savedUser = JSON.parse(localStorage.getItem("chilliUser"));

    if (!savedUser) {
        alert("No user found. Please signup first.");
        return;
    }

    if (email === savedUser.email && password === savedUser.password) {
        localStorage.setItem("loggedIn", "true");
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid email or password");
    }
}

/* LOGOUT */
function logoutUser() {
    localStorage.removeItem("loggedIn");
    alert("Logged out");
    window.location.href = "login.html";
}

/* CHECK LOGIN (OPTIONAL) */
function checkLogin() {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "login.html";
    }
}


