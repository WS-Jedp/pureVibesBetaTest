import React, { useEffect, useState } from 'react'
import { RouteProps, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { LoginForm } from './types'
import { LoginContainer, LoginFormCard } from './styles'

import { RootState } from '../../store'
import { setAuth, setToken, setUser, UserState } from '../../store/user'
import { useSelector, useDispatch } from 'react-redux'

import { AUTH_KEY_LOCAL_STORAGE } from '../../core/DTO/Auth'
import { AuthServices } from '../../services/auth'

import { PureVibesButton } from '../../components/button'
import { Loading } from '../../containers/loading'
import { setRole } from '../../store/role'
import { ROLE, ROLES_BY_ID } from '../../core/DTO/Role'

export const Login:React.FC<RouteProps> = () => {

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors }} = useForm<LoginForm>()

    const userState = useSelector<RootState, UserState>(state => state.user)
    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const getUser = async () => {
        const userResp = await AuthServices.get.user()

        if(userResp.error) {
            console.error("Your session was caducated, login again")
            setIsLoading(false)
            return
        }
        const user = userResp.response
        dispatch(setUser(user))
        return user
    }

    // Login function to auth the user
    const onLogin = async (data: LoginForm) => {
        setIsLoading(true)

        const authResp = await AuthServices.post.login(data)

        if(authResp.error) {
            console.error("Bad credentials")
            setIsLoading(false)
            return
        }

        const auth = authResp.response
        localStorage.setItem(AUTH_KEY_LOCAL_STORAGE, auth.token)
        dispatch(setToken(auth.token))
        dispatch(setAuth(true))

        const user = await getUser()

        if(user) {
            navigate('/home')
        }
    }

    // Doing automatically the auth if the user's token is saved in local storage
    useEffect(() => {
        const automaticallyAuth = async () => {
            const authToken = localStorage.getItem(AUTH_KEY_LOCAL_STORAGE)
            if(!authToken) return

            const user = await getUser()
            if(user) {
                dispatch(setToken(authToken))
                dispatch(setAuth(true))
                dispatch(setRole(ROLES_BY_ID[user.user.role_id]))
                navigate('/home')
            }
        }

        automaticallyAuth()
    }, [])


    return (
        <LoginContainer className='fluid-contianer w-100 d-flex flex-column align-items-center justify-content-center'>

            <img src="/assets/images/pv_logo.svg" alt="Logo from Pure Vibes Global" width={120} className='m-4' />

            <LoginFormCard className='d-flex flex-column p-4 align-items-start justify-content-center text-start'>
                <div>
                    <h3 className='fw-bold fs-4'>Sign In</h3>
                    <p className='fs-light fs-6'>Sign in to begin the beta test!</p>
                </div>

                <form onSubmit={handleSubmit(onLogin)} className='my-3 w-100 px-1 d-flex flex-column align-items-center justify-content-center'>
                    <label htmlFor="email" className='my-2 w-100'>
                        <strong className='fw-bold fs-6'>Email</strong>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder='Write your email' 
                            {...register("email", { required: true, minLength: 1 })}
                        />
                    </label>

                    <label htmlFor="password" className='my-2 w-100'>
                        <strong className='fw-bold fs-6'>Password</strong>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder='Write your password'
                            {...register("password", { required: true, minLength: 3 })}
                        />
                    </label>
                    <div className='w-100 d-flex align-items-center justify-content-center my-3'>
                        <PureVibesButton 
                            text="Login"
                            isFormButton
                        />
                    </div>
                </form>



                <div className='w-100 d-flex flex-column align-items-center justify-content-center text-center'>
                    <p className='fs-6 fw-lighter text-center'>
                        © Dharma 2022
                    </p>
                </div>

            </LoginFormCard>

            {
                isLoading && (
                    <Loading></Loading>
                ) 
            }
        </LoginContainer>
    )
}