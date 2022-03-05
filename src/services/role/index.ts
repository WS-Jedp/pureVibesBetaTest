import { ChangeRoleDTO } from '../../core/DTO/Role'
import request, { SERVICE_ENDPOINT } from '../request'
import ServiceResponse from '../response'


export const RoleService = {
    get: {},
    post: {
        becomeTester: async (): Promise<ServiceResponse<ChangeRoleDTO | null>> => {
            request.setAuthHeaders()
            const roleState = await request.post<ChangeRoleDTO>(
                SERVICE_ENDPOINT("become/tester")
            ).then(roleState => new ServiceResponse<ChangeRoleDTO>({
                error: null,
                message: null,
                response: roleState,
                status: 200
            })).catch(statusError => new ServiceResponse<null>({
                error: true,
                message: "We sorry, you can't be a Tester user",
                response: null,
                status: statusError
            }))

            return roleState
        }
    }
}