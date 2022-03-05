import { ChangeRoleDTO } from '../../core/DTO/Role'
import request, { SERVICE_ENDPOINT } from '../request'


export const RoleService = {
    get: {},
    post: {
        becomeTester: async (): Promise<ChangeRoleDTO> => {
            request.setAuthHeaders()
            const roleState = await request.post<ChangeRoleDTO>(
                SERVICE_ENDPOINT("become/tester")
            )

            return roleState
        }
    }
}