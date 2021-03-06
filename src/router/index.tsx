import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom'

import { AuthContainer } from '../containers/auth'
import { Login } from '../pages/Login'
import { Home } from '../pages/Home'
import { Surveys } from '../pages/Surveys'
import { Survey } from '../pages/Survey'
import { FriendReferral } from '../pages/FriendReferral'
import { Rules } from '../pages/Rules'
import { TermsOfUse } from '../pages/TermsOfUse'
import { Invited } from '../pages/Invited'

import { RootState } from '../store'

export const Router = () => {

    const isAuth = useSelector<RootState, boolean>(state => state.user.isAuth)

    return (
        <BrowserRouter>
            <Routes>
                {
                    isAuth && (
                        <AuthContainer>
                                <Route path='/home'  element={<Home />} />
                                <Route path='/dashboard'  element={<Home />} />

                                <Route path='*' element={<Navigate to="/home" />} />
                        </AuthContainer>
                    )
                }

                <Route path='/home'  element={<Home />} />
                <Route path='/surveys'  element={<Surveys />} />
                <Route path='/dashboard/survey/:surveyID'  element={<Survey />} />
                <Route path='/invite-friend'  element={<FriendReferral />} />
                <Route path='/rules'  element={<Rules />} />
                <Route path='/terms-of-use'  element={<TermsOfUse />} />
                <Route path='/invited'  element={<Invited />} />
                

                <Route path='/login'  element={<Login />} />
                <Route path='*' element={<Navigate to="/login" />} />
            </Routes>
        </BrowserRouter>
    )
}