<?php
// server/api/dashboard.php
session_start();

if (!isset($_SESSION['user_id'])) {
    header('Location: login.php');
    exit();
}

$role = $_SESSION['role'];

if ($role == 'Admin') {
    header('Location: ../../client/admin-dashboard.php');
} elseif ($role == 'Registered Alumni') {
    header('Location: ../../client/alumni-dashboard.php');
} else {
    header('Location: ../../client/common-dashboard.php');
}
?>
