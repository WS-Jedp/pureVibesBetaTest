type Result = {
    id: number
    answers: string
    survey_id: number
    uaser_id: number
}

type Answer = {
    answer: string | boolean
    question_id: number
    text?: string
}

type UserResultsDTO = {
    id: number
    answers: string
    survey_id: number
}

type ResultCreatedDTO = {
    created: boolean
    id: number
}

type ResultDTO = {
    id: number
    answers: Answer[]
    totalQuestions: number
    totalAnswers: number
    isComplete: boolean
    survey_id: number
}

type ResultUpdatedDTO = {
    id: number
    updated: boolean
}

type AnswerDTO = {
    id: number
    answers: Answer[]
    survey_id: number
}

type AnswerStateDTO = AnswerDTO & {
    totalQuestions: number
    totalAnswers: number
    isComplete: boolean
}

type AnswersDTO = AnswerDTO[]

export {
    Result,
    ResultDTO,
    UserResultsDTO,
    ResultCreatedDTO,
    ResultUpdatedDTO,
    Answer,
    AnswerDTO,
    AnswersDTO,
    AnswerStateDTO
}