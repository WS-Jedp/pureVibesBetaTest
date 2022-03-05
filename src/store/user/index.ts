import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserDTO, User } from '../../core/DTO/User'
import { AuthUserDTO } from '../../core/DTO/Auth'
import { getRoles } from '@testing-library/react'

export interface UserState {
    isAuth: boolean
    token: string | null
    user: User | null
    invitedBy: number | null
}

const initialState:UserState = {
    isAuth: false,
    token: null,
    user: null,
    invitedBy: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload
        },
        setToken(state, action: PayloadAction<string>) {
            state.token = action.payload
        },
        removeToken(state) {
            state.token = null
        },
        setUser(state, action: PayloadAction<UserDTO>) {
            state.user = action.payload.user
            state.invitedBy = action.payload.invitedBy
        },
        removeUser(state) {
            state.isAuth = false
            state.invitedBy = null
            state.user = null
            state.token = null
        }
    }
 })

export const { removeToken, removeUser, setAuth, setToken, setUser } = userSlice.actions
export default userSlice.reducer