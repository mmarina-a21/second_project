<?php
// server/config/db_config.php

$servername = "localhost";
$username = "root";
$password = "qwerty123!";
$dbname = "alumni_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
