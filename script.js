var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".time-Remaining");

var timer;
var timeRemaining;
var correctCount = 0;
var incorrectCount = 0;



function startQuiz () {
    timeRemaining = 100;
    startTimer()
}

function startTimer() {
    timer = setInterval(function() {
        timeRemaining--;
        timerElement.textContent = timeRemaining;
        if (timeRemaining === 0)
            clearInterval(timer);
    }, 1000);
}

startButton.addEventListener("click", startQuiz);