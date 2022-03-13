import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { KEY_LOCALSTORAGE_ROLE, ROLE } from '../../core/DTO/Role'

export interface RoleState {
    role: ROLE | null
}

const initialState: RoleState = {
    role: ROLE.GUEST
}

export const roleSlice = createSlice({
    name: 'role',
    initialState,
    reducers: {
        setRole(state, action: PayloadAction<ROLE>) {
            localStorage.setItem(KEY_LOCALSTORAGE_ROLE, action.payload)
            state.role = action.payload
        },
       becomeTester(state) {
            localStorage.setItem(KEY_LOCALSTORAGE_ROLE, ROLE.ADMIN)
           state.role = ROLE.TESTER
       },
       removeRole(state) {
           state.role = null
       }
    }
})

export const { becomeTester, setRole, removeRole } = roleSlice.actions
export default roleSlice.reducer