import { AUTH_KEY_LOCAL_STORAGE, COOKIE_CSRF_TOKEN_KEY, HEADER_CSRF_TOKEN_KEY } from '../core/DTO/Auth'
import Cookies from 'js-cookie'

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

class Service {
    private baseUrl = 'http://localhost:8000'
    private auth: boolean
    private token: string
    private currentMethod: METHODS_ACCEPTED

    constructor({
        withAuth = false
    }) {
        if(withAuth) {
            this.auth = true
            this.token = window.localStorage.getItem(AUTH_KEY_LOCAL_STORAGE)
        }
    }

    getHeaders(): RequestHeaders {
        const headers: RequestHeaders = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            '_method': this.currentMethod,
        }

        if(this.auth) {
            headers.Authorization = `Bearer ${this.token}`
        }

        if(this.currentMethod === METHODS_ACCEPTED.POST) {
            headers[HEADER_CSRF_TOKEN_KEY] = Cookies.get(COOKIE_CSRF_TOKEN_KEY)
        }

        return headers
    }


    async get<T>(url: string, options?: GetOptions): Promise<T> {
        this.currentMethod = METHODS_ACCEPTED.GET
        const headers = this.getHeaders()

        try {
            const resp = await fetch(this.baseUrl + url, {
                method: 'get',
                body: options && JSON.stringify(options),
                credentials: 'same-origin',
                headers
            })

            const json: RestClientResponse<T> = resp.json() as unknown as RestClientResponse<T> 
            return json.data

        } catch (error) {
            throw new Error(error)
        }
    }

    async post<T>(url: string, options?: GetOptions): Promise<T> {
        this.currentMethod = METHODS_ACCEPTED.POST
        const headers = this.getHeaders()

        try {
            const resp = await fetch(this.baseUrl + url, {
                method: 'post',
                body: options && JSON.stringify(options),
                credentials: 'same-origin',
                headers
            })

            const json: RestClientResponse<T> = resp.json() as unknown as RestClientResponse<T> 
            return json.data

        } catch (error) {
            throw new Error(error)
        }
    }

    async put<T>(url: string, options?: GetOptions): Promise<T> {
        this.currentMethod = METHODS_ACCEPTED.PUT
        const headers = this.getHeaders()

        try {
            const resp = await fetch(this.baseUrl + url, {
                method: 'post',
                body: options && JSON.stringify(options),
                credentials: 'same-origin',
                headers
            })

            const json: RestClientResponse<T> = resp.json() as unknown as RestClientResponse<T> 
            return json.data

        } catch (error) {
            throw new Error(error)
        }
    }

    async getCsrfToken(): Promise<void> {
        this.currentMethod = METHODS_ACCEPTED.GET
        const headers = this.getHeaders()

        try {
            await fetch(this.baseUrl + '/sanctum/csrf-cookie', {
                method: 'get',
                credentials: 'same-origin',
                headers
            })
            console.log(Cookies.get())
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default Service
export {
    RestClientResponse
}