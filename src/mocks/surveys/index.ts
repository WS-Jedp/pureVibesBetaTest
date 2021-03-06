import { SurveyDTO, SurveysDTO, SurveyStateObject } from '../../core/DTO/Survey'
import { questions } from '../questions'

export const SurveysMock: SurveysDTO = [
    {
        id: 1,
        name: 'Mock survey 1'
    },
    {
        id: 2,
        name: 'Mock survey 2'
    },
    {
        id: 3,
        name: 'Mock survey 3'
    },
]

export const IndividualSurveysMock: (SurveyDTO & SurveyStateObject)[] = SurveysMock.map(survey => ({
    ...survey,
    questions,
    answersTotal: 0,
    isComplete: false,
    questionTotal: questions.length,
    survey_id: survey.id,
}))