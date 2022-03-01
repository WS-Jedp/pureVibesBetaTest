const COOKIE_CSRF_TOKEN_KEY = 'XSRF-TOKEN'
const HEADER_CSRF_TOKEN_KEY = 'X-XSRF-TOKEN'
const AUTH_KEY_LOCAL_STORAGE = 'PV_AUTH_TOKEN'

type AuthUserDTO = {
    token: string
    role: {
        name: string
    }
}

type LogoutUserDTO = boolean

export {
    AuthUserDTO,
    LogoutUserDTO,
    AUTH_KEY_LOCAL_STORAGE,
    COOKIE_CSRF_TOKEN_KEY,
    HEADER_CSRF_TOKEN_KEY
}