import { Survey } from '../../core/DTO/Survey'
export type CurrentSurvey = Survey & {
    totalQuestions: number
    currentQuestion: number
    totalOfImages: number
}