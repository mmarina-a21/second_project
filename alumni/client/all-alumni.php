<?php
// client/all-alumni.php
session_start();

if (!isset($_SESSION['user_id']) || ($_SESSION['role'] !== 'Registered Alumni' && $_SESSION['role'] !== 'Admin')) {
    header('Location: ../server/api/login.php');
    exit();
}

include '../server/config/db_config.php';

$search_query = "";
if (isset($_GET['search'])) {
    $search_query = $_GET['search'];
    $sql = "
    SELECT profiles.first_name, profiles.last_name, profiles.bio, profiles.contact_info, schools.name AS school_name
    FROM profiles
    JOIN users ON profiles.user_id = users.id
    JOIN schools ON users.school_id = schools.id
    WHERE profiles.first_name LIKE ? OR profiles.last_name LIKE ? OR profiles.bio LIKE ?
    ORDER BY schools.name, profiles.last_name, profiles.first_name
    ";

    $stmt = $conn->prepare($sql);
    $search_param = "%" . $search_query . "%";
    $stmt->bind_param("sss", $search_param, $search_param, $search_param);
    $stmt->execute();
    $result = $stmt->get_result();

    $alumni = [];
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
    ORDER BY schools.name, profiles.last_name, profiles.first_name
    ";

    $result = $conn->query($sql);

    $alumni = [];
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
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <h1>All Alumni</h1>
    <form method="get" action="all-alumni.php">
        <input type="text" name="search" placeholder="Search by name or bio" value="<?php echo htmlspecialchars($search_query); ?>">
        <button type="submit">Search</button>
    </form>
    <?php foreach ($alumni as $school_name => $profiles): ?>
        <h2><?php echo $school_name; ?></h2>
        <ul>
            <?php foreach ($profiles as $profile): ?>
                <li>
                    <strong><?php echo $profile['first_name'] . ' ' . $profile['last_name']; ?></strong><br>
                    Bio: <?php echo $profile['bio']; ?><br>
                    Contact Info: <?php echo $profile['contact_info']; ?><br>
                </li>
            <?php endforeach; ?>
        </ul>
    <?php endforeach; ?>
</body>
</html>
