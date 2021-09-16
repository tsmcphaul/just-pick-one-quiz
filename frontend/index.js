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
const addQuestion = document.getElementById('add-question');
const addAnswers = document.getElementById('answers-form');
const addQ = document.getElementById('new-question');
const content = document.getElementById('content')
const correctAnswer = document.getElementById('correct_answer');
const addAnswerOne = document.getElementById('answer1');
const addAnswerTwo = document.getElementById('answer2');
const addAnswerThree = document.getElementById('answer3');
const addAnswerFour = document.getElementById('answer4');


let startButton = document.getElementById("start");
let ansButtons = document.getElementById('buttons');

let questionCounter = 0;
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
    startButton.innerHTML = "START";
    document.body.appendChild(startButton);
    submit.style.display = 'none'
    restart.style.display = 'none'
    next.style.display = 'none'
    ansButtons.style.display = 'none';
    addQuestion.style.display = 'none';
    addAnswers.style.display = 'none';
    addQ.style.display = 'none';
    startButton.addEventListener("click", (startQuiz))
}

 startQuiz = () => {
    startButton.style.display = 'none'
    Question.getQuestions();
    Answer.getAnswers();
    Grade.getGrade();
    Grade.showScores();
}

welcome();
