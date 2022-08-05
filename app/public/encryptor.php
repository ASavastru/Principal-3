<?php
//fisier php pentru encriptarea parolelor userilor deja existenti din baza de date

$pdo = new PDO('mysql:dbname=tutorial;host=mysql', 'tutorial', 'secret', [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
$stmt = $pdo->prepare("SELECT * FROM users");
$stmt->execute();
$users = $stmt->fetchAll();
$options = [
    'cost' => 12,
];
//use $options
$users = array_map(function($item) {
    global $options;
    $item['password'] = password_hash($item['password'], PASSWORD_BCRYPT, $options);
    return $item;
}, $users);
foreach ($users as $user){
    $id = $user['id'];
    $password = $user['password'];
    $stmt = $pdo->prepare("UPDATE users SET password = :password WHERE id = :id");
    $stmt->bindParam(":id", $id);
    $stmt->bindParam(":password", $password);
    $stmt->execute();
}