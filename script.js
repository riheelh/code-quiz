// Declare variables for Start Quiz Button
var startQuizBtn = document.getElementById('startBtn');


// Add event listener when quiz started
startQuizBtn.addEventListener('click', startQuiz);

// Hide the start page on click and unhide the question container
function startQuiz() {
    document.getElementById('start').style.display = "none";
    document.getElementById('choice-question').style.display = "block";
}

function NextQuestion () {

}

const questionSelect = [
    { 
        question: "Arrays in JavaScript can be used to store ___",
        choices: ["1. number and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        answer: 4
    }, 
    { 
        question : "Arrays in JavaScript can be used to store ___",
        choices: ["1. number and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        answer: 2
    }, 
    { 
        question : "Arrays in JavaScript can be used to store ___",
        choices: ["1. number and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        answer: 2
    }, 
]