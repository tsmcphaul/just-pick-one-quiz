class Question {

    constructor(question) {
        this.content = question.attributes.content
        this.id = question.attributes.id
        this.answers = question.attributes.answers
        this.questionIndex = (question.attributes.id) -1
        questions.push(this)
    }
    static quizQuestions = []

    static getQuestions() {
        fetch("http://localhost:3000/questions")
                .then(resp => resp.json())
                .then(questions => {
                    for (let question of questions.data) {
                        let newQuestion = new Question(question)
                    }
                    console.log(questions)
                    this.renderQuestions()
                })
    }

    static renderQuestions() {
        for (let question of questions) {
            question.quizSlides()
        }
    }


quizSlides() {

    let questionCounter = 0;
    ansIndex = 0

    question.innerHTML = questions[questionCounter].content
    answerOne.innerHTML = allAns[0].content
    answerTwo.innerHTML = allAns[1].content
    answerThree.innerHTML = allAns[2].content
    answerFour.innerHTML = allAns[3].content


    Answer.checkAnswer();    
    
    next.addEventListener("click", (nextQuestion)); 
    ansButtons.style.display = 'inline';
    next.style.display = 'inline'
    submit.style.display = 'none'

    function nextQuestion() {
        answerOne.style.color = '';
        answerTwo.style.color = '';
        answerThree.style.color = '';
        answerFour.style.color = '';
        enable();
        
        
        if (questionCounter < 4) {
        questionCounter++;
        
        question.innerHTML = questions[questionCounter].content
        answerOne.innerHTML = questions[questionCounter].answers[0].content
        answerTwo.innerHTML = questions[questionCounter].answers[1].content
        answerThree.innerHTML = questions[questionCounter].answers[2].content
        answerFour.innerHTML = questions[questionCounter].answers[3].content
        
        }
        
        answerOne.onclick = function() {
            if (questions[questionCounter].answers[0].correct_answer == true) {
                answerOne.style.color = 'green'
                score+=1
                Grade.grades.push(score)
                disable()
            } else {
                answerOne.style.color = 'red'
                disable()
            }
        }

        answerTwo.onclick = function() {
            if (questions[questionCounter].answers[1].correct_answer == true) {
                answerTwo.style.color = 'green'
                score+=1
                Grade.grades.push(score)
                disable()
            } else {
                answerTwo.style.color = 'red'
                disable()
            }
        }

        answerThree.onclick = function() {
            if (questions[questionCounter].answers[2].correct_answer == true) {
                answerThree.style.color = 'green'
                score+=1
                Grade.grades.push(score)
                disable()
            } else {
                answerThree.style.color = 'red'
                disable()
            }
        }

        answerFour.onclick = function() {
            if (questions[questionCounter].answers[3].correct_answer == true) {
                answerFour.style.color = 'green'
                score+=1
                Grade.grades.push(score)
                disable()
            } else {
                answerFour.style.color = 'red'
                disable()
            }
        
        } 
        
        if (questionCounter >= 4) {
            next.remove();
           submit.style.display = 'inline'
        }
        
        
}

    
}

static addQuestion() {
    const formData = {
        content: content.value
        // answers: [{content: addAnswerOne.value, correct_answer: correctAnswer.value, question_id: Question.quizQuestions[Question.quizQuestions.length-1].id}, {content: addAnswerTwo.value, correct_answer: correctAnswer.value, question_id: Question.quizQuestions[Question.quizQuestions.length-1].id},{content: addAnswerThree.value, correct_answer: correctAnswer.value, question_id: Question.quizQuestions[Question.quizQuestions.length-1].id},{content: addAnswerFour.value, correct_answer: correctAnswer.value, question_id: Question.quizQuestions[Question.quizQuestions.length-1].id}]
    };
    const configObj = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }
    fetch("http://localhost:3000/questions", configObj)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let newAddedQuestion = new Question(question)
            questions.push(newAddedQuestion)
        })
}

}

// fetch("http://localhost:3000/questions")
//                 .then((resp) => {
//                     if (!resp.ok) {
//                         console.log('error')
//                     }
//                     else {
//                         resp.json()
//                 .then(questions => {
//                     for (let question of questions.data) {
//                         let newQuestion = new Question(question)
//                     }
//                     this.renderQuestions()
                
//                     });
//                 }
//             })
//                 .catch((err) => {
//                     console.log('There is an error present.');
//                     console.log(err);
//                 });
//             }