// ================= PICK QUESTIONS =================
const questions = quizData?.[CATEGORY]?.[DIFFICULTY];

if (!questions || questions.length === 0) {
    alert("No questions found for selected quiz.");
    window.location.href = "index.php";
}

// ================= STATE =================
let index = 0;
let answers = new Array(questions.length).fill(null);

// ================= TIME TRACKING =================
let timeSpent = new Array(questions.length).fill(0);
let questionStartTime = Date.now();

// ================= DOM =================
const qEl = document.getElementById("question");
const oEl = document.getElementById("options");
const nav = document.getElementById("questionNav");
const warningEl = document.getElementById("warning");
const timeEl = document.getElementById("time");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const submitBtn = document.getElementById("submitBtn");

// ================= TIMER =================
const TIME_BY_DIFF = {
    easy: 10,
    medium: 15,
    hard: 20
};

let timer = null;
let timeLeft = TIME_BY_DIFF[DIFFICULTY];

// ---------- START TIMER ----------
function startTimer() {
    clearInterval(timer);

    timer = setInterval(() => {
        timeLeft--;
        timeEl.innerText = timeLeft;

        if (timeLeft <= 5) {
            timeEl.classList.add("blink", "danger");
        }

        if (timeLeft <= 0) {
            clearInterval(timer);
            autoNext();
        }
    }, 1000);
}

// ---------- SAVE TIME ----------
function saveTime() {
    const now = Date.now();
    timeSpent[index] += Math.floor((now - questionStartTime) / 1000);
    questionStartTime = Date.now();
}

// ---------- AUTO NEXT ----------
function autoNext() {
    saveTime();

    if (index < questions.length - 1) {
        index++;
        load();
    } else {
        submitQuiz();
    }
}

// ================= LEFT NAV =================
questions.forEach((_, i) => {
    const d = document.createElement("div");
    d.className = "question-nav-item unanswered";
    d.innerText = "Q" + (i + 1);
    d.onclick = () => {
        saveTime();
        clearInterval(timer);
        index = i;
        load();
    };
    nav.appendChild(d);
});

// ================= LOAD QUESTION =================
function load() {
    clearInterval(timer);

    timeLeft = TIME_BY_DIFF[DIFFICULTY];
    timeEl.innerText = timeLeft;
    timeEl.classList.remove("blink", "danger");

    questionStartTime = Date.now();
    startTimer();

    const q = questions[index];
    qEl.innerText = q.q;
    oEl.innerHTML = "";
    warningEl.innerText = "";

    q.o.forEach((opt, i) => {
        const label = document.createElement("label");
        label.className = "option-card";

        const input = document.createElement("input");
        input.type = "radio";
        input.name = "ans";
        input.checked = answers[index] === i;

        input.onclick = () => {
            answers[index] = i;
            warningEl.innerText = "";
            updateNav();
        };

        label.appendChild(input);
        label.appendChild(document.createTextNode(opt));
        oEl.appendChild(label);
    });

    document.getElementById("question-counter").innerText =
        `Question ${index + 1} of ${questions.length}`;

    prevBtn.style.display = index === 0 ? "none" : "inline-block";
    nextBtn.style.display = index === questions.length - 1 ? "none" : "inline-block";
    submitBtn.style.display = index === questions.length - 1 ? "inline-block" : "none";

    updateNav();
}

// ================= UPDATE NAV =================
function updateNav() {
    document.querySelectorAll(".question-nav-item").forEach((el, i) => {
        el.classList.remove("active", "answered", "unanswered");
        if (i === index) el.classList.add("active");
        if (answers[i] !== null) el.classList.add("answered");
        else el.classList.add("unanswered");
    });
}

// ================= BUTTONS =================
nextBtn.onclick = () => {
    if (answers[index] === null) {
        warningEl.innerText = "⚠ Please select an option before continuing.";
        warningEl.style.color = "red";
        return;
    }

    saveTime();
    clearInterval(timer);
    index++;
    load();
};

prevBtn.onclick = () => {
    saveTime();
    clearInterval(timer);
    index--;
    load();
};

// ================= SUBMIT =================
const submitWarning = document.getElementById("submit-warning");

submitBtn.onclick = () => {
    clearInterval(timer);

    const missed = answers.filter(a => a === null).length;

    if (missed > 0) {
        submitWarning.style.display = "block";
        submitWarning.innerHTML = `
            ⚠ You missed <b>${missed}</b> question(s).<br>
            <button class="btn-danger" style="margin-top:8px;" onclick="forceSubmit()">
                Submit Anyway
            </button>
        `;
        return;
    }

    showResult();
};

function forceSubmit() {
    submitWarning.style.display = "none";
    showResult();
}


// ================= RESULTS =================
function showResult() {
    fetch("track_exam.php");

    let score = 0;
    answers.forEach((a, i) => {
        if (a !== null && questions[i].o[a] === questions[i].a) score++;
    });

    document.body.innerHTML = `
        <div class="results-page">
            <h2 style="text-align:center">Quiz Results</h2>

            <canvas id="accuracyChart" width="160" height="160"
                style="display:block;margin:0 auto;"></canvas>

            <canvas id="timeChart" width="600" height="280"
                style="display:block;margin:30px auto;"></canvas>

            <p class="score-summary" style="text-align:center">
                <b>Score:</b> ${score}/${questions.length}
            </p>

            <div id="details"></div>

            <div style="text-align:center;margin-top:30px;">
                <button class="btn-primary" onclick="window.location.href='index.php'">
                    Start New Quiz
                </button>
            </div>
        </div>
    `;

    // Accuracy Pie Chart
    new Chart(document.getElementById("accuracyChart"), {
        type: "pie",
        data: {
            labels: ["Correct", "Wrong"],
            datasets: [{
                data: [score, questions.length - score],
                backgroundColor: ["#4caf50", "#f44336"]
            }]
        },
        options: { responsive: false }
    });

    // Time Spent Bar Chart
    new Chart(document.getElementById("timeChart"), {
        type: "bar",
        data: {
            labels: timeSpent.map((_, i) => "Q" + (i + 1)),
            datasets: [{
                label: "Time Spent (seconds)",
                data: timeSpent,
                backgroundColor: "#1976d2"
            }]
        },
        options: {
            responsive: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: { display: true, text: "Seconds" }
                }
            }
        }
    });

    const d = document.getElementById("details");

    questions.forEach((q, i) => {
        const ok = answers[i] !== null && q.o[answers[i]] === q.a;
        d.innerHTML += `
            <div class="result-question ${ok ? "correct" : "wrong"}">
                <p><b>Q${i + 1}:</b> ${q.q}</p>
                <p>Your Answer: ${answers[i] !== null ? q.o[answers[i]] : "Not Answered"}</p>
                <p>Correct Answer: ${q.a}</p>
                <p><i>Time Spent: ${timeSpent[i]} seconds</i></p>
                <p style="color:${ok ? "green" : "red"}">
                    ${ok ? "✔ Correct" : "✖ Wrong"}
                </p>
                <p><i>${q.exp}</i></p>
            </div>
        `;
    });
}

// ================= INIT =================
load();
