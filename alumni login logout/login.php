<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Alumni World</title>
  <link rel="stylesheet" href="styles.css">
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>
<body>
  <video autoplay muted loop id="bg-video">
    <source src="grad.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="wrapper">
    <form action="your-login-handler.php" method="POST">
      <h1>Login</h1>
      <div class="input-box">
        <input type="text" name="username" placeholder="Username" required>
        <i class='bx bxs-user'></i>
      </div>
      <div class="input-box">
        <input type="password" name="password" placeholder="Password" required>
        <i class='bx bxs-lock-alt'></i>
      </div>
      <button type="submit" class="btn">Login</button>
      <div class="register-link">
        <p>Don't have an account? <a href="register.php">Register</a></p>
      </div>
    </form>
  </div>
</body>
</html>
