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

$sql = "SELECT * FROM profiles WHERE user_id = ?";
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
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <div class="container">
        <h1>Your Profile</h1>
        <?php if ($profile): ?>
            <p><strong>First Name:</strong> <?php echo $profile['first_name']; ?></p>
            <p><strong>Last Name:</strong> <?php echo $profile['last_name']; ?></p>
            <p><strong>Bio:</strong> <?php echo $profile['bio']; ?></p>
            <p><strong>Contact Info:</strong> <?php echo $profile['contact_info']; ?></p>
            <a href="edit-profile.php">Edit Profile</a>
        <?php else: ?>
            <p>No profile found. Please contact the administrator.</p>
        <?php endif; ?>
    </div>
</body>
</html>
