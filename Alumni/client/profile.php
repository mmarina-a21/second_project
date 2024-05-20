<?php
// client/profile.php
session_start();

// Allow access for Registered Alumni and Admin users
if (!isset($_SESSION['user_id']) || !in_array($_SESSION['role'], ['Registered Alumni', 'Admin'])) {
    header('Location: ../server/api/login.php');
    exit();
}

include '../server/config/db_config.php';

$user_id = $_SESSION['user_id'];

$sql = "SELECT p.*, s.name AS school_name FROM profiles p LEFT JOIN schools s ON p.school_id = s.id WHERE p.user_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();
$profile = $result->fetch_assoc();
$stmt->close();
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile</title>
    <link rel="stylesheet" href="dashboard.css">
</head>
<body>
<div class="sidebar">
        <h2>Alumni Dashboard</h2>
        <ul>
            <li><a href="alumni-dashboard.php">Home</a></li>
            <li><a href="profile.php">Profile</a></li>
            <li><a href="edit-profile.php">Edit Profile</a></li>
            <li><a href="all-alumni.php">All Alumni</a></li>
            <li><a href="../server/api/logout.php">Logout</a></li>
        </ul>
    </div>
    <div class="main-content">
        <h1>Your Profile</h1>
        <div class="profile-card">
            <?php if ($profile): ?>
                <p><strong>First Name:</strong> <?php echo htmlspecialchars($profile['first_name']); ?></p>
                <p><strong>Last Name:</strong> <?php echo htmlspecialchars($profile['last_name']); ?></p>
                <p><strong>Bio:</strong> <?php echo htmlspecialchars($profile['bio']); ?></p>
                <p><strong>Contact Info:</strong> <?php echo htmlspecialchars($profile['contact_info']); ?></p>
                <p><strong>School:</strong> <?php echo htmlspecialchars($profile['school_name']); ?></p>
                <a class="btn" href="edit-profile.php">Edit Profile</a>
            <?php else: ?>
                <p>No profile found. Please contact the administrator.</p>
            <?php endif; ?>
        </div>
    </div>
</body>
</html>
