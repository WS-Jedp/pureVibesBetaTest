import React from 'react'
import { RouteProps } from 'react-router-dom'
import { LoginProps } from './types'

import { StarsRate } from '../../components/starsRate'

import { RootState } from '../../store'
import { becomeTester } from '../../store/role'
import { useSelector, useDispatch } from 'react-redux'

export const Login:React.FC<LoginProps & RouteProps> = () => {

    const userRole = useSelector<RootState>(state => state.role.role)
    const dispatch = useDispatch()


    return (
        <section>
            Hello { userRole } from the login page :)

            <button onClick={() => dispatch(becomeTester())}>
                Become tester!
            </button>
            <article>
                <StarsRate></StarsRate>
            </article>
        </section>
    )
}