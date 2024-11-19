import { EventHanderler } from "./src/components/EventHandler.js";
import { QuizManager } from "./src/components/QuizManager.js";


const quizManager = new QuizManager();
const eventHanderler = new EventHanderler(quizManager);
eventHanderler.init();