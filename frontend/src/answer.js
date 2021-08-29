class Answer {

    static answers = []

    constructor(answer) {
        this.content = answer.content;
        this.correct_answer = answer.correct_answer;
        this.question_id = answer.question_id
        Answer.answers.push(this)
        
    }
    

    static getAnswers() {
        fetch("http://localhost:3000/answers")
                .then(resp => resp.json())
                .then(answers => {
                    for (let answer of answers) {
                        let newAnswer = new Answer(answer)
                    }
                })
    }

  static checkAnswer() {

    answerOne.onclick = function() {
        if (allAns[0].correct_answer == true) {
            answerOne.style.color = 'green'
            score +=1
            disable()
        } else {
            answerOne.style.color = 'red'
            disable()
        }
        
    }

    answerTwo.onclick = function() {
        if (allAns[1].correct_answer == true) {
            answerTwo.style.color = 'green'
            score +=1
            disable()
        } else {
            answerTwo.style.color = 'red'
            disable()
        }
    }

    answerThree.onclick = function() {
        if (allAns[2].correct_answer == true) {
            answerThree.style.color = 'green'
            score +=1
            disable()
        } else {
            answerThree.style.color = 'red'
            disable()
        }
    }

    answerFour.onclick = function() {
        if (allAns[3].correct_answer == true) {
            answerFour.style.color = 'green'
            score +=1
            disable()
        } else {
            answerFour.style.color = 'red'
            disable()
        }
    }

  }
}
    //   if (allAns[ansIndex].correct_answer === false) {
    //       console.log('hello');
    //     //   if(Answer.answers[0].correct_answer === false) {
    //     answerOne.style.color = 'red';
    //     } 
    //     else {
    //         answerOne.style.color = 'green';
    //       }
    //      ansIndex++

    //     if (allAns[ansIndex].correct_answer === false) {
    //       answerTwo.style.color = 'red';
    //       } else {
    //         answerTwo.style.color = 'green';
    //       }
    //       ansIndex++
    //       if (allAns[ansIndex].correct_answer === false) {
    //         answerThree.style.color = 'red';
    //         } else {
    //           answerThree.style.color = 'green';
    //         }
    //         ansIndex++
    //         if (allAns[ansIndex].correct_answer === false) {
    //             answerFour.style.color = 'red';
    //             } else {
    //               answerFour.style.color = 'green';
    //             }
    //             ansIndex++
    //             if (allAns[ansIndex].correct_answer === false) {
    //                 answerFour.style.color = 'red';
    //                 } else {
    //                   answerFour.style.color = 'green';
    //                 }

        //   if(Answer.answers[1].correct_answer === false) {
        //     answerTwo.style.color = 'red';
        // } else {
        //   answerTwo.style.color = 'green';
        // }

        // if(Answer.answers[2].correct_answer === false) {
        //     answerThree.style.color = 'red';
        // } else {
        //   answerThree.style.color = 'green';
        // }

        // if(Answer.answers[3].correct_answer === false) {
        //     answerFour.style.color = 'red';
        // } else {
        //   answerFour.style.color = 'green';
        // }
    //   }
    
