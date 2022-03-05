type ErrorResponseParameters<T> = {
    error: true
    message: string | null
    status: number
    response: T
}

class ServiceResponse<T> {
    public status: number
    public error: boolean
    public message: string | null
    public response: T

    constructor({ error, message, response, status }:ErrorResponseParameters<T>) {
        this.error = error
        this.message = message
        this.status = status
        this.response = response
    }
}

export default ServiceResponse
export {
    ServiceResponse,
    ErrorResponseParameters
}