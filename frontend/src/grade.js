class Grade {
    constructor(score) {
        this.score = score;
    }





static showScores() {
    // submit.addEventListener("click", (showScores))
    submit.onclick = function() {
        console.log(score);
        submit.style.display = 'none'
        // endPage = document.getElementById('quiz');
        quizGrid.innerHTML = "Your score is" + " " + score + "!"
        restart.style.display = 'block'
    }


    
}

    
}

