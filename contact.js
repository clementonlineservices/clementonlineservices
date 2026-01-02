
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let status = document.getElementById("status");

    if (name === "" || email === "" || message === "") {
        status.style.color = "red";
        status.innerText = "Uzuza ahasabwa hose!";
    } else {
        status.style.color = "green";
        status.innerText = "Ubutumwa bwoherejwe neza ✔️";

        // Gusiba form
        document.getElementById("contactForm").reset();
    }
});