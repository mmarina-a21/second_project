<?php
// Example to hash a password
$password = "admin";
$hashed_password = password_hash($password, PASSWORD_DEFAULT);
echo $hashed_password;
?>