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
    },     {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    { 
        question : "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "for loops", "terminal", "console log"],
        answer: "console log"
    }, 
]

var questionDisplay = document.getElementById('questContainer')
var indexQuestion = 0
var score = 0
var startTime = 75;
var submitBtn = document.querySelector("#submit-btn");
// Declare variables for Start Quiz Button
var startQuizBtn = document.getElementById('startBtn');

// Add event listener when quiz started
startQuizBtn.addEventListener('click', startQuiz);

// Hide the start page on click and unhide the question container
function startQuiz() {
    
    var countdown = setInterval(function() {
        // decrement startTime
        startTime--;
        // display the time countdown on the page and stop when eq 0
        document.querySelector(".Timer").textContent = "Timer: " + startTime;
        if (startTime === 0) {
            clearInterval(countdown);
        }

        if(startTime <= 0){
            endGame()
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
    var questionSelect = questionSet[indexQuestion].question
    var choicesSelect = questionSet[indexQuestion].choices
    questionDisplay.textContent = questionSelect
        // console.log(answerSelect)
    
    // load choices associated with loaded question in choices div
    choicesSelect.forEach(function (item) {
        var newItem = document.createElement('button');
        newItem.innerHTML = item;
        questionDisplay.appendChild(newItem);
        // Add attribute to new button elements
        newItem.setAttribute('id', 'answerBtn')
        // .addEventListener('click', nextQuestion);
        newItem.addEventListener('click', (verifyAnswer)); 
    
    })
    function verifyAnswer(e) {
        // validate right answer
        // console.log(indexQuestion)
        // console.log(e.target.textContent)
        if(e.target.textContent === questionSet[indexQuestion].answer){
        console.log('pass');
        console.log('correct answer is this')
        
        } else {
           console.log('not pass'); 
           startTime -= 10; 
        }
        
        if (indexQuestion<questionSet.length- 1) {
            indexQuestion++;

            renderQuestion();
        } else {
            endGame();
        }
    }   
}

// function hide questions and timer divs and display form.
function endGame(){
    document.getElementById('questContainer').style.display = "none";
    document.getElementById('inputForm').style.display = "block";
    document.querySelector(".Timer").style.display = "none"
    score = startTime;
    // console.log(score);
}


function submitButton(e){  
    // set variables for 
    let scores = localStorage.getItem("scores");
    let init = document.getElementById("initials").value;
    // score and initials into local storage
    if(init === null) {
        alert('Add initials')
    } else {
        localStorage.setItem('scores', score);
        localStorage.setItem('Initials', init);
    }

    e.preventDefault()
}


submitBtn.addEventListener('click', submitButton);

//redirects to highscores.html
submitBtn.onclick = function () {
    location.href = "./highscore.html";
};





