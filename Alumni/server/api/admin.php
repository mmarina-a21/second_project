<?php
// server/api/admin.php
session_start();

if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'Admin') {
    header('Location: login.php');
    exit();
}

include '../config/db_config.php';

// Handle accepting an applied alumni
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['accept_user_id'])) {
    $accept_user_id = $_POST['accept_user_id'];
    $sql = "UPDATE users SET role = 'Registered Alumni' WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $accept_user_id);
    $stmt->execute();
    $stmt->close();
}

// Handle deleting a user
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['delete_user_id'])) {
    $delete_user_id = $_POST['delete_user_id'];

    // First delete the profile
    $sql = "DELETE FROM profiles WHERE user_id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $delete_user_id);
    $stmt->execute();
    $stmt->close();

    // Then delete the user
    $sql = "DELETE FROM users WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $delete_user_id);
    $stmt->execute();
    $stmt->close();
}

// Retrieve applied and registered alumni
$sql = "SELECT id, username, email, role FROM users WHERE role = 'Applied Alumni' OR role = 'Registered Alumni'";
$result = $conn->query($sql);

$users = [];
while ($row = $result->fetch_assoc()) {
    $users[] = $row;
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Management</title>
    <link rel="stylesheet" href="../../client/dashboard.css">
</head>
<body>
    <div class="sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
            <li><a href="../../client/admin-dashboard.php">Home</a></li>
            <li><a href="#">Manage Users</a></li>
            <li><a href="logout.php">Logout</a></li>
        </ul>
    </div>
    <div class="main-content">
        <h1>Admin Management</h1>
        <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($users as $user): ?>
                    <tr>
                        <td><?php echo htmlspecialchars($user['username']); ?></td>
                        <td><?php echo htmlspecialchars($user['email']); ?></td>
                        <td><?php echo htmlspecialchars($user['role']); ?></td>
                        <td>
                            <?php if ($user['role'] == 'Applied Alumni'): ?>
                                <form method="post" style="display:inline;">
                                    <input type="hidden" name="accept_user_id" value="<?php echo $user['id']; ?>">
                                    <button type="submit">Accept</button>
                                </form>
                            <?php endif; ?>
                            <form method="post" style="display:inline;">
                                <input type="hidden" name="delete_user_id" value="<?php echo $user['id']; ?>">
                                <button type="submit">Delete</button>
                            </form>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</body>
</html>
