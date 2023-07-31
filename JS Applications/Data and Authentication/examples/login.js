let form = document.getElementById("loginform");

form.addEventListener("submit", login);

async function login(e){
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);
    let user = {
        email: formData.get("email"),
        password: formData.get("password")
    };

    let settings = {
        method: "POST",
        Headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
    }
    let url = "http://localhost:3030/users/login";

    let response = await fetch(url, settings);
    let result = await response.json();
}