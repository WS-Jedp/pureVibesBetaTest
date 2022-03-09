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
            state.isAllTermsAccepted = true
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
        checkAllTermsAndConditions({ isAllTermsAccepted, nonClosure, privacyPolicy, responsabilities, rules, termsAndConditions }) {

            if(!isAllTermsAccepted) {
                if(localStorage.getItem(KEY_LOCALSTORAGE_IS_ALL_TERMS_ACCEPTED)) {
                    isAllTermsAccepted = true
                    nonClosure = true
                    privacyPolicy = true
                    responsabilities = true
                    rules = true
                    termsAndConditions = true
                } else {
                    if(localStorage.getItem(KEY_LOCALSTORAGE_NON_CLOSURE)) (nonClosure = true)
                    if(localStorage.getItem(KEY_LOCALSTORAGE_PRIVACY_POLICY)) (privacyPolicy = true)
                    if(localStorage.getItem(KEY_LOCALSTORAGE_RESPONSABILITIES)) (responsabilities = true)
                    if(localStorage.getItem(KEY_LOCALSTORAGE_RULES)) (rules = true)
                    if(localStorage.getItem(KEY_LOCALSTORAGE_TERMS_AND_CONDITIONS)) (termsAndConditions = true)
                }

                if(nonClosure && privacyPolicy && responsabilities && rules && termsAndConditions ) (isAllTermsAccepted = true)
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
    setIsAllTermsAccepted
} = termsOfUseReducer.actions

export default termsOfUseReducer.reducer
