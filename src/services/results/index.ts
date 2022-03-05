import { AnswersDTO, ResultDTO, ResultCreatedDTO, ResultUpdatedDTO } from '../../core/DTO/Results'
import { NewAnswers, updateAnswers } from './types'
import request, { SERVICE_ENDPOINT } from '../request'

export const RoleService = {
    get: {
        async answers(): Promise<AnswersDTO> {
            request.setAuthHeaders()
            const answers = await request.get<AnswersDTO>(
                SERVICE_ENDPOINT("answers")
            )

            return answers
        },
        async answersFromSurvey(surveyID: number): Promise<ResultDTO> {
            request.setAuthHeaders()
            const result = await request.get<ResultDTO>(
                SERVICE_ENDPOINT(`answers/${surveyID}`)
            )

            return result
        }
    },
    post: {
        async saveAnswers(answers: NewAnswers): Promise<ResultCreatedDTO> {
            request.setAuthHeaders()
            const response = await request.post<ResultCreatedDTO>(
                SERVICE_ENDPOINT("answers"),
                answers
            )

            return response
        },
        async updateAnswers(answers: updateAnswers): Promise<ResultUpdatedDTO> {
            request.setAuthHeaders()
            const response = await request.post<ResultUpdatedDTO>(
                SERVICE_ENDPOINT("answers"),
                answers
            )

            return response
        }
    }
}
