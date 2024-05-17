<?php
// client/common-dashboard.php
session_start();
if (!isset($_SESSION['user_id']) || ($_SESSION['role'] !== 'Applied Alumni' && $_SESSION['role'] !== 'Visitor')) {
    header('Location: ../api/login.php');
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Common Dashboard</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <h1>Welcome!</h1>
    <p>This is the dashboard for applied alumni and visitors.</p>
</body>
</html>
