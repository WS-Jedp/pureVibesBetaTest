import { configureStore } from '@reduxjs/toolkit'
import roleReducer from './role'

export const store = configureStore({
    reducer: {
        role: roleReducer,
    },
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch