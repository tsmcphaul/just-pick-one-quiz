

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

// welcome = () => {
//     startPage = document.getElementById('quiz');
//     startPage.innerHTML = "Let's see what you got!"
    
//     startButton.innerHTML = "Start";
//     document.body.appendChild(startButton);
//     startButton.addEventListener("click", startQuiz)
// }


 startQuiz = () => {

    Question.getQuestions();
    Answer.getAnswers();
    
    
//     score
//     //render start button
//     //render answers
//     //show grade
//     //submit and next question
//     //show final grade
}
// welcome();
startQuiz();