<?php
$server = "localhost";
$user = "root";
$password = "Tech4Dev";
$dbname = "connectMeUsers";

$connected = mysqli_connect($server, $user, $password, $dbname) or die(mysqli_error($connected));

// if ($connected) {
//     echo "Connected!";
// } else {
//     echo "Not Connected!";
// }

?>