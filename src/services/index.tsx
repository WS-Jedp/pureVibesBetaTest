import { AuthServices } from './auth'

export const Services = {
    get: {
        Auth: AuthServices.get
    },
    post: {
        Auth: AuthServices.post
    },
}