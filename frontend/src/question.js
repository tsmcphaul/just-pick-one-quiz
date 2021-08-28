class Question {
    static quizQuestions = []
    

    constructor(question) {
        this.content = question.attributes.content
        this.id = question.attributes.id
        this.answers = question.attributes.answers
        this.questionIndex = (question.attributes.id) -1
        questions.push(this)
    }

    static getQuestions() {
        fetch("http://localhost:3000/questions")
                .then(resp => resp.json())
                .then(questions => {
                    for (let question of questions.data) {
                        let newQuestion = new Question(question)
                    }
                    this.renderQuestions()
                    console.log(questions)
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

        answerOne.onclick = function() {
            if (questions[questionCounter].answers[0].correct_answer == true) {
                answerOne.style.color = 'green'
                score +=1
                disable()
            } else {
                answerOne.style.color = 'red'
                disable()
            }

            console.log('clicked')
        }

        answerTwo.onclick = function() {
            if (questions[questionCounter].answers[1].correct_answer == true) {
                answerTwo.style.color = 'green'
                score +=1
                disable()
            } else {
                answerTwo.style.color = 'red'
                disable()
            }
            console.log('clicked')
        }

        answerThree.onclick = function() {
            if (questions[questionCounter].answers[2].correct_answer == true) {
                answerThree.style.color = 'green'
                score +=1
                disable()
            } else {
                answerThree.style.color = 'red'
                disable()
            }
            console.log('clicked')
        }

        answerFour.onclick = function() {
            if (questions[questionCounter].answers[3].correct_answer == true) {
                answerFour.style.color = 'green'
                score +=1
                disable()
            } else {
                answerFour.style.color = 'red'
                disable()
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
