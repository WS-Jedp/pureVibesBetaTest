export enum QUESTION_TYPE {
    BOOLEAN = 'BOOLEAN',
    RATE = 'RATE',
    TEXT = 'TEXT'
}

export type Question = {
    id: number
    question: string
    type: QUESTION_TYPE
}