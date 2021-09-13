class Grade {
    constructor(score) {
        this.score = score;
    }
static grades = [];

static getGrade() {
    fetch("http://localhost:3000/grades")
            .then(resp => resp.json())
            .then(grades => {
                for (let grade of grades.data) {
                    let newGrade = new Grade(grade)
                }
                console.log(grades)
            })
}    

static showScores() {
    submit.onclick = function() {
        console.log(score);
        submit.style.display = 'none'
        quizGrid.innerHTML = "Your score is" + " " + Grade.grades.length + "!"
        restart.style.display = 'block'
    }   
}

}

