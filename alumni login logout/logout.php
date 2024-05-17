<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Logout - Alumni World</title>
  <link rel="stylesheet" href="styles.css">
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
  <link rel="stylesheet" href="logout-styles.css"> <!-- External CSS file -->
</head>
<body class="logout-page">
  <video autoplay muted loop id="bg-video">
    <source src="log.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="wrapper logout-wrapper">
    <h1>LOGOUT</h1>
    <div class="logout-question">Would you like to logout?</div> <!-- Added question -->
    <form action="register.php" method="POST"> <!-- Changed action to register.php -->
      <button type="submit" class="btn">Logout</button>
    </form>
  </div>
</body>
</html>
