function verifyUser() {
    let id = document.getElementById("userid").value;
    let pass = document.getElementById("password").value;

    // Your user credentials
    const users = {
        "2261905": "03-01-2026"  // ID : DOB (password)
    };

    if (users[id] && users[id] === pass) {
        window.location.href = id + ".html";  // Redirect to result page
    } else {
        document.getElementById("error").style.display = "block";
    }
}
