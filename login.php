<?php
session_start();
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $_SESSION["student_name"] = $_POST["name"];
    $_SESSION["exam_count"] = $_SESSION["exam_count"] ?? 0;
    header("Location: index.php");
    exit;
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Student Login</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body class="landing-body">
<div class="landing-wrapper">
    <div class="landing-card">
        <h2>Student Login</h2>
        <form method="POST">
            <input type="text" name="name" placeholder="Enter your name" required
                   style="width:100%;padding:10px;margin:15px 0;border-radius:10px">
            <button class="btn-primary">Start Quiz</button>
        </form>
    </div>
</div>
</body>
</html>
