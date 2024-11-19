import { birdsData } from "../../assets/db/data.js";

export class QuizManager {
    constructor() {
        this.currentCategory = 0;
        this.currentBird = null;
    }

    startQuiz() {
    this.initQuestion();
    }

    initQuestion() {
        const categoryBrid = birdsData[this.currentCategory];
        const randomNuber = Math.floor(Math.random() * categoryBrid.length);
        this.currentBird = categoryBrid[randomNuber];

        console.log(this.currentBird);
        
    }
}