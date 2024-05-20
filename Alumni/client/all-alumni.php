<?php
// client/all-alumni.php
session_start();

if (!isset($_SESSION['user_id']) || ($_SESSION['role'] !== 'Registered Alumni' && $_SESSION['role'] !== 'Admin')) {
    header('Location: ../server/api/login.php');
    exit();
}

include '../server/config/db_config.php';

$search_query = "";
$alumni = [];

if (isset($_GET['search'])) {
    $search_query = $_GET['search'];
    $sql = "
    SELECT profiles.first_name, profiles.last_name, profiles.bio, profiles.contact_info, schools.name AS school_name
    FROM profiles
    JOIN users ON profiles.user_id = users.id
    JOIN schools ON users.school_id = schools.id
    WHERE (profiles.first_name LIKE ? OR profiles.last_name LIKE ? OR profiles.bio LIKE ?)
    AND users.role = 'Registered Alumni'
    ORDER BY schools.name, profiles.last_name, profiles.first_name
    ";

    $stmt = $conn->prepare($sql);
    $search_param = "%" . $search_query . "%";
    $stmt->bind_param("sss", $search_param, $search_param, $search_param);
    $stmt->execute();
    $result = $stmt->get_result();

    while ($row = $result->fetch_assoc()) {
        $alumni[$row['school_name']][] = $row;
    }

    $stmt->close();
} else {
    $sql = "
    SELECT profiles.first_name, profiles.last_name, profiles.bio, profiles.contact_info, schools.name AS school_name
    FROM profiles
    JOIN users ON profiles.user_id = users.id
    JOIN schools ON users.school_id = schools.id
    WHERE users.role = 'Registered Alumni'
    ORDER BY schools.name, profiles.last_name, profiles.first_name
    ";

    $result = $conn->query($sql);

    while ($row = $result->fetch_assoc()) {
        $alumni[$row['school_name']][] = $row;
    }
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>All Alumni</title>
    <link rel="stylesheet" href="dashboard.css">
</head>
<body>
    <div class="sidebar">
        <h2>Alumni Dashboard</h2>
        <ul>
            <li><a href="../server/api/logout.php">Logout</a></li>
        </ul>
    </div>
    <div class="main-content">
        <h1>All Alumni</h1>
        <form method="GET" action="all-alumni.php">
            <input type="text" name="search" placeholder="Search alumni" value="<?php echo htmlspecialchars($search_query); ?>">
            <button type="submit">Search</button>
        </form>

        <?php if (isset($alumni) && count($alumni) > 0): ?>
            <?php foreach ($alumni as $school_name => $students): ?>
                <h2><?php echo htmlspecialchars($school_name); ?></h2>
                <div class="alumni-grid">
                    <?php foreach ($students as $student): ?>
                        <div class="alumni-box">
                            <strong><?php echo htmlspecialchars($student['first_name'] . ' ' . $student['last_name']); ?></strong><br>
                            <em><?php echo htmlspecialchars($student['bio']); ?></em><br>
                            <span><?php echo htmlspecialchars($student['contact_info']); ?></span>
                        </div>
                    <?php endforeach; ?>
                </div>
            <?php endforeach; ?>
        <?php else: ?>
            <p>No alumni found.</p>
        <?php endif; ?>
    </div>
</body>
</html>
