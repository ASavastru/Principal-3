<?php
session_start();
ob_start();

$action = $_POST['action'] ?? '';

if ($action == 'register') {
    $pdo = new PDO('mysql:dbname=tutorial;host=mysql', 'tutorial', 'secret', [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
    if (isset($_POST['firstname']) && isset($_POST['lastname']) && isset($_POST['username']) && isset($_POST['password'])) {

        function validate($data)
        {
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data);
            return $data;
        }

        $firstname = validate($_POST['firstname']);
        $lastname = validate($_POST['lastname']);
        $password = validate($_POST['password']);
        $username = validate($_POST['username']);

        if (empty($firstname)) {
            header("Location: registration.php?error=First Name is required");
            exit();
        } else if (empty($lastname)) {
            header("Location: registration.php?error=Last Name is required");
            exit();
        } else if (empty($username)) {
            header("Location: registration.php?error=User Name is required");
            exit();
        } else if (empty($password)) {
            header("Location: registration.php?error=Password is required");
            exit();
        } else {
            $options = [
                'cost' => 12,
            ];
            global $options;
            $password = password_hash($password, PASSWORD_BCRYPT, $options);

            $sql = $pdo->prepare("INSERT INTO tutorial.users (first_name, last_name, username, password)
                                VALUES (:firstname, :lastname, :username, :password);");
            $sql->bindParam(":firstname", $firstname);
            $sql->bindParam(":lastname", $lastname);
            $sql->bindParam(":username", $username);
            $sql->bindParam(":password", $password);
            $sql->execute();
            header("Location:/main.php");
        }
    }
}

if ($action == 'login') {
    $pdo = new PDO('mysql:dbname=tutorial;host=mysql', 'tutorial', 'secret', [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);

    if (isset($_POST['username']) && isset($_POST['password'])) {
        function validate($data)
        {
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data);
            return $data;
        }

        $username = validate($_POST['username']);
        $password = validate($_POST['password']);
        if (empty($username)) {
            header("Location: registration.php?error=User Name is required");
            exit();
        } else if (empty($password)) {
            header("Location: registration.php?error=Password is required");
            exit();
        } else {
            $sql = $pdo->prepare("SELECT * FROM users WHERE username= :username");
            $sql->bindParam(":username", $username);
            // $sql->bindParam(":password", $password);
            $sql->execute();
            $row = null;
            $row = $sql->fetch();


            if ($row != null) {
                if ($row['username'] === $username && password_verify($password, $row['password'])) {
                    echo "Logged in!";
                    $_SESSION['username'] = $row['username'];
                    $_SESSION['first_name'] = $row['first_name'];
                    $_SESSION['last_name'] = $row['last_name'];
                    $_SESSION['id'] = $row['id'];
                    header("Location:/main.php");
                    exit();
                } else {
                    header("Location: registration.php?error=Incorect User name or password");
                    // add actual error popup
                    exit();
                }
            } else {
                header("Location: registration.php?error=Incorect User name or password");
                // add actual error popup
                exit();
            }
        }
    }
}


?>

<!--<!doctype html>-->
<!--<html lang="en">-->
<!--<head>-->
<!--    <link rel="stylesheet" href="Styles/login.css">-->
<!--    <meta charset="UTF-8">-->
<!--    <meta name="viewport"-->
<!--          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">-->
<!--    <meta http-equiv="X-UA-Compatible" content="ie=edge">-->
<!--    <title>Document</title>-->
<!--</head>-->
<!--<body>-->
<!---->
<!--<div id="loginAndRegistrationContainer">-->
<!--    <div class="registrationContainer">-->
<!--        <form method="post">-->
<!--            <input type="text" name="firstname" placeholder="Enter First Name" id="firstNameInput"/>-->
<!--            <input type="text" name="lastname" placeholder="Enter Last Name" id="lastNameInput"/>-->
<!--            <input type="text" name="username" placeholder="Enter Username" id="usernameInput"/>-->
<!--            <input type="password" name="password" placeholder="Enter Password" id="passwordInput"/>-->
<!--            <input type="submit" id="submitInput" value="Register">-->
<!--            <input type="hidden" name="action" value="register">-->
<!--        </form>-->
<!--    </div>-->
<!--    <div class="loginContainer">-->
<!--        <form method="post" id="loginPost">-->
<!--            <input type="text" name="username" placeholder="Enter Username" id="usernameInput"/>-->
<!--            <input type="password" name="password" placeholder="Enter Password" id="passwordInput"/>-->
<!--            <input type="submit" id="submitInput" value="Log In"/>-->
<!--            <input type="hidden" name="action" value="login">-->
<!--        </form>-->
<!--    </div>-->
<!--</div>-->
<!---->
<!--</body>-->
<!--</html>-->

<!DOCTYPE html>
<html lang="es" dir="ltr">
<head>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0">
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="Styles/loginStyles.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&display=swap" rel="stylesheet">
</head>
<body>
<div class="main">
    <div class="container a-container" id="a-container">
        <form class="form" id="a-form" method="post">
            <h2 class="form_title title">Create Account</h2>
            <div class="form__icons"></div><span class="form__span">Use your account details</span>
            <input class="form__input" type="text" name="firstname" placeholder="First Name">
            <input class="form__input" type="text" name="lastname" placeholder="Last Name">
            <input class="form__input" type="text" name="username" placeholder="Username">
            <input class="form__input" type="password" name="password" placeholder="Password">
            <input type="hidden" name="action" value="register">
            <input class="form__button button submit" type="submit" value="Register">

        </form>
    </div>
    <div class="container b-container" id="b-container">
        <form class="form" id="b-form" method="post">
            <h2 class="form_title title">Sign in to Website</h2>
            <div class="form__icons"></div><span class="form__span">Use your personal details</span>
            <input class="form__input" type="text" name="username" placeholder="Username">
            <input class="form__input" type="password" name="password" placeholder="Password">
            <input name="action" value="login" style="display:none">
            <input type="submit" class="form__button button submit" value="Log In">
<!--            <input type="submit" class="form__button button submit" value="Log In">-->
        </form>
    </div>
    <div class="switch" id="switch-cnt">
        <div class="switch__circle"></div>
        <div class="switch__circle switch__circle--t"></div>
        <div class="switch__container" id="switch-c1">
            <h2 class="switch__title title">Welcome Back !</h2>
            <p class="switch__description description">To connect with us please login with your personal info</p>
            <button class="switch__button button switch-btn">SIGN IN</button>
        </div>
        <div class="switch__container is-hidden" id="switch-c2">
            <h2 class="switch__title title">Hello Friend !</h2>
            <p class="switch__description description">Enter your personal details and start your journey with us</p>
            <button class="switch__button button switch-btn">SIGN UP</button>
        </div>
    </div>
</div>
<script src="Scripts/loginAnimations.js"></script>
</body>
</html>