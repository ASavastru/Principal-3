let loginButton = document.getElementById('switchToLogin');
if(loginButton) {
    loginButton.addEventListener('click', () => {
        self.location.href = "../PHP/index.php";
    });
}

let registerButton = document.getElementById('switchToRegister')
if(registerButton) {
    addEventListener('click', () => {
        self.location.href = "../PHP/registration.php";
    });
}

