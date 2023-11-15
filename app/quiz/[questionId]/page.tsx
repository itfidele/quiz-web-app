

interface QuestionQuizProps {
    questionId: string
}

export default function QuestionQuiz({params}: {params: QuestionQuizProps} ){
    return <>
        Question Quiz
        {params.questionId}
    </>
}