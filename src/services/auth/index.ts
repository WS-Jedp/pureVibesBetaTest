import { AuthUserDTO, LogoutUserDTO } from "../../core/DTO/Auth"
import { UserDTO } from "../../core/DTO/User"
import request, { SERVICE_ENDPOINT } from "../request"

export const AuthServices = {
    get: {
        user: async (): Promise<UserDTO> => {
            request.setAuthHeaders()
            const authUser = await request.get<UserDTO>(SERVICE_ENDPOINT("user"))
            return authUser
        },
        csrf: async (): Promise<void> => {
            await request.getCsrfToken()
        }
    },
    post: {
        login: async (data: {
            email: string
            password: string
        }): Promise<AuthUserDTO> => {
            request.disableAuthHeaders()
            const auth = await request.post<AuthUserDTO>(
                SERVICE_ENDPOINT("login"),
                data
            )

            return auth
        },
        logout: async (): Promise<LogoutUserDTO> => {
            request.setAuthHeaders()
            const logout = await request.post<LogoutUserDTO>(
                SERVICE_ENDPOINT("logout")
            )

            return logout

        }
    },
}
