let loginButton = document.getElementById('switchToLogin');
if(loginButton) {
    loginButton.addEventListener('click', () => {
        self.location.href = "http://localhost:8080/index.php";
    });
}

let registerButton = document.getElementById('switchToRegister')
if(registerButton) {
    addEventListener('click', () => {
        self.location.href = "http://localhost:8080/registration.php";
    });
}

