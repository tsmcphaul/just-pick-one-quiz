// addQ.addEventListener("click", newQuestion());

function addNewQuestion() {

    function newQuestion() {
        
        addQ.onclick = function() {
            console.log("clicked")
            addQuestion.style.display = 'block';
            addQuestion.addEventListener('submit', Question.addQuestion());
            // submit.onclick = newAnswer();
        }
    
    }

    function newAnswer() {
        addAnswers.style.display = 'block';
        addAnswers.addEventListener('submit', Answer.addAnswers());
        // submit.onclick = function() {
        //     console.log("clicked")
        //     addAnswerOne.style.display = 'none';
        //     addAnswerTwo.style.display = 'block';
        //     addAnswerTwo.addEventListener('submit', Answer.addAnswers());
        //     submit.onclick = function() {
        //         console.log("clicked")
        //         addAnswerTwo.style.display = 'none';
        //         addAnswerThree.style.display = 'block';
        //         addAnswerThree.addEventListener('submit', Answer.addAnswers());
        //         submit.onclick = function() {
        //             console.log("clicked")
        //             addAnswerThree.style.display = 'none';
        //             addAnswerFour.style.display = 'block';
        //             addAnswerFour.addEventListener('submit', Answer.addAnswers());
        //             submit.onclick = function(){
        //                 addAnswerFour.style.display = 'none';
        //             }
        //         }
        //     }
        // }
        addAnswers.style.display = 'none';
    }
    newQuestion();
    // newAnswer();
}

addNewQuestion();