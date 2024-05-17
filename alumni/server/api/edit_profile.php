<?php
// client/edit-profile.php
session_start();

if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'Registered Alumni') {
    header('Location: ../server/api/login.php');
    exit();
}

include '../server/config/db_config.php';

$user_id = $_SESSION['user_id'];

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $bio = $_POST['bio'];
    $contact_info = $_POST['contact_info'];

    $sql = "UPDATE profiles SET first_name = ?, last_name = ?, bio = ?, contact_info = ? WHERE user_id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssi", $first_name, $last_name, $bio, $contact_info, $user_id);

    if ($stmt->execute()) {
        header('Location: profile.php');
    } else {
        echo "<p>Error: " . $stmt->error . "</p>";
    }
    $stmt->close();
    $conn->close();
} else {
    $sql = "SELECT * FROM profiles WHERE user_id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $user_id);
    $stmt->execute();
    $result = $stmt->get_result();
    $profile = $result->fetch_assoc();
    $stmt->close();
    $conn->close();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Profile</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <h1>Edit Profile</h1>
    <form method="post" action="edit-profile.php">
        <label for="first_name">First Name:</label>
        <input type="text" id="first_name" name="first_name" value="<?php echo $profile['first_name']; ?>" required>

        <label for="last_name">Last Name:</label>
        <input type="text" id="last_name" name="last_name" value="<?php echo $profile['last_name']; ?>" required>

        <label for="bio">Bio:</label>
        <textarea id="bio" name="bio" required><?php echo $profile['bio']; ?></textarea>

        <label for="contact_info">Contact Info:</label>
        <textarea id="contact_info" name="contact_info" required><?php echo $profile['contact_info']; ?></textarea>

        <button type="submit">Save Changes</button>
    </form>
</body>
</html>
