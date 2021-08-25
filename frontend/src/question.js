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
    // if ${this.questionIndex} === 0 {
//   Question.quizQuestions.forEach(quiz) 
    //   function quiz(questionCounter) {
         
        // for (let index = 0; index<Question.quizQuestions.length; index++) {
        // index = 0;
        // while (questionCounter < Question.quizQuestions.length) {
        question.innerHTML = Question.quizQuestions[questionCounter].content
        answerOne.innerHTML = Question.quizQuestions[questionCounter].answers[0].content
        answerTwo.innerHTML = Question.quizQuestions[questionCounter].answers[1].content
        answerThree.innerHTML = Question.quizQuestions[questionCounter].answers[2].content
        answerFour.innerHTML = Question.quizQuestions[questionCounter].answers[3].content
        next.addEventListener("click", (nextQuestion)) 
        submit.style.display = 'none'
        
    // }

    function nextQuestion() {
        if (questionCounter < 4) {
        questionCounter++;
        question.innerHTML = Question.quizQuestions[questionCounter].content
        answerOne.innerHTML = Question.quizQuestions[questionCounter].answers[0].content
        answerTwo.innerHTML = Question.quizQuestions[questionCounter].answers[1].content
        answerThree.innerHTML = Question.quizQuestions[questionCounter].answers[2].content
        answerFour.innerHTML = Question.quizQuestions[questionCounter].answers[3].content
        } 
        
        if (questionCounter >= 4) {
            next.remove();
           submit.style.display = 'inline'
        }
        

           
        
    // }
}

        
  //     } else {
    //         // 
    //         // } 
    //     }

    
    
//         ++
    // })
    // event listener to go to next question

    // const question = document.getElementById('question')
    // const i=0;
    // const next = document.getElementById('next')
    // next.addEventListener("click", () => {
    //         question.innerHTML = question[i];
    //         i++
        // }
    // )

}
}
// function fetchQuestions() {




    //         let quiz = questions.data.map(question => {
    //             const quizQuestion = {
    //                 content: question.question
    //             };
    //         const choices = [ ...question.attributes.answers];
    //             choices.forEach((answer, index) => {
    //                 quizQuestion["answer" + (index+1)] = answer;
    //             });
                
    //         });
    
    // //         for (let question of questions.data) {
    // //             let quizQuestion = new Question(question)
    // // //             question.attributes.answers.forEach(answer => {
    // // //                 let quizAnswers = new Answer(answer)
    // // //                 quizQuestion.answers.push(quizAnswers)
    // // //             })
    // //         }
    //         return quiz;
    // });
    // startQuiz();
// }
