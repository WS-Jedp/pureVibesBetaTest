import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { 
    KEY_LOCALSTORAGE_IS_ALL_TERMS_ACCEPTED,
    KEY_LOCALSTORAGE_NON_CLOSURE,
    KEY_LOCALSTORAGE_PRIVACY_POLICY,
    KEY_LOCALSTORAGE_RESPONSABILITIES,
    KEY_LOCALSTORAGE_RULES,
    KEY_LOCALSTORAGE_TERMS_AND_CONDITIONS
} from './types'

export interface TermsOfUseState {
    termsAndConditions: boolean
    privacyPolicy: boolean
    nonClosure: boolean
    responsabilities: boolean
    rules: boolean
    isAllTermsAccepted: boolean
}

const initialState: TermsOfUseState = {
    isAllTermsAccepted: false,
    nonClosure: false,
    privacyPolicy: false,
    responsabilities: false,
    rules: false,
    termsAndConditions: false
}

export const termsOfUseReducer = createSlice({
    name: 'TermsOfUser',
    initialState,
    reducers: {
        acceptTermsAndConditios(state) {
            state.termsAndConditions = true
        },
        acceptPrivacyPolicy(state) {
            state.privacyPolicy = true
        },
        acceptNonClosure(state) {
            state.nonClosure = true
        },
        acceptResponsabilites(state) {
            state.responsabilities = true
        },
        acceptRules(state) {
            state.rules = true
        },
        setIsAllTermsAccepted(state, action: PayloadAction<boolean>) {
            state.isAllTermsAccepted = action.payload
        },
        checkAllTermsAndConditions(state) {
            
            if(!state.isAllTermsAccepted || !localStorage.getItem(KEY_LOCALSTORAGE_IS_ALL_TERMS_ACCEPTED)) {
                if(localStorage.getItem(KEY_LOCALSTORAGE_IS_ALL_TERMS_ACCEPTED)) {
                    state.isAllTermsAccepted = true
                    state.nonClosure = true
                    state.privacyPolicy = true
                    state.responsabilities = true
                    state.rules = true
                    state.termsAndConditions = true
                } else {

                    if(localStorage.getItem(KEY_LOCALSTORAGE_NON_CLOSURE)) (state.nonClosure = true)
                    if(localStorage.getItem(KEY_LOCALSTORAGE_PRIVACY_POLICY)) (state.privacyPolicy = true)
                    if(localStorage.getItem(KEY_LOCALSTORAGE_RESPONSABILITIES)) (state.responsabilities = true)
                    if(localStorage.getItem(KEY_LOCALSTORAGE_RULES)) (state.rules = true)
                    if(localStorage.getItem(KEY_LOCALSTORAGE_TERMS_AND_CONDITIONS)) (state.termsAndConditions = true)
                }

                if(state.nonClosure && state.privacyPolicy && state.responsabilities && state.rules && state.termsAndConditions ) (state.isAllTermsAccepted = true)
            }
        }
    }
})

export const {
    acceptNonClosure,
    acceptPrivacyPolicy,
    acceptResponsabilites,
    acceptRules,
    acceptTermsAndConditios,
    setIsAllTermsAccepted,
    checkAllTermsAndConditions
} = termsOfUseReducer.actions

export default termsOfUseReducer.reducer
