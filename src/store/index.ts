import { configureStore } from '@reduxjs/toolkit'
import roleReducer from './role'
import userReducer from './user'
import surveysReducer from './survey'
import answersReducer from './answers'

export const store = configureStore({
    reducer: {
        role: roleReducer,
        user: userReducer,
        surveys: surveysReducer,
        answers: answersReducer
    },
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch