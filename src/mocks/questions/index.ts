import { Question, QUESTION_TYPE } from '../../core/DTO/Questions'

export const questions: Question[] = [
    {
        id: 1,
        question: "How are you today?",
        type: QUESTION_TYPE.RATE
    },
    {
        id: 2,
        question: "Tell me something about you",
        type: QUESTION_TYPE.TEXT
    },
    {
        id: 3,
        question: "Are you going to change the world?",
        type: QUESTION_TYPE.BOOLEAN
    },
]
