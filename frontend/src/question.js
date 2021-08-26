class Question {
    static quizQuestions = []
    

    constructor(question) {
        this.content = question.attributes.content
        this.id = question.attributes.id
        this.answers = question.attributes.answers
        this.questionIndex = (question.attributes.id) -1
        Question.quizQuestions.push(this)
    }

    static getQuestions() {
        fetch("http://localhost:3000/questions")
                .then(resp => resp.json())
                .then(questions => {
                    for (let question of questions.data) {
                        let newQuestion = new Question(question)
                    }
                    this.renderQuestions()
                    console.log(Question.quizQuestions)
                })
    }

    static renderQuestions() {
        for (let question of this.quizQuestions) {
            question.quizSlides()
            // console.log(question)
        }
    }



quizSlides() {

    let questionCounter = 0;

        question.innerHTML = Question.quizQuestions[questionCounter].content
        answerOne.innerHTML = Answer.answers[0].content
        answerTwo.innerHTML = Answer.answers[1].content
        answerThree.innerHTML = Answer.answers[2].content
        answerFour.innerHTML = Answer.answers[3].content

        
        Answer.checkAnswer();    
        
        next.addEventListener("click", (nextQuestion)); 

        submit.style.display = 'none'

    function nextQuestion() {
        answerOne.style.color = '';
        answerTwo.style.color = '';
        answerThree.style.color = '';
        answerFour.style.color = '';

        if (questionCounter < 4) {
        questionCounter++;
        question.innerHTML = Question.quizQuestions[questionCounter].content
        answerOne.innerHTML = Question.quizQuestions[questionCounter].answers[0].content
        answerTwo.innerHTML = Question.quizQuestions[questionCounter].answers[1].content
        answerThree.innerHTML = Question.quizQuestions[questionCounter].answers[2].content
        answerFour.innerHTML = Question.quizQuestions[questionCounter].answers[3].content

        answerOne.onclick = function() {
            if (Question.quizQuestions[questionCounter].answers[0].correct_answer == true) {
                answerOne.style.color = 'green'
            } else {
                answerOne.style.color = 'red'
            }
            console.log('clicked')
        }

        answerTwo.onclick = function() {
            if (Question.quizQuestions[questionCounter].answers[1].correct_answer == true) {
                answerTwo.style.color = 'green'
            } else {
                answerTwo.style.color = 'red'
            }
            console.log('clicked')
        }

        answerThree.onclick = function() {
            if (Question.quizQuestions[questionCounter].answers[2].correct_answer == true) {
                answerThree.style.color = 'green'
            } else {
                answerThree.style.color = 'red'
            }
            console.log('clicked')
        }

        answerFour.onclick = function() {
            if (Question.quizQuestions[questionCounter].answers[3].correct_answer == true) {
                answerFour.style.color = 'green'
            } else {
                answerFour.style.color = 'red'
            }
            console.log('clicked')
        }

        } 
        
        if (questionCounter >= 4) {
            next.remove();
           submit.style.display = 'inline'
        }
        

}

    
}
}
