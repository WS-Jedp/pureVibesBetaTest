import { User } from '../User'

enum ROLE {
    ADMIN = 'ADMIN',
    TESTER = 'TESTER',
    GUEST = 'GUEST'
}

type Role = {
    id: number
    name: ROLE
}

type ChangeRoleDTO = User

export {
    ROLE,
    Role,
    ChangeRoleDTO
}