import { InvitationDTO } from '../../core/DTO/Invitation'
import { InvitationParameters } from './types'
import request, { SERVICE_ENDPOINT } from '../request'

export const InvitationServices = {
    get: {},
    post: {
        invitePerson: async (data:InvitationParameters): Promise<InvitationDTO> => {
            request.setAuthHeaders()
            const invitationState = await request.get<InvitationDTO>(
                SERVICE_ENDPOINT(`invite/${data.authUser}`)
            )

            return invitationState
        }
    }
}
