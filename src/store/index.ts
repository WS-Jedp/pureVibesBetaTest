import { configureStore } from '@reduxjs/toolkit'
import roleReducer from './role'
import userReducer from './user'
import surveysReducer from './survey'
import answersReducer from './answers'
import termsOfUseReducer from './termsOfUse'

export const store = configureStore({
    reducer: {
        role: roleReducer,
        user: userReducer,
        surveys: surveysReducer,
        answers: answersReducer,
        termsOfUse: termsOfUseReducer
    },
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch