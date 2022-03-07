import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { AUTH_KEY_LOCAL_STORAGE } from '../../core/DTO/Auth'

import { RootState } from '../../store'
import { UserState, setAuth, setUser, setToken, removeUser } from '../../store/user'

import { AuthServices } from '../../services/auth'

export const AuthContainer:React.FC = ({ children }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const authState = useSelector<RootState, UserState>(state => state.user)  

    useEffect(() => {

        async function authenticate() {
            if(!authState.isAuth || !authState.token) {
                const lastTokenSaved = localStorage.getItem(AUTH_KEY_LOCAL_STORAGE)
                if(!lastTokenSaved) {
                    dispatch(removeUser())
                    return navigate('/login')
                }

                const user = await AuthServices.get.user()

                if(user.error) {
                    localStorage.removeItem(AUTH_KEY_LOCAL_STORAGE)
                    dispatch(removeUser())
                    return navigate('/login')
                }

                dispatch( setAuth(true) )
                dispatch( setToken(lastTokenSaved) )
                dispatch( setUser(user.response) )

                navigate('/dashboard')
            }
        }

        !authState.isAuth && authenticate()

    }, [ authState.isAuth, authState.token ])

    return (
        <>
            { children }
        </>
    )
}