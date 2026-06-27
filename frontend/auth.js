const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");
const card = document.querySelector(".auth-card");

function animateAndRedirect() {
    card.style.transition = "all 0.5s ease";
    card.style.transform = "scale(0.95)";
    card.style.opacity = "0.4";

    setTimeout(() => {
        document.body.style.transition = "opacity 0.3s ease";
        document.body.style.opacity = "0";

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 300);
    }, 600);
}

loginBtn.addEventListener("click", () => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
        alert("Please fill login details");
        return;
    }

    animateAndRedirect();
});

signupBtn.addEventListener("click", () => {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!name || !email || !password) {
        alert("Please fill all fields");
        return;
    }

    animateAndRedirect();
});