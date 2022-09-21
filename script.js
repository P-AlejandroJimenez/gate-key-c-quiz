var highscoreButton = document.querySelector(".highscores");
var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".time-Remaining");
var question = document.querrySelector
 
var timer;
var timeRemaining;
var questionCount = 0;
var correctCount = 0;
var incorrectCount = 0;


function startQuiz () {
    timeRemaining = 60;
    startTimer();
    queQuestion ();
}

function startTimer() {
    timer = setInterval(function() {
        timeRemaining--;
        timerElement.textContent = ` Seconds Remaining:${ timeRemaining}`;
        if (timeRemaining === 0)
            clearInterval(timer);
    }, 1000);
}

function queQuestion ()  {

}

function answerSelected () {

}
//saveScoreButton.addEventListener("click", function (event) {
    //section 22 for the rest on local storage
//}


startButton.addEventListener("click", startQuiz);

