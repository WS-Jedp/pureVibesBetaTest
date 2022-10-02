import { AuthUserDTO, LogoutUserDTO } from "../../core/DTO/Auth"
import { UserDTO } from "../../core/DTO/User"
import request, { SERVICE_ENDPOINT } from "../request"
import ServiceResponse from '../response'

import { LoginParameters } from './types'

export const AuthServices = {
    get: {
        user: async (): Promise<ServiceResponse<UserDTO | null>> => {
            request.setAuthHeaders()
            const response = await request.get<UserDTO>(SERVICE_ENDPOINT("user"))
                .then(authUser => {
                    return new ServiceResponse<UserDTO>({
                        error: null,
                        message: null,
                        response: authUser,
                        status: 200,
                    })
                })
                .catch(statusError => {
                    return new ServiceResponse<null>({
                        error: true,
                        message: "We can't get the user information, try later",
                        response: null,
                        status: statusError
                    })
                })

            return response
        },
        csrf: async (): Promise<void> => {
            await request.getCsrfToken()
        }
    },
    post: {
        login: async (data: LoginParameters): Promise<ServiceResponse<AuthUserDTO | null>> => {
            request.disableAuthHeaders()
            const auth = await request.post<AuthUserDTO>(
                SERVICE_ENDPOINT("login"),
                data
            ).then(authUser => {
                return new ServiceResponse<AuthUserDTO>({
                    error: null,
                    message: null,
                    response: authUser,
                    status: 200
                })
            }).catch(statusError => {
                return new ServiceResponse<null>({
                    status: statusError,
                    error: true,
                    message: "Bad credentials!",
                    response: null
                })
            })

            return auth
        },
        logout: async (): Promise<ServiceResponse<LogoutUserDTO | null>> => {
            request.setAuthHeaders()
            const logout = await request.post<LogoutUserDTO>(
                SERVICE_ENDPOINT("logout")
            ).then(logout => {
                return new ServiceResponse<LogoutUserDTO>({
                    error: null,
                    status: 200,
                    message: null,
                    response: logout
                })
            }).catch(statusError => {
                return new ServiceResponse<null>({
                    error: true,
                    status: statusError,
                    message: "We sorry, there is a server problem try later :(",
                    response: null
                })
            })

            return logout
        }
    },
}
