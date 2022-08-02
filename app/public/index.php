<?php

session_start();
ob_start();

$pdo = new PDO('mysql:dbname=tutorial;host=mysql', 'tutorial', 'secret', [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);

if (isset($_POST['uname']) && isset($_POST['password'])) {

    function validate($data)
    {

        $data = trim($data);

        $data = stripslashes($data);

        $data = htmlspecialchars($data);

        return $data;

    }

    $uname = validate($_POST['uname']);

    $pass = validate($_POST['password']);

    if (empty($uname)) {

        header("Location: index.php?error=User Name is required");

        exit();

    } else if (empty($pass)) {

        header("Location: index.php?error=Password is required");

        exit();

    } else {

        $sql = $pdo->prepare("SELECT * FROM users WHERE username= :uname AND password= :pass");
        $sql->bindParam(":uname", $uname);
        $sql->bindParam(":pass", $pass);
        $sql->execute();
        $row = null;
        $row = $sql->fetch();

        if ($row != null) {

            if ($row['username'] === $uname && $row['password'] === $pass) {

                echo "Logged in!";

                $_SESSION['username'] = $row['username'];

                $_SESSION['first_name'] = $row['first_name'];

                $_SESSION['last_name'] = $row['last_name'];

                $_SESSION['id'] = $row['id'];

                header("Location:/main.php");

                exit();

            } else {

                header("Location: index.php?error=Incorect User name or password");

                exit();

            }

        } else {

            header("Location: index.php?error=Incorect User name or password");

            // add actual error popup

            exit();

        }
    }
}

?>

<!doctype html>
<html lang="en">
<head>
    <link rel="stylesheet" href="Styles/login.css">
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

<div id="loginContainer">
    <form method="post" id="loginPost">
        <input type="text" name="uname" placeholder="Enter Username" id="usernameInput"/>
        <input type="password" name="password" placeholder="Enter Password" id="passwordInput"/>
        <input type="submit" id="submitInput"/>
    </form>
</div>

<?php



?>

</body>
</html>