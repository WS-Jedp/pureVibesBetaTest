import { Question } from '../Questions'

type Survey = {
    id: number
    name: string
    questions: Question[]
}

type SurveyStateObject = {
    survey_id: number
    name: string
    questionsTotal: number
    answersTotal: number
    isComplete: boolean
}


type SurveyDTO = {
    id: number
    name: string
    questions: Question[]
    totalOfImages: number
}

type SurveysDTO = {
    id: number
    name: string
    questionsTotal: number
    answersTotal?: number
}[]

type SurveyStateDTO = {
    results: string,
    questionsTotal: number,
    isComplete: boolean
}

type BetaTestStateDTO = {
    surveysState: SurveyStateObject[]
    isBetaTestDone: boolean
}

type IsBetaTestDoneForUser = {
    isBetaTestDone: boolean
}

export {
    Survey,
    SurveyDTO,
    SurveysDTO,
    SurveyStateObject,
    SurveyStateDTO,
    BetaTestStateDTO,
    IsBetaTestDoneForUser
}