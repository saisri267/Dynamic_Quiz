<?php
session_start();

if (!isset($_SESSION['exam_count'])) {
    $_SESSION['exam_count'] = 1;
} else {
    $_SESSION['exam_count']++;
}
?>
