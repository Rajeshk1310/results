function verifyUser() {
    let id = document.getElementById("userid").value;
    let pass = document.getElementById("password").value;

    // Your user credentials
    const users = {
    "2261905": "29-06-1991"
    };

    if (users[id] && users[id] === pass) {
        window.location.href = id + ".html";  // Redirect to result page
    } else {
        document.getElementById("error").style.display = "block";
    }
}
