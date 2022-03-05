import { Result } from '../Results'

type User = {
    id: number
    name: string
    email: string
    role_id: string
    results?: Result[]
}


type UserDTO = {
    user: User,
    invitedBy: number | null
}


export {
    User,
    UserDTO
}