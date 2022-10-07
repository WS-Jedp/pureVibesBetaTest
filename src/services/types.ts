import { HEADER_CSRF_TOKEN_KEY } from '../core/DTO/Auth'

type RestClientResponse<T> = {
    status: number
    data: T,
    message?: string
}

type RequestHeaders = {
    Accept: string
    'Content-Type': string
    _method: METHODS_ACCEPTED
    Authorization?: string
    [HEADER_CSRF_TOKEN_KEY]?: string
}

type GetOptions = {
    [key: string]: any
}

enum METHODS_ACCEPTED {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    PATCH = "PATCH"
}

export {
    RestClientResponse,
    RequestHeaders,
    GetOptions,
    METHODS_ACCEPTED
}