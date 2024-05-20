<?php
// client/edit-profile.php
session_start();

if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'Registered Alumni') {
    header('Location: ../server/api/login.php');
    exit();
}

include '../server/config/db_config.php';

// Fetch schools for the dropdown
$schools_sql = "SELECT id, name FROM schools";
$schools_result = $conn->query($schools_sql);
$schools = [];
while ($row = $schools_result->fetch_assoc()) {
    $schools[] = $row;
}

$user_id = $_SESSION['user_id'];

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $bio = $_POST['bio'];
    $contact_info = $_POST['contact_info'];
    $school_id = $_POST['school_id'];

    $sql = "UPDATE profiles SET first_name = ?, last_name = ?, bio = ?, contact_info = ?, school_id = ? WHERE user_id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssii", $first_name, $last_name, $bio, $contact_info, $school_id, $user_id);

    if ($stmt->execute()) {
        header('Location: profile.php');
    } else {
        echo "<p>Error: " . $stmt->error . "</p>";
    }
    $stmt->close();
    $conn->close();
} else {
    $sql = "SELECT p.*, s.name AS school_name FROM profiles p LEFT JOIN schools s ON p.school_id = s.id WHERE p.user_id = ?";
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
        <h1>Edit Profile</h1>
        <div class="profile-card">
        <form method="post" action="edit-profile.php">
            <label for="first_name">First Name:</label>
            <input type="text" id="first_name" name="first_name" value="<?php echo $profile['first_name']; ?>" required>

            <label for="last_name">Last Name:</label>
            <input type="text" id="last_name" name="last_name" value="<?php echo $profile['last_name']; ?>" required>

            <label for="bio">Bio:</label>
            <textarea id="bio" name="bio" required><?php echo $profile['bio']; ?></textarea>

            <label for="contact_info">Contact Info:</label>
            <textarea id="contact_info" name="contact_info" required><?php echo $profile['contact_info']; ?></textarea>

            <label for="school_id">Select School:</label>
            <select name="school_id" id="school_id" required>
                <option value="">Select School</option>
                <?php foreach ($schools as $school): ?>
                    <option value="<?php echo $school['id']; ?>" <?php if ($school['id'] == $profile['school_id']) echo 'selected'; ?>>
                        <?php echo $school['name']; ?>
                    </option>
                <?php endforeach; ?>
            </select>
            <button type="submit">Save Changes</button>
        </form>
        </div>
    </div>
</body>
</html>
