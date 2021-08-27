

const questionsURL = "http://localhost:3000/questions"
const answersURL = "http://localhost:3000/answers"
const answerOne = document.getElementById('answer-1');
const answerTwo = document.getElementById('answer-2');
const answerThree = document.getElementById('answer-3');
const answerFour = document.getElementById('answer-4');
const option = document.getElementsByClassName('choice');
const grade = document.getElementById('grade');
const question = document.getElementById('question')
const quizGrid = document.getElementById('quiz');
const next = document.getElementById('next')
const restart = document.getElementById('restart');
const submit = document.getElementById('submit');
let startButton = document.createElement("BUTTON");
let questionCounter = 0;
let answerChoices = [];
let ansIndex = 0
const questions = Question.quizQuestions;
const allAns = Answer.answers 
let score = 0;

function disable() {
    answerOne.disabled = true;
    answerTwo.disabled = true;
    answerThree.disabled = true;
    answerFour.disabled = true;
}

function enable() {
    answerOne.disabled = false;
    answerTwo.disabled = false;
    answerThree.disabled = false;
    answerFour.disabled = false;        
}


welcome = () => {

    
    startButton.innerHTML = "Start";
    document.body.appendChild(startButton);
    startButton.addEventListener("click", (startQuiz))
    // startQuiz();
}


 startQuiz = () => {
     
    // startPage.style.display = 'none'
    startButton.style.display = 'none'
    // startButton.classList.remove("BUTTON");
    Question.getQuestions();
    Answer.getAnswers();
    Grade.showScores();
    
    
//     score
//     //render start button
//     //render answers
//     //show grade
//     //submit and next question
//     //show final grade
}
welcome();
