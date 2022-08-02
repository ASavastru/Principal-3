<!doctype html>
<html lang="en">
<head>
    <link rel="stylesheet" href="Styles/calendar.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.27.2/axios.js" integrity="sha512-rozBdNtS7jw9BlC76YF1FQGjz17qQ0J/Vu9ZCFIW374sEy4EZRbRcUZa2RU/MZ90X2mnLU56F75VfdToGV0RiA==" crossorigin="anonymous" referrerpolicy="no-referrer" defer></script>
    <script src="Scripts/script.js" defer></script>
    <script src="https://momentjs.com/downloads/moment.min.js"></script>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Calendar</title>
</head>

<body>
<div id="container">

    <div id="header">
        <div id="monthDisplay"></div>
        <div>
            <button id="backButton">Back</button>
            <button id="nextButton">Next</button>
        </div>
    </div>

    <hr/>

    <div id="weekdays">
        <div>Monday</div>
        <div>Tuesday</div>
        <div>Wednesday</div>
        <div>Thursday</div>
        <div>Friday</div>
        <div>Saturday</div>
        <div>Sunday</div>
    </div>

    <hr/>

    <div id="calendar"></div>

    <hr/>

    <div id="employees"></div>
</div>

<div id="newAppointmentModal">
    <h2>New Appointment</h2>
    <form method="post" id="visibleForm">
        <input type="number" id="userId" name="userId"></br>
        <input type="number" id="locationId" name="locationId"></br>
        <input type="date" id="insertedDate" name="insertedDate"></br>
        <input type="time" id="timeStart" name="timeStart"></br>
        <input type="time" id="timeEnd" name="timeEnd"></br>
        <input type="submit" id="submitAppointmentInformation"></br>
    </form>
    <button id="saveButton">Save</button>
    <button id="cancelButton">Cancel</button>
</div>

<div id="deleteAppointmentModal">
    <h2>Appointment</h2>

    <p id="appointmentText"></p>

    <button id="deleteButton">Delete</button>
    <button id="closeButton">Close</button>
</div>

<div id="modalBackDrop"></div>

<form method="get" id="hiddenForm">
    <input type="text" id="selectedDate" name="selectedDate">
    <input type="submit" id="submitSelectedDate">
</form>

<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode([
        'parametru' => $_POST['parameter'],
        'success' => true
    ], JSON_THROW_ON_ERROR);
}

$pdo = new PDO('mysql:dbname=tutorial;host=mysql', 'tutorial', 'secret', [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);

if(isset($_GET["selectedDate"])) {
    $selectedDate = $_GET["selectedDate"];
    GetAppointments($selectedDate);
}

function GetAppointments($dateFromURL){
    global $pdo;
    $stmt = $pdo->prepare("SELECT * FROM tutorial.appointments 
        INNER JOIN tutorial.users ON tutorial.appointments.user = tutorial.users.id
        WHERE tutorial.appointments.date = :dateFromURL");
    $stmt->bindParam(":dateFromURL", $dateFromURL);
    $stmt->execute();
    $stmt->setFetchMode(PDO::FETCH_ASSOC);
    while ($row = $stmt->fetch()) {
        echo $row['first_name'] . " ";
        echo $row['last_name'] . " ";
        echo $row['time_start'] . " ";
        echo $row['time_end'] . " ";
        echo $row['date'] . " ";
        echo "<br/>";
    }
}

if(isset($_POST["userId"])) {
    $userId = $_POST["userId"];
    $locationId = $_POST["locationId"];
    $insertedDate = $_POST["insertedDate"];
    $timeStart = $_POST["timeStart"];
    $timeEnd = $_POST["timeEnd"];
    setAppointments($userId, $locationId, $insertedDate, $timeStart, $timeEnd);
}

function setAppointments($userId, $locationId, $insertedDate, $timeStart, $timeEnd) {
    global $pdo;
    $stmt = $pdo->prepare("INSERT INTO tutorial.appointments (user, location, date, time_start, time_end)
                                VALUES (:userId, :locationId, :insertedDate, :timeStart, :timeEnd); ");

    // 1,1,'2022-08-18','12:00:00','20:00:00'

    $stmt->bindParam(":userId", $userId);
    $stmt->bindParam(":locationId", $locationId);
    $stmt->bindParam(":insertedDate", $insertedDate);
    $stmt->bindParam(":timeStart", $timeStart);
    $stmt->bindParam(":timeEnd", $timeEnd);

    $stmt->execute();
}

function setUsers() {

}

function setLocations() {

}

function login() {

}

?>

</body>
</html>