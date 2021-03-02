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
var indexQuestion = 0
var score = 0
var startTime = 75;
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
        console.log(indexQuestion)
        console.log(e.target.textContent)
        if(e.target.textContent === questionSet[indexQuestion].answer){
                console.log('pass');
                
        } else {console.log('not pass'); 
           startTime -= 10;
        }
        
        if (indexQuestion<3) {
            indexQuestion++;
            renderQuestion();
        } else {
            
            console.log("Done all");
            // Add end of game and swich to HighScore page
        }

    }
    
}



