import React, { useEffect } from 'react'
import { RouteProps } from 'react-router-dom'
import { LoginProps } from './types'

import { LoginContainer, LoginFormCard } from './styles'

import { StarsRate } from '../../components/starsRate'

import { RootState } from '../../store'
import { becomeTester } from '../../store/role'
import { useSelector, useDispatch } from 'react-redux'

import { AuthServices } from '../../services/auth'

import { PureVibesButton } from '../../components/button'

export const Login:React.FC<RouteProps> = () => {

    const userRole = useSelector<RootState>(state => state.role.role)
    const dispatch = useDispatch()

    const hello = () => {
        console.log("hello world")
    }


    return (
        <LoginContainer className='fluid-contianer w-100 d-flex flex-column align-items-center justify-content-center'>

            <img src="/assets/images/pv_logo.svg" alt="Logo from Pure Vibes Global" width={120} className='m-4' />

            <LoginFormCard className='d-flex flex-column p-4 align-items-start justify-content-center text-start'>
                <div>
                    <h3 className='fw-bold fs-4'>Sign In</h3>
                    <p className='fs-light fs-6'>Sign in to begin the beta test!</p>
                </div>

                <div className='my-3 w-100 px-1 d-flex flex-column align-items-center justify-content-center'>
                    <label htmlFor="email" className='my-2 w-100'>
                        <strong className='fw-bold fs-6'>Email</strong>
                        <input type="email" name="email" id="email" placeholder='Write your email' />
                    </label>

                    <label htmlFor="password" className='my-2 w-100'>
                        <strong className='fw-bold fs-6'>Password</strong>
                        <input type="password" name="password" id="password" placeholder='Write your password' />
                    </label>
                </div>

                <div className='w-100 d-flex align-items-center justify-content-center mb-3'>
                    <PureVibesButton 
                        action={hello}
                        text="Login"
                    />
                </div>


                <div className='w-100 d-flex flex-column align-items-center justify-content-center text-center'>
                    <p className='fs-6 fw-lighter text-center'>
                        © Dharma 2022
                    </p>
                </div>

            </LoginFormCard>
        </LoginContainer>
    )
}