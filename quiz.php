<?php
session_start();

if (!isset($_SESSION["student_name"])) {
    header("Location: login.php");
    exit;
}

$category   = $_GET['category']   ?? 'web';
$difficulty = $_GET['difficulty'] ?? 'easy';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Quiz</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
</head>

<body>
<div class="quiz-page">
    <div class="quiz-main-container">

        <!-- LEFT QUESTION NAV -->
        <div class="question-nav" id="questionNav"></div>

        <!-- CENTER CONTENT -->
        <div class="quiz-center">

            <!-- HEADER -->
            <div class="quiz-header">
                <h3><?= ucfirst($category) ?> - <?= ucfirst($difficulty) ?></h3>

                <span id="question-counter"></span>

                <div class="timer-pill">
                    Time: <span id="time" style="color:#ffebee;font-weight:700;">0</span>s
                </div>
            </div>

            <!-- QUESTION -->
            <div id="question" class="question-text"></div>

            <!-- OPTIONS -->
            <div id="options" class="options-vertical"></div>

            <!-- WARNING -->
            <div id="warning" class="warning"></div>

            <!-- CONTROLS -->
            <div id="submit-warning" style="display:none; color:red; margin-top:10px;"></div>

            <div class="quiz-controls">
                <button id="prevBtn" class="btn-secondary">Prev</button>
                <button id="nextBtn" class="btn-primary">Next</button>
                <button id="submitBtn" class="btn-danger" style="display:none;">Submit</button>
            </div>

        </div>
    </div>
</div>

<!-- PHP → JS -->
<script>
    const CATEGORY = "<?= $category ?>";
    const DIFFICULTY = "<?= $difficulty ?>";
</script>

<!-- Chart -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<!-- ✅ QUIZ DATA FIRST -->
<script src="questions.js"></script>

<!-- ✅ QUIZ LOGIC AFTER -->
<script src="quiz.js"></script>

</body>
</html>
