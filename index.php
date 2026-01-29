<?php
session_start();
if (!isset($_SESSION["student_name"])) {
    header("Location: login.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Dynamic Quiz Application</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
</head>

<body class="landing-body">

<!-- STUDENT INFO BAR -->
<div style="
    position: fixed;
    top: 16px;
    right: 20px;
    font-size: 0.9rem;
    font-weight: 600;
    color: #fff;
    z-index: 1000;">
    👤 <?php echo htmlspecialchars($_SESSION["student_name"]); ?> |
    Exams Taken: <?php echo $_SESSION["exam_count"] ?? 0; ?>
</div>

<div class="landing-wrapper">
    <div class="landing-content">
        <h1 class="landing-title">Dynamic Quiz Application</h1>
        <p class="landing-subtitle">
            Test your knowledge with a responsive, exam-style quiz
        </p>

        <div class="landing-card">
            <div class="selection-group">
                <div class="select-group">
                    <label>Category</label>
                    <select id="category">
                        <option value="web">Web Technologies</option>
                        <option value="network">Computer Networking</option>
                    </select>
                </div>

                <div class="select-group">
                    <label>Difficulty</label>
                    <select id="difficulty">
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
            </div>

            <button class="btn-primary large-btn" onclick="startQuiz()">
                Start Quiz
            </button>
        </div>
    </div>
</div>

<script>
function startQuiz() {
    const category = document.getElementById("category").value;
    const difficulty = document.getElementById("difficulty").value;
    window.location.href = `quiz.php?category=${category}&difficulty=${difficulty}`;
}
</script>

</body>
</html>
