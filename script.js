// Questions and choices array
var questionSet = [
    { 
        question: "Arrays in JavaScript can be used to store ___",
        choices: ["number and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    }, 
    { 
        question : "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    }, 
    { 
        question : "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "for loops", "terminal / bash", "console log"],
        answer: "console log"
    }, 
]

var questionDisplay = document.getElementById('questContainer')


// Declare variables for Start Quiz Button
var startQuizBtn = document.getElementById('startBtn');

// Add event listener when quiz started
startQuizBtn.addEventListener('click', startQuiz);

// Hide the start page on click and unhide the question container
function startQuiz() {
    var startTime = 75;
    var countdown = setInterval(function() {
        // decrement startTime
        startTime--;
        // display the time countdown on the page and stop when eq 0
        document.querySelector(".Timer").textContent = "Timer: " + startTime;
        if (startTime === 0) {
            clearInterval(countdown);
        }
    }, 1000);
    // hide start section and unhide the question set
    document.getElementById('start').style.display = "none";
    document.getElementById('questContainer').style.display = "block";
    renderQuestion()
}

// Display question and answers
function renderQuestion() {
    // load questions randomly in question div
    for(var i=0; i<questionSet.length; i++) {
        var questionSelect = questionSet[i].question
        var choicesSelect = questionSet[i].choices
        questionDisplay.textContent = questionSelect
        
    }
    // load choices associated with loaded question in choices div
    choicesSelect.forEach(function (item) {
        var newItem = document.createElement('button');
        newItem.innerHTML = item;
        questionDisplay.appendChild(newItem);
        // Add click event listener callback the next question function
        newItem.setAttribute('id', 'answerBtn')
        // .addEventListener('click', nextQuestion);
        // var buttons = document.getElementById('answerBtn');
        newItem.addEventListener('click', nextQuestion);

    })
 
}

function nextQuestion(e) {
    //verify answer and incrment to next question
    console.log(e.target)
}


