import { User } from '../User'

const KEY_LOCALSTORAGE_ROLE = 'PV_ROLE_KEY_LOCALSTORAGE'

enum ROLE {
    ADMIN = 'ADMIN',
    TESTER = 'TESTER',
    GUEST = 'GUEST'
}

const ROLES_BY_ID = {
    '1': ROLE.ADMIN,
    '2': ROLE.TESTER,
    '3': ROLE.GUEST,
}

type Role = {
    id: number
    name: ROLE
}

type ChangeRoleDTO = User

export {
    ROLE,
    Role,
    ChangeRoleDTO,
    ROLES_BY_ID,
    KEY_LOCALSTORAGE_ROLE
}