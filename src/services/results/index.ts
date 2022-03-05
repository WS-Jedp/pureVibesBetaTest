import { AnswersDTO, ResultDTO, ResultCreatedDTO, ResultUpdatedDTO } from '../../core/DTO/Results'
import { NewAnswers, updateAnswers } from './types'
import request, { SERVICE_ENDPOINT } from '../request'
import ServiceResponse from '../response'

export const RoleService = {
    get: {
        async answers(): Promise<ServiceResponse<AnswersDTO | null>> {
            request.setAuthHeaders()
            const answers = await request.get<AnswersDTO>(
                SERVICE_ENDPOINT("answers")
            ).then(answers => new ServiceResponse<AnswersDTO>({
                error: null,
                message: null,
                response: answers,
                status: 200
            })).catch(statusError => new ServiceResponse<null>({
                error: true,
                message: "We sorry, the answers couldn't be saved, try later",
                response: null,
                status: statusError
            }))

            return answers
        },
        async answersFromSurvey(surveyID: number): Promise<ServiceResponse<ResultDTO | null>> {
            request.setAuthHeaders()
            const result = await request.get<ResultDTO>(
                SERVICE_ENDPOINT(`answers/${surveyID}`)
            ).then(result => new ServiceResponse<ResultDTO>({
                error: null,
                message: null,
                response: result,
                status: 200
            })).catch(statusError => new ServiceResponse<null>({
                error: true,
                message: "The answers couldn't be retrieved, try later",
                response: null,
                status: statusError
            }))

            return result
        }
    },
    post: {
        async saveAnswers(answers: NewAnswers): Promise<ServiceResponse<ResultCreatedDTO | null>> {
            request.setAuthHeaders()
            const response = await request.post<ResultCreatedDTO>(
                SERVICE_ENDPOINT("answers"),
                answers
            ).then(response => new ServiceResponse<ResultCreatedDTO>({
                error: null,
                message: null,
                response: response,
                status: 201
            })).catch(statusError => new ServiceResponse<null>({
                error: true,
                message: "We sorry, the ansers couldn't be saved, try later",
                response: null,
                status: statusError
            }))

            return response
        },
        async updateAnswers(answers: updateAnswers): Promise<ServiceResponse<ResultUpdatedDTO | null>> {
            request.setAuthHeaders()
            const response = await request.post<ResultUpdatedDTO>(
                SERVICE_ENDPOINT("answers"),
                answers
            ).then(response => new ServiceResponse<ResultUpdatedDTO>({
                error: null,
                message: null,
                response: response,
                status: 201
            })).catch(statusError => new ServiceResponse<null>({
                error: true,
                message: "We sorry, the ansers couldn't be updated, try later",
                response: null,
                status: statusError
            }))

            return response
        }
    }
}
