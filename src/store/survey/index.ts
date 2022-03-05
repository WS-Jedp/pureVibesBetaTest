import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SurveysDTO, Survey } from '../../core/DTO/Survey'
import { CurrentSurvey } from './types'

export interface SurveysState {
    currentSurvey: CurrentSurvey | null
    surveysFinished: number[]
    allSurveys: SurveysDTO
}

const initialState: SurveysState = {
    currentSurvey: null,
    surveysFinished: [],
    allSurveys: []
}

export const surveysSlice = createSlice({
    name: 'surveys',
    initialState,
    reducers: {
        setAllSurveysFinished(state, action: PayloadAction<number[]>) {
            state.surveysFinished = action.payload
        },
        addSurveyIntoFinished(state, action: PayloadAction<number>) {
            state.surveysFinished.push(action.payload)
        },
        removeSurveysFinished(state) {
            state.surveysFinished = []
        },
        setCurrentSurvey(state, action: PayloadAction<CurrentSurvey>) {
            state.currentSurvey = action.payload
        },
        removeCurrentSurvey(state) {
            state.currentSurvey = null
        },
        setAllSurveys(state, action: PayloadAction<SurveysDTO>) {
            state.allSurveys = action.payload
        },
        addSurvey(state, action: PayloadAction<Survey>) {
            state.allSurveys.push({
                id: action.payload.id,
                name: action.payload.name,
            })
        },
        removeSurvey(state, action: PayloadAction<number>) {
            state.allSurveys = state.allSurveys
                .filter(survey => survey.id !== action.payload)
        },
     }
})

export const {
    addSurvey,
    addSurveyIntoFinished,
    removeCurrentSurvey,
    removeSurvey,
    removeSurveysFinished,
    setAllSurveys,
    setAllSurveysFinished,
    setCurrentSurvey
} = surveysSlice.actions

export default surveysSlice.reducer
