<?php
// client/alumni-dashboard.php
session_start();
if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'Registered Alumni') {
    header('Location: ../server/api/login.php');
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alumni Dashboard</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <h1>Welcome, Alumni!</h1>
    <p>View and edit your profile here.</p>
    <nav>
        <ul>
            <li><a href="profile.php">View Profile</a></li>
            <li><a href="edit-profile.php">Edit Profile</a></li>
            <li><a href="all-alumni.php">View All Alumni</a></li>
        </ul>
    </nav>
</body>
</html>
