

const questionsURL = "http://localhost:3000/questions"
const answersURL = "http://localhost:3000/answers"
const answerOne = document.getElementById('answer-1');
const answerTwo = document.getElementById('answer-2');
const answerThree = document.getElementById('answer-3');
const answerFour = document.getElementById('answer-4');
const options = Array.from(document.getElementsByClassName('choice'));
const grade = document.getElementById('grade');
const question = document.getElementById('question')
const quizGrid = Array.from(document.getElementById('quiz'));
const next = document.getElementById('next')
const restart = document.getElementById('restart');
const submit = document.getElementById('submit');
let questionCounter = 0;



 startQuiz = () => {
    Question.getQuestions()
    
//     questionCounter
//     score
//     //render start button
//     // fetchQuestions();
    // remainingQuestions = [...questions]
//     //render answers
//     //show grade
//     //submit and next question
//     //show final grade
}

startQuiz();