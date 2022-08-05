<?php
session_start();
ob_start();

$action = $_POST['action']??'';

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
            header("Location: index.php?error=User Name is required");
            exit();
        } else if (empty($password)) {
            header("Location: index.php?error=Password is required");
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

<!doctype html>
<html lang="en">
<head>
    <link rel="stylesheet" href="Styles/login.css">
    <meta charset="UTF-8">
    `
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

<div class="loginContainer">
    <form method="post">
        <input type="text" name="firstname" placeholder="Enter First Name" id="firstNameInput"/>
        <input type="text" name="lastname" placeholder="Enter Last Name" id="lastNameInput"/>
        <input type="text" name="username" placeholder="Enter Username" id="usernameInput"/>
        <input type="password" name="password" placeholder="Enter Password" id="passwordInput"/>
        <input type="submit" id="submitInput" value="Register">
        <input type="hidden" name="action" value="register">
    </form>
</div>

<div class="loginContainer">
    <form method="post" id="loginPost">
        <input type="text" name="username" placeholder="Enter Username" id="usernameInput"/>
        <input type="password" name="password" placeholder="Enter Password" id="passwordInput"/>
        <input type="submit" id="submitInput" value="Log In"/>
        <input type="hidden" name="action" value="login">
    </form>
</div>

</body>
</html>