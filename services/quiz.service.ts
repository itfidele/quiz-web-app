import { Question, Quiz } from "@/types/question";




export default async function getQuiz() :Promise<Question[]> {
    const response = await fetch('https://the-trivia-api.com/v2/questions');
    const data = await response.json();
    const questions = data.map((question:any): Question => {
        return {
            category:question.category,
            id:question.category,
            correctAnswer: question.correctAnswer,
            answers: [...question.incorrectAnswers, question.correctAnswer],
            question: question.question.text,
            tags: question.tags,
            difficulty: question.difficulty,
            type: question.type
        }
    });
    
    return questions;
}