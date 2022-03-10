type NewAnswers = {
    survey_id: number
    answers: {
        question_id: number
        answer: any
        text?: string
    }[]
}

type updateAnswers = {
    question_id: number
    answer: any
    text?: string
}[]

export {
    NewAnswers,
    updateAnswers
}