import { InvitationDTO } from '../../core/DTO/Invitation'
import { InvitationParameters } from './types'
import request, { SERVICE_ENDPOINT } from '../request'
import ServiceResponse from '../response'

export const InvitationServices = {
    get: {},
    post: {
        invitePerson: async (data:InvitationParameters): Promise<ServiceResponse<InvitationDTO | null>> => {
            request.setAuthHeaders()
            const invitationState = await request.post<InvitationDTO>(
                SERVICE_ENDPOINT(`invite/${data.authUser}`),
                {
                    email: data.email,
                    name: data.name,
                }
            ).then(invitationState => new ServiceResponse<InvitationDTO>({
                error: null,
                message: null,
                response: invitationState,
                status: 200
            })).catch(statusError => new ServiceResponse<null>({
                error: true,
                message: "We sorry, something went wrong and the invitation coulnd't be send, try later",
                response: null,
                status: statusError
            }))

            return invitationState
        }
    }
}
