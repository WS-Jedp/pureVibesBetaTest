import React, { useEffect } from 'react'
import { RouteProps } from 'react-router-dom'
import { LoginProps } from './types'

import { StarsRate } from '../../components/starsRate'

import { RootState } from '../../store'
import { becomeTester } from '../../store/role'
import { useSelector, useDispatch } from 'react-redux'

import { AuthServices } from '../../services/auth'

export const Login:React.FC<LoginProps & RouteProps> = () => {

    const userRole = useSelector<RootState>(state => state.role.role)
    const dispatch = useDispatch()

    useEffect(() => {

        const getData = async () => {
            const data = await AuthServices.post.login({
                email: 'jedp082@gmail.com',
                password: '05022001'
            })
            console.log(data)
        }
        getData()
    }, [])


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