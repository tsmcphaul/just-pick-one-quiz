class Answer {
    constructor(answer) {
        this.content = answer.content;
        this.correct_answer = answer.correct_answer;
        this.question_id = answer.question_id
        
        
    }
    static answers = []

   showAnswer() {
    answerOne.addEventListener("click", (checkAnswer))
    answerTwo.addEventListener("click", (checkAnswer))
    answerThree.addEventListener("click", (checkAnswer))
    answerFour.addEventListener("click", (checkAnswer))
    console.log(Question.quizQuestions[2].answers[0].correct_answer);
  

     function checkAnswer() {
         
      console.log('hello') 
    }

}
}
