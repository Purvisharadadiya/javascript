
let users = JSON.parse(localStorage.getItem('users')) || [];

const registerUser = () => {

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let obj = {
        id: Math.floor(Math.random() * 100000),
        name: name,
        email: email,
        password: password
    }

    let old = [...users, obj];
    localStorage.setItem('users', JSON.stringify(old));
    alert("User Register successfully");
     window.location.href = "index.html"

}