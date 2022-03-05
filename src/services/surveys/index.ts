import { SurveysDTO, SurveyDTO, BetaTestStateDTO, SurveyStateDTO, IsBetaTestDoneForUser } from '../../core/DTO/Survey'
import request, { SERVICE_ENDPOINT } from '../request'

export const RoleService = {
    get: {
        async surveys(): Promise<SurveysDTO> {
            request.setAuthHeaders()
            const surveys = await request.get<SurveysDTO>(
                SERVICE_ENDPOINT("surveys")
            )

            return surveys
        },
        async survey(id: number): Promise<SurveyDTO> {
            request.setAuthHeaders()
            const survey = request.get<SurveyDTO>(
                SERVICE_ENDPOINT(`surveys/${id}`)
            )

            return survey
        },
        async surveysState(): Promise<BetaTestStateDTO> {
            request.setAuthHeaders()
            const surveysState = request.get<BetaTestStateDTO>(
                SERVICE_ENDPOINT("surveys/state/all")
            )

            return surveysState
        },
        async surveyState(id: number): Promise<SurveyStateDTO> {
            request.setAuthHeaders()
            const surveyState = await request.get<SurveyStateDTO>(
                SERVICE_ENDPOINT(`surveys/state/${id}`)
            )
            return surveyState
        },
        async userBetaTestState(id: number): Promise<IsBetaTestDoneForUser> {
            request.setAuthHeaders()
            const surveyState = await request.get<IsBetaTestDoneForUser>(
                SERVICE_ENDPOINT(`surveys/state/user/${id}`)
            )
            return surveyState
        }
    },
    post: {}
}
