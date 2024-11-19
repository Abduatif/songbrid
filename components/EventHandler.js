export class EventHanderler {
    constructor(quizManager) {
        this.quizManager = quizManager;
    }

    init(){
        const startQuiz = document.querySelector('.start-button')
        const quizPage = document.querySelector('.quiz-page')
        const startPage = document.querySelector('.start-page')

        startQuiz.addEventListener('click', () =>{
            startPage.classList.remove('active');
            quizPage.classList.add('active');
            this.quizManager.startQuiz();
        })
    }
}