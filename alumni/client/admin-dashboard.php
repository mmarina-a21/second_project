<?php
// client/admin-dashboard.php
session_start();
if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'Admin') {
    header('Location: ../server/api/login.php');
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <div class="container">
        <h1>Welcome, Admin!</h1>
        <p>Manage users and profiles here.</p>
        <nav>
            <ul>
                <li><a href="../server/api/admin.php">Manage Users</a></li>
                <li><a href="all-alumni.php">View All Alumni</a></li>
            </ul>
        </nav>
    </div>
</body>
</html>
