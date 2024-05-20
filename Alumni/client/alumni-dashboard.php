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
    <link rel="stylesheet" href="dashboard.css">
</head>
<body>
    <div class="sidebar">
        <h2>Alumni Dashboard</h2>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="profile.php">Profile</a></li>
            <li><a href="edit-profile.php">Edit Profile</a></li>
            <li><a href="all-alumni.php">All Alumni</a></li>
            <li><a href="../server/api/logout.php">Logout</a></li>
        </ul>
    </div>
    <div class="main-content">
        <h1>Welcome, Alumni</h1>
        <div class="card">
            <h2>Dashboard Overview</h2>
            <p>Welcome to your dashboard. Here you can manage your profile and view alumni events.</p>
        </div>
        <div class="card">
            <h2>Upcoming Events</h2>
            <p>Check out the latest events and activities organized by the alumni association.</p>
        </div>
    </div>
</body>
</html>