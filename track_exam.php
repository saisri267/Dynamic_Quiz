<?php
session_start();
$_SESSION["exam_count"] = ($_SESSION["exam_count"] ?? 0) + 1;
