import { createSlice, PayloadAction } from '@reduxjs/toolkit'

enum ROLE {
    ADMIN = 'ADMIN',
    TESTER = 'TESTER',
    GUEST = 'GUEST'
}

export interface RoleState {
    role: ROLE
}

const initialState: RoleState = {
    role: ROLE.GUEST
}

export const roleSlice = createSlice({
    name: 'role',
    initialState,
    reducers: {
        setRole(state, action: PayloadAction<ROLE>) {
            state.role = action.payload
        },
       becomeTester(state) {
           state.role = ROLE.TESTER
       }
    }
})

export const { becomeTester, setRole } = roleSlice.actions
export default roleSlice.reducer