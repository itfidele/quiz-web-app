
export interface Question{
    category: string;
    id:string,
    correctAnswer: string;
    answers: string[];
    question: string;
    tags: string[];
    difficulty: string;
    type: string;
}


export class Quiz{
    public questions:Question[];

    constructor(questions:Question[]){
        this.questions = questions;
    }

    get length(){
        return this.questions.length;
    }

    getQuestion(index:number):Question{
        return this.questions[index];
    }

    
    isCorrect(id:string, answer:string):boolean{
        const question = this.questions.find(question => question.id === id);
        return question?.correctAnswer === answer;
    }

    
    getQuestions(){
        return this.questions;
    }


    getQuestionsByCategory(category:string){
        return this.questions.filter(question => question.category === category);
    }

    getQuestionsByDifficulty(difficulty:string){
        return this.questions.filter(question => question.difficulty === difficulty);
    }

    getQuestionsByType(type:string){
        return this.questions.filter(question => question.type === type);
    }

    getQuestionsByTag(tag:string){
        return this.questions.filter(question => question.tags.includes(tag));
    }

    getQuestionsByTags(tags:string[]){
        return this.questions.filter(question => question.tags.some(tag => tags.includes(tag)));
    }

}