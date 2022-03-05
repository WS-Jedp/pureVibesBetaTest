import { SurveysDTO, SurveyDTO, BetaTestStateDTO, SurveyStateDTO, IsBetaTestDoneForUser } from '../../core/DTO/Survey'
import request, { SERVICE_ENDPOINT } from '../request'
import ServiceResponse from '../response'

export const RoleService = {
    get: {
        async surveys(): Promise<ServiceResponse<SurveysDTO | null>> {
            request.setAuthHeaders()
            const surveys = await request.get<SurveysDTO>(
                SERVICE_ENDPOINT("surveys")
            ).then(surveys => new ServiceResponse<SurveysDTO>({
                error: null,
                message: null,
                response: surveys,
                status: 200
            })).catch(statusError => new ServiceResponse<null>({
                error: true,
                message: "We sorry, the surveys couldn't be retrieve, try later",
                response: null,
                status: statusError
            }))

            return surveys
        },
        async survey(id: number): Promise<ServiceResponse<SurveyDTO | null>> {
            request.setAuthHeaders()
            const survey = request.get<SurveyDTO>(
                SERVICE_ENDPOINT(`surveys/${id}`)
            ).then(survey => new ServiceResponse<SurveyDTO>({
                error: null,
                message: null,
                response: survey,
                status: 200
            })).catch(statusError => new ServiceResponse<null>({
                error: true,
                message: "We sorry, we couldn't retrieve the survey",
                response: null,
                status: statusError
            }))

            return survey
        },
        async surveysState(): Promise<ServiceResponse<BetaTestStateDTO | null>> {
            request.setAuthHeaders()
            const surveysState = request.get<BetaTestStateDTO>(
                SERVICE_ENDPOINT("surveys/state/all")
            ).then(surveysState => new ServiceResponse<BetaTestStateDTO>({
                error: null,
                message: null,
                response: surveysState,
                status: 200
            })).catch(statusError => new ServiceResponse<null>({
                error: true,
                message: "We sorry, we couldn't retrieve the state of the surveys",
                response: null,
                status: statusError
            }))

            return surveysState
        },
        async surveyState(id: number): Promise<ServiceResponse<SurveyStateDTO | null>> {
            request.setAuthHeaders()
            const surveyState = await request.get<SurveyStateDTO>(
                SERVICE_ENDPOINT(`surveys/state/${id}`)
            ).then(surveyState => new ServiceResponse<SurveyStateDTO>({
                error: null,
                message: null,
                response: surveyState,
                status: 200
            })).catch(statusError => new ServiceResponse<null>({
                error: true,
                message: "We sorry, we couldn't retrieve the state of the survey",
                response: null,
                status: statusError
            }))

            return surveyState
        },
        async userBetaTestState(id: number): Promise<ServiceResponse<IsBetaTestDoneForUser | null>> {
            request.setAuthHeaders()
            const betaTestState = await request.get<IsBetaTestDoneForUser>(
                SERVICE_ENDPOINT(`surveys/state/user/${id}`)
            ).then(betaTestState => new ServiceResponse<IsBetaTestDoneForUser>({
                error: null,
                message: null,
                response: betaTestState,
                status: 200
            })).catch(statusError => new ServiceResponse<null>({
                error: true,
                message: "We sorry, we couldn't retrieve the state of the beta test",
                response: null,
                status: statusError
            }))

            return betaTestState
        }
    },
    post: {}
}
