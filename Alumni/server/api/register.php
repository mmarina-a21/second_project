<?php
// server/api/register.php
include '../config/db_config.php';

// Fetch schools for the dropdown
$schools_sql = "SELECT id, name FROM schools";
$schools_result = $conn->query($schools_sql);
$schools = [];
while ($row = $schools_result->fetch_assoc()) {
    $schools[] = $row;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
    $school_id = $_POST['school_id'];
    $role = 'Applied Alumni';

    $conn->begin_transaction();

    try {
        $sql = "INSERT INTO users (username, email, password, role, school_id) VALUES (?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssssi", $username, $email, $password, $role, $school_id);
        $stmt->execute();

        $user_id = $stmt->insert_id;

        $sql = "INSERT INTO profiles (user_id, first_name, last_name, bio, contact_info, school_id) VALUES (?, '', '', '', '', ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ii", $user_id, $school_id);
        $stmt->execute();

        $conn->commit();
        echo "<p>Registration successful</p>";
    } catch (Exception $e) {
        $conn->rollback();
        echo "<p>Error: " . $e->getMessage() . "</p>";
    }

    $stmt->close();
    $conn->close();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<video autoplay muted loop id="bg-video">
    <source src="grad.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <a class="fancy-button" href='login.php'"> <i class='bx bx-home'></i>Login</a>
  <div class="wrapper">
    <form method="post" action="register.php">
    <h1>Register</h1>
    <div class="input-box">
        <input type="text" name="username" placeholder="Username" required>
        <i class='bx bxs-user'></i>
    </div>
    <div class="input-box">
        <input type="email" name="email" placeholder="Email" required>
        <i class='bx bxs-user'></i>
    </div>
    <div class="input-box">
        <input type="password" name="password" placeholder="Password" required>
        <i class='bx bxs-user'></i>
    </div>
    <div class="input-box">
        <label for="school_id">Select School:</label>
        <select name="school_id" id="school_id" required>
            <option value="">Select School</option>
            <?php foreach ($schools as $school): ?>
                <option value="<?php echo $school['id']; ?>"><?php echo $school['name']; ?></option>
            <?php endforeach; ?>
        </select>
        <i class='bx bxs-user'></i>
            </div>
        <button type="submit" class="btn">Register</button>
    </form>
            </div>
</body>
</html>
