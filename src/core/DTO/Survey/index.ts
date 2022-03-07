import { Question } from '../Questions'

type Survey = {
    id: number
    name: string
    questions: Question[]
}

type SurveyStateObject = {
    survey_id: number
    name: string
    questionTotal: number
    answersTotal: number
    isComplete: boolean
}


type SurveyDTO = {
    id: number
    name: string
    questions: Question[]
}

type SurveysDTO = {
    id: number
    name: string
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