import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Answer } from '../../core/DTO/Results'

export interface AnswersState {
    surveyID: number | null
    answers: Answer[]
}

const initialState: AnswersState = {
    surveyID: null,
    answers: []
}

export const answersSlice = createSlice({
    name: 'answers',
    initialState,
    reducers: {
        setNewCurrentSurvey(state, action: PayloadAction<number>) {
            state.surveyID = action.payload
            state.answers = []
        },
        addNewAnswer(state, action: PayloadAction<Answer>) {
            state.answers.push(action.payload)
        },
        removeAnswer(state, action: PayloadAction<number>) {
            state.answers = state.answers
                .filter(answer => answer.question_id !== action.payload)
        },
        removeCurrentAnswers(state) {
            state.surveyID = null
            state.answers = []
        }
    }
})

export const {
    addNewAnswer,
    removeAnswer,
    removeCurrentAnswers,
    setNewCurrentSurvey
} = answersSlice.actions

export default answersSlice.reducer
