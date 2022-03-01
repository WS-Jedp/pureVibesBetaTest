import { AuthUserDTO, LogoutUserDTO } from "../../core/DTO/Auth"
import { UserDTO } from "../../core/DTO/User"
import Service from "../Service"

const SERVICE_ENDPOINT = (endpoint: string) => `/api/${endpoint}`

export const AuthServices = {
    get: {
        user: async (): Promise<UserDTO> => {
            const service = new Service({ withAuth: true })
            const authUser = await service.get<UserDTO>(SERVICE_ENDPOINT("user"))
            return authUser
        },
        csrf: async (): Promise<void> => {
            const service = new Service({ withAuth: true })
            const csrfToken = await service.getCsrfToken()
            console.log(csrfToken)
        }
    },
    post: {
        login: async (data: {
            email: string
            password: string
        }): Promise<AuthUserDTO> => {
            const service = new Service({ withAuth: false })
            const auth = await service.post<AuthUserDTO>(
                SERVICE_ENDPOINT("login"),
                data
            )

            return auth
        },
        logout: async (): Promise<LogoutUserDTO> => {
            const service = new Service({withAuth: true})
            const logout = await service.post<LogoutUserDTO>(
                SERVICE_ENDPOINT("logout")
            )

            return logout

        }
    },
}
