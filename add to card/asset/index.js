let user = JSON.parse(localStorage.getItem('user'));

if (user) {
    window.location.href = "product.html";
}

const loginUser = () => {
      
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    let user = users.find(val => val.email == email && val.password == password);

    if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        alert('Login Successful');
        window.location.href = "product.html"
    } else {
        alert('Invalid Email or Password');
    }

}